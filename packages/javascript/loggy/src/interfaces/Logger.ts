import { ObservableLogger } from "./ObservableLogger";
import { LogMessage } from "./LogMessage";

export interface Logger extends ObservableLogger {
    log(logMessage: LogMessage): void;
}