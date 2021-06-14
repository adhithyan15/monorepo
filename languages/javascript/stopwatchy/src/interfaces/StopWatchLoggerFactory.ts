import { StopWatchLogger } from "./StopWatchLogger";

export interface StopWatchLoggerFactory {
    createLogger(): StopWatchLogger;
}