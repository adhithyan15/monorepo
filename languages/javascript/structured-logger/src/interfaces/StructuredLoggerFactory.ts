import { StructuredLogger } from "./StructuredLogger";

export interface StructuredLoggerFactory {
  createLogger(): StructuredLogger;
}
