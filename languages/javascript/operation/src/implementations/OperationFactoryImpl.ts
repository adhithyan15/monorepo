import { OperationFactory } from "../interfaces/OperationFactory";
import { Operation } from "../interfaces/Operation";
import { OperationImpl } from "./OperationImpl";
import { StructuredLogger } from "../../../structured-logger/src/interfaces/StructuredLogger";
import { StopWatchFactory } from "../../../stopwatchy/src/interfaces/StopWatchFactory";
import { StopWatch } from "../../../stopwatchy/src/interfaces/StopWatch";

export class OperationFactoryImpl implements OperationFactory {
    constructor(private stopWatchFactory: StopWatchFactory, private structuredLogger: StructuredLogger) {}
    public createOperation<OperationReturnType>(operationName: string, callbackFunction: () => OperationReturnType): Operation<OperationReturnType> {
        const stopWatch: StopWatch = this.stopWatchFactory.createStopWatch();
        return new OperationImpl<OperationReturnType>(operationName, callbackFunction, stopWatch, this.structuredLogger);
    }
}