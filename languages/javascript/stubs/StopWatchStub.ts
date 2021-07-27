import { StopWatch } from "../stopwatchy/src/interfaces/StopWatch";

export class StopWatchStub implements StopWatch {
  public start(): void {}
  public stop(): void {}
  public getElapsedTime(): number { return 10; }
}