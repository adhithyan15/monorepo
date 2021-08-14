import { StopWatchFactory } from "../../stopwatchy/src/interfaces/StopWatchFactory";
import { BrowserStopWatchFactoryImpl } from "./implementations/BrowserStopWatchFactoryImpl";
import { StructuredLogger } from "../../structured-logger/src/interfaces/StructuredLogger";

export function getStopWatchFactory(
  structuredLogger: StructuredLogger
): StopWatchFactory {
  return new BrowserStopWatchFactoryImpl(structuredLogger);
}
