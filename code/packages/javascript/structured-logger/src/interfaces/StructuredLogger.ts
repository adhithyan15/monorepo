export interface StructuredLogger {
  logError(logMessage: string): void;
  logWarning(logMessage: string): void;
  logInfo(logMessage: string): void;
  logVerbose(logMessage: string): void;
  logDebug(logMessage: string): void;
  logSilly(logMessage: string): void;
  logCustom(logLevel: number, logMessage: string): void;
}
