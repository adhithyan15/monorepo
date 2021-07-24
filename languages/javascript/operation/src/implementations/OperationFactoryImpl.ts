import { OperationFactory } from "../interfaces/OperationFactory";
import { Operation } from "../interfaces/Operation";
import { OperationImpl } from "./OperationImpl";
import { StructuredLogger } from "../../../structured-logger/src/interfaces/StructuredLogger";

export class OperationFactoryImpl implements OperationFactory {
    constructor(private structuredLogger: StructuredLogger) {}
    public createOperation<OperationReturnType>(operationName: string, callbackFunction: () => OperationReturnType): Operation<OperationReturnType> {
        return new OperationImpl<OperationReturnType>(operationName, callbackFunction, this.structuredLogger);
    }
}