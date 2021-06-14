import { StopWatchLoggerFactory } from "../interfaces/StopWatchLoggerFactory";
import { StopWatchLogger } from "../interfaces/StopWatchLogger";
import { StopWatchLoggerImpl } from "./StopWatchLoggerImpl";
import { StructuredLoggerFactory } from "../../../structured-logger/src/interfaces/StructuredLoggerFactory";
import { getStructuredLoggerFactory } from "../../../structured-logger/src/index";

export class StopWatchLoggerFactoryImpl implements StopWatchLoggerFactory {
    public createLogger(): StopWatchLogger {
        const structuredLoggerFactory: StructuredLoggerFactory = getStructuredLoggerFactory();
        return new StopWatchLoggerImpl(structuredLoggerFactory.createLogger());
    }
}