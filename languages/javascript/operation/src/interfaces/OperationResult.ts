export interface OperationResult<OperationReturnType> {
    didOperationSucceed: boolean,
    didOperationFailUnexpectedly: boolean,
    returnValue: OperationReturnType
}