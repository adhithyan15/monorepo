export interface StopWatchLogger {
    startNotCalled(): void;
    getElapsedTimeCalledBeforeStart(): void;
    getElapsedTimeCalledBeforeStop(): void;
}