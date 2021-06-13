import { StopWatch } from "../interfaces/StopWatch";
import { TimeStampRetriever } from "../interfaces/TimeStampRetriever";
import { INVALID_STOP_WATCH_ELAPSED_TIME } from "../constants";

export class StopWatchImpl implements StopWatch {
  private startCalled: boolean;
  private startTimeStamp: number | undefined;
  private stopTimeStamp: number | undefined;
  constructor(private timeStampRetriever: TimeStampRetriever) {
    this.startCalled = false;
    this.startTimeStamp = undefined;
    this.stopTimeStamp = undefined;
  }
  public start(): void {
    this.startTimeStamp = this.timeStampRetriever.getCurrentTimeStamp();
    this.startCalled = true;
  }
  public stop(): void {
    if (!this.startCalled) {
      return;
    }
    this.stopTimeStamp = this.timeStampRetriever.getCurrentTimeStamp();
  }
  public getElapsedTimeInMilliSeconds(): number {
    if (this.startTimeStamp === undefined || this.stopTimeStamp === undefined) {
      return INVALID_STOP_WATCH_ELAPSED_TIME;
    }
    const elapsedTime: number = this.stopTimeStamp - this.startTimeStamp;
    this.startTimeStamp = undefined;
    this.stopTimeStamp = undefined;
    this.startCalled = false;
    return elapsedTime;
  }
}
