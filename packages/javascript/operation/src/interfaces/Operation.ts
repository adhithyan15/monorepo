export interface Operation<OperationReturnType> {
    addProperty(propertyName: string, propertyValue: any): void;
    getOperationName(): string;
    getResult(): OperationReturnType;
}