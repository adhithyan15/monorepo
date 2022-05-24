import { LoggerObserver } from "./LoggerObserver";

export interface ObservableLogger {
    subscribe(observer: LoggerObserver): void;
}