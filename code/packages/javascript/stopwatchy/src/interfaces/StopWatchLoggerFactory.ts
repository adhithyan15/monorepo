import { StopWatchLogger } from "./StopWatchLogger";
import { StructuredLogger } from "../../../structured-logger/src/interfaces/StructuredLogger";

export interface StopWatchLoggerFactory {
    createLogger(structuredLogger: StructuredLogger): StopWatchLogger;
}