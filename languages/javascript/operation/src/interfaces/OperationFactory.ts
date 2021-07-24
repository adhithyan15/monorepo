import { Operation } from "./Operation";

export interface OperationFactory {
    createOperation<OperationReturnType>(operationName: string, callbackFunction: () => OperationReturnType): Operation<OperationReturnType>;
}