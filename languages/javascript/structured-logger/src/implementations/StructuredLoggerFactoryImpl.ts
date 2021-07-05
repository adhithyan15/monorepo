import { StructuredLoggerFactory } from "../interfaces/StructuredLoggerFactory";
import { StructuredLogger } from "../interfaces/StructuredLogger";
import { StructuredLoggerImpl } from "./StructuredLoggerImpl";
import { Logger } from "../../../loggy/src/interfaces/Logger";
import { LoggerFactory } from "../../../loggy/src/interfaces/LoggerFactory";
import { LoggerObserver } from "../../../loggy/src/interfaces/LoggerObserver";

export class StructuredLoggerFactoryImpl implements StructuredLoggerFactory {
  constructor(private loggerFactory: LoggerFactory) {}
  public createLogger(observers?: LoggerObserver[]): StructuredLogger {
    const logger: Logger = this.loggerFactory.createLogger();
    if (observers != null) {
      observers.forEach((observer: LoggerObserver) => {
        logger.subscribe(observer);
      })
    }
    return new StructuredLoggerImpl(logger);
  }
}
