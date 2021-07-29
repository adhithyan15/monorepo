import { OperationFactory } from "../interfaces/OperationFactory";
import { Operation } from "../interfaces/Operation";
import { OperationImpl } from "./OperationImpl";
import { StructuredLogger } from "../../../structured-logger/src/interfaces/StructuredLogger";
import { StopWatchFactory } from "../../../stopwatchy/src/interfaces/StopWatchFactory";
import { StopWatch } from "../../../stopwatchy/src/interfaces/StopWatch";
import { OperationResult } from "../interfaces/OperationResult";
import { OperationResultFactory } from "../interfaces/OperationResultFactory";
import { OperationResultFactoryImpl } from "./OperationResultFactoryImpl";

export class OperationFactoryImpl implements OperationFactory {
    private operationResultFactory: OperationResultFactory;
    constructor(private stopWatchFactory: StopWatchFactory, private structuredLogger: StructuredLogger) {
        this.operationResultFactory = new OperationResultFactoryImpl();
    }
    public createOperation<OperationReturnType>(operationName: string, callbackFunction: (operation: Operation<OperationReturnType>, operationResultFactory: OperationResultFactory) => OperationResult<OperationReturnType>, fallbackResult: OperationReturnType): Operation<OperationReturnType> {
        const stopWatch: StopWatch = this.stopWatchFactory.createStopWatch();
        return new OperationImpl<OperationReturnType>(operationName, callbackFunction, stopWatch, fallbackResult, this.operationResultFactory, this.structuredLogger);
    }
}