import { StructuredLogger } from "../interfaces/StructuredLogger";
import { Logger } from "../../../loggy/src/interfaces/Logger";
import { LogLevel } from "../enums/LogLevel";

export class StructuredLoggerImpl implements StructuredLogger {
  constructor(private logger: Logger) {}
  public logError(logMessage: string): void {
    this.logger.log({
      logLevel: LogLevel.error,
      logMessage: logMessage,
    });
  }
  public logWarning(logMessage: string): void {
    this.logger.log({
      logLevel: LogLevel.warn,
      logMessage: logMessage,
    });
  }
  public logInfo(logMessage: string): void {
    this.logger.log({
      logLevel: LogLevel.info,
      logMessage: logMessage,
    });
  }
  public logVerbose(logMessage: string): void {
    this.logger.log({
      logLevel: LogLevel.verbose,
      logMessage: logMessage,
    });
  }
  public logDebug(logMessage: string): void {
    this.logger.log({
      logLevel: LogLevel.debug,
      logMessage: logMessage,
    });
  }
  public logSilly(logMessage: string): void {
    this.logger.log({
      logLevel: LogLevel.silly,
      logMessage: logMessage,
    });
  }
  public logCustom(logLevel: number, logMessage: string): void {
    this.logger.log({
      logLevel: logLevel,
      logMessage: logMessage,
    });
  }
}
