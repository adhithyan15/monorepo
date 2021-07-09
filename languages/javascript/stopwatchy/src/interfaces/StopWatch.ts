export interface StopWatch {
  start(): void;
  stop(): void;
  getElapsedTime(): number;
}
