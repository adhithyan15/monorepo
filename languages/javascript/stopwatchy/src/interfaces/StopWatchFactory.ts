import { StopWatch } from "./StopWatch";
import { StructuredLogger } from "../../../structured-logger/src/interfaces/StructuredLogger";

export interface StopWatchFactory {
  createStopWatch(): StopWatch;
}
