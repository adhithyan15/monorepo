import { Operation } from "../interfaces/Operation";
import { StructuredLogger } from "../../../structured-logger/src/interfaces/StructuredLogger";

export class OperationImpl<OperationReturnType> implements Operation<OperationReturnType> {
  constructor(
    private operationName: string,
    private callbackFunction: () => OperationReturnType,
    private logger: StructuredLogger
  ) {}
  public getOperationName(): string {
    return this.operationName;
  }
  public getResult(): OperationReturnType {
    return this.callbackFunction();
  }
}