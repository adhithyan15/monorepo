import { StopWatchLogger } from "../interfaces/StopWatchLogger";
import { StructuredLogger } from "../../../structured-logger/src/interfaces/StructuredLogger";

export class StopWatchLoggerImpl implements StopWatchLogger {
    constructor(private structuredLogger: StructuredLogger) {}
    public startNotCalled(): void {
        this.structuredLogger.logError("Stop was called before start called");
    }
    public getElapsedTimeCalledBeforeStart(): void {
        this.structuredLogger.logError("getElapsedTime() was called before start was called");
    }
    public getElapsedTimeCalledBeforeStop(): void {
        this.structuredLogger.logError("getElapsedTime() was called before stop was called");
    }
}