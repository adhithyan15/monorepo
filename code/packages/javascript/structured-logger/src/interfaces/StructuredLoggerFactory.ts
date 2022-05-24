import { StructuredLogger } from "./StructuredLogger";
import { LoggerObserver } from "../../../loggy/src/interfaces/LoggerObserver";

export interface StructuredLoggerFactory {
  createLogger(observers?: LoggerObserver[]): StructuredLogger;
}
