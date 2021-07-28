import { Operation } from "./Operation";

export interface OperationFactory {
    createOperation<OperationReturnType>(operationName: string, callbackFunction: (operation: Operation<OperationReturnType>) => OperationReturnType, fallbackResult: OperationReturnType): Operation<OperationReturnType>;
}