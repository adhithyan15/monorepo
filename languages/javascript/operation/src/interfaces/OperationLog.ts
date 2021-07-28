export interface OperationLog {
    operationName: string,
    elapsedTime: number;
    didOperationSucceed: boolean;
    encounteredException: boolean;
    exceptionInfo: any;
    propertyBag: Record<string, unknown>
}