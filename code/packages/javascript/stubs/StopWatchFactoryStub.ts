import { StopWatchFactory } from "../stopwatchy/src/interfaces/StopWatchFactory";
import { StopWatch } from "../stopwatchy/src/interfaces/StopWatch";
import { StopWatchStub } from "./StopWatchStub";

export class StopWatchFactoryStub implements StopWatchFactory {
  public createStopWatch(): StopWatch {
      return new StopWatchStub();
  }
}