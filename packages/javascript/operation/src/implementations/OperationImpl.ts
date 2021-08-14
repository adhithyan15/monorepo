import { Operation } from "../interfaces/Operation";
import { StructuredLogger } from "../../../structured-logger/src/interfaces/StructuredLogger";
import { StopWatch } from "../../../stopwatchy/src/interfaces/StopWatch";
import { OperationLog } from "../interfaces/OperationLog";
import { OperationResult } from "../interfaces/OperationResult";
import { OperationResultFactory } from "../interfaces/OperationResultFactory";

export class OperationImpl<OperationReturnType> implements Operation<OperationReturnType> {
  private propertyBag: Record<string, unknown>;
  constructor(
    private operationName: string,
    private callbackFunction: (operation: Operation<OperationReturnType>, operationResultFactory: OperationResultFactory) => OperationResult<OperationReturnType>,
    private stopWatch: StopWatch,
    private fallbackResult: OperationReturnType,
    private operationResultFactory: OperationResultFactory,
    private logger: StructuredLogger
  ) {
    this.propertyBag = {};
  }
  public getOperationName(): string {
    return this.operationName;
  }
  public getResult(): OperationReturnType {
    let didOperationSucceed: boolean = true;
    let didOperationFailUnexpectedly: boolean = false;
    let encounteredException: boolean = false;
    let exceptionInfo: any = undefined;
    let resultToReturn: OperationReturnType = this.fallbackResult;
    this.stopWatch.start();
    try {
      const operationResult: OperationResult<OperationReturnType> = this.callbackFunction(this, this.operationResultFactory);
      didOperationSucceed = operationResult.didOperationSucceed;
      didOperationFailUnexpectedly = operationResult.didOperationFailUnexpectedly;
      resultToReturn = operationResult.returnValue;
    } catch (exception) {
      didOperationSucceed = false;
      encounteredException = true;
      exceptionInfo = exception;
    }
    this.stopWatch.stop();
    const elapsedTime: number = this.stopWatch.getElapsedTime();
    const operationLog: OperationLog = {
      operationName: this.operationName,
      elapsedTime: elapsedTime,
      didOperationSucceed,
      didOperationFailUnexpectedly,
      encounteredException,
      exceptionInfo,
      propertyBag: this.propertyBag
    };
    this.logger.logInfo(JSON.stringify(operationLog));
    return resultToReturn;
  }
  public addProperty(propertyName: string, propertyValue: string | number): void {
    this.propertyBag[propertyName] = propertyValue;
  }
}