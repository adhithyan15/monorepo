import { Operation } from "./Operation";
import { OperationResult } from "./OperationResult";
import { OperationResultFactory } from "./OperationResultFactory";

export interface OperationFactory {
    createOperation<OperationReturnType>(operationName: string, callbackFunction: (operation: Operation<OperationReturnType>, operationResultFactory: OperationResultFactory) => OperationResult<OperationReturnType>, fallbackResult: OperationReturnType): Operation<OperationReturnType>;
}