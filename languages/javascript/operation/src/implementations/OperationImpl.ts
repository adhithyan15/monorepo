import { Operation } from "../interfaces/Operation";
import { StructuredLogger } from "../../../structured-logger/src/interfaces/StructuredLogger";
import { StopWatch } from "../../../stopwatchy/src/interfaces/StopWatch";
import { OperationLog } from "../interfaces/OperationLog";

export class OperationImpl<OperationReturnType> implements Operation<OperationReturnType> {
  constructor(
    private operationName: string,
    private callbackFunction: () => OperationReturnType,
    private stopWatch: StopWatch,
    private logger: StructuredLogger
  ) {}
  public getOperationName(): string {
    return this.operationName;
  }
  public getResult(): OperationReturnType {
    this.stopWatch.start();
    const resultToReturn: OperationReturnType = this.callbackFunction();
    this.stopWatch.stop();
    const elapsedTime: number = this.stopWatch.getElapsedTime();
    const operationLog: OperationLog = {
      operationName: this.operationName,
      elapsedTime: elapsedTime
    };
    this.logger.logInfo(JSON.stringify(operationLog));
    return resultToReturn;
  }
}