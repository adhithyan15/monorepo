import { StopWatch } from "./StopWatch";

export interface StopWatchFactory {
  createStopWatch(): StopWatch;
}
