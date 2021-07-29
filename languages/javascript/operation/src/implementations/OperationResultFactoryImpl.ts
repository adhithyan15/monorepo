import { OperationResult } from "../interfaces/OperationResult";
import { OperationResultFactory } from "../interfaces/OperationResultFactory";

export class OperationResultFactoryImpl implements OperationResultFactory {
    public generateOperationResult<OperationReturnType>(params: { didOperationSucceed: boolean, returnValue: OperationReturnType, didOperationFailUnexpectedly?: boolean}): OperationResult<OperationReturnType> {
        return {
            didOperationSucceed: params.didOperationSucceed,
            didOperationFailUnexpectedly: params.didOperationFailUnexpectedly === undefined ? false : params.didOperationFailUnexpectedly,
            returnValue: params.returnValue
        }
    }
}