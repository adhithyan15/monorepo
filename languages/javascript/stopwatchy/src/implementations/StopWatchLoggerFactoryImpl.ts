import { StopWatchLoggerFactory } from "../interfaces/StopWatchLoggerFactory";
import { StopWatchLogger } from "../interfaces/StopWatchLogger";
import { StopWatchLoggerImpl } from "./StopWatchLoggerImpl";
import { StructuredLogger } from "../../../structured-logger/src/interfaces/StructuredLogger";

export class StopWatchLoggerFactoryImpl implements StopWatchLoggerFactory {
    public createLogger(structuredLogger: StructuredLogger): StopWatchLogger {
        return new StopWatchLoggerImpl(structuredLogger);
    }
}