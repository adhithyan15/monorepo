export interface OperationLog {
    operationName: string,
    elapsedTime: number;
    propertyBag: Record<string, unknown>
}