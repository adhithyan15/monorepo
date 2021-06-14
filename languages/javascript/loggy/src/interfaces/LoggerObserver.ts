import { TimeStampedLogMessage } from "./TimeStampedLogMessage";

export interface LoggerObserver {
    processLogMessage(timeStampedLogMessage: TimeStampedLogMessage): void;
}