import { LogMessage } from "./LogMessage"

export interface TimeStampedLogMessage extends LogMessage {
    timestamp: Date;
}