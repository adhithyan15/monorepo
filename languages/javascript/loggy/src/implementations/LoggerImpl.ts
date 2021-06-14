import { Logger } from "../interfaces/Logger";
import { LoggerObserver } from "../interfaces/LoggerObserver";
import { LogMessage } from "../interfaces/LogMessage";
import { TimeStampedLogMessage } from "../interfaces/TimeStampedLogMessage";

export class LoggerImpl implements Logger {
    private loggerObservers: LoggerObserver[];
    constructor() {
        this.loggerObservers = [];
    }
    public log(logMessage: LogMessage): void {
        const timestampedLogMessage: TimeStampedLogMessage = {
                logLevel: logMessage.logLevel,
                logMessage: logMessage.logMessage,
                timestamp: new Date()
            };
        this.loggerObservers.forEach((loggerObserver: LoggerObserver) => {
            loggerObserver.processLogMessage(timestampedLogMessage);
        })
    }
    public subscribe(loggerObserver: LoggerObserver): void {
        this.loggerObservers.push(loggerObserver);
    }
}