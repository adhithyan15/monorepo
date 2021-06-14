import { StopWatchLogger } from "../../../stopwatchy/src/interfaces/StopWatchLogger";

export class StopWatchLoggerStub implements StopWatchLogger {
  public startNotCalled(): void {
    return undefined;
  }
  public getElapsedTimeCalledBeforeStart(): void {
    return undefined;
  }
  public getElapsedTimeCalledBeforeStop(): void {
    return undefined;
  }
}
