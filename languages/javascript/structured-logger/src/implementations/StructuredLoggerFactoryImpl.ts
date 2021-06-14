import { StructuredLoggerFactory } from "../interfaces/StructuredLoggerFactory";
import { StructuredLogger } from "../interfaces/StructuredLogger";
import { StructuredLoggerImpl } from "./StructuredLoggerImpl";
import { LoggerFactory } from "../../../loggy/src/interfaces/LoggerFactory";

export class StructuredLoggerFactoryImpl implements StructuredLoggerFactory {
  constructor(private loggerFactory: LoggerFactory) {}
  public createLogger(): StructuredLogger {
    return new StructuredLoggerImpl(this.loggerFactory.createLogger());
  }
}
