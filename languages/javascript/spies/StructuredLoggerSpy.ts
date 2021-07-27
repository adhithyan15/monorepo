import { StructuredLogger } from "../structured-logger/src/interfaces/StructuredLogger";

export interface CustomLog {
    logLevel: number,
    logMessage: string
}

export interface StructuredLogs {
    errorLogs: string[],
    warningLogs: string[],
    infoLogs: string[],
    verboseLogs: string[],
    debugLogs: string[],
    sillyLogs: string[],
    customLogs: CustomLog[]
}

export class StructuredLoggerSpy implements StructuredLogger {
  private capturedLogs: StructuredLogs;
  constructor() {
      this.capturedLogs = {
          errorLogs: [],
          warningLogs: [],
          infoLogs: [],
          verboseLogs: [],
          debugLogs: [],
          sillyLogs: [],
          customLogs: []
      };
  }
  public logError(logMessage: string): void {
    this.capturedLogs.errorLogs.push(logMessage);
  }
  public logWarning(logMessage: string): void {
      this.capturedLogs.warningLogs.push(logMessage);
  }
  public logInfo(logMessage: string): void {
      this.capturedLogs.infoLogs.push(logMessage);
  }
  public logVerbose(logMessage: string): void {
      this.capturedLogs.verboseLogs.push(logMessage);
  }
  public logDebug(logMessage: string): void {
      this.capturedLogs.debugLogs.push(logMessage);
  }
  public logSilly(logMessage: string): void {
      this.capturedLogs.sillyLogs.push(logMessage);
  }
  public logCustom(logLevel: number, logMessage: string): void {
      this.capturedLogs.customLogs.push({
          logLevel,
          logMessage
      })
  }
  public getCapturedLogs(): StructuredLogs {
      return this.capturedLogs;
  }
}