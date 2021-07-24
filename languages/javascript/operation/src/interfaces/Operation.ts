export interface Operation<OperationReturnType> {
    getOperationName(): string;
    getResult(): OperationReturnType;
}