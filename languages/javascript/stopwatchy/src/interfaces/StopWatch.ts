export interface StopWatch {
  start(): void;
  stop(): void;
  getElapsedTimeInMilliSeconds(): number;
}
