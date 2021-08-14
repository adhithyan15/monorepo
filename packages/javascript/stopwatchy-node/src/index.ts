import { StopWatchFactory } from "../../stopwatchy/src/interfaces/StopWatchFactory";
import { NodeStopWatchFactoryImpl } from "./implementations/NodeStopWatchFactoryImpl";
import { StructuredLogger } from "../../structured-logger/src/interfaces/StructuredLogger";

export function getStopWatchFactory(
  logger: StructuredLogger
): StopWatchFactory {
  return new NodeStopWatchFactoryImpl(logger);
}
