import { OperationResult } from "./OperationResult";

export interface OperationResultFactory {
    generateOperationResult<OperationReturnType>(params: { didOperationSucceed: boolean, returnValue: OperationReturnType, didOperationFailUnexpectedly?: boolean}): OperationResult<OperationReturnType>;
}