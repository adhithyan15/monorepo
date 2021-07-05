import { StructuredLogger } from "../interfaces/StructuredLogger";

export class StructuredLoggerStub implements StructuredLogger {
public logError(_logMessage: string): void {}
  public logWarning(logMessage: string): void {}
  public logInfo(logMessage: string): void {}
  public logVerbose(logMessage: string): void {}
  public logDebug(logMessage: string): void {}
  public logSilly(logMessage: string): void {}
  public logCustom(logLevel: number, logMessage: string): void {}
}