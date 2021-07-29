import { LoggerObserver } from "../loggy/src/interfaces/LoggerObserver";
import { TimeStampedLogMessage } from "../loggy/src/interfaces/TimeStampedLogMessage";

export class LoggerObserverSpy implements LoggerObserver {
    private processLogMessageCalled: boolean;
    private receivedLogMessage: TimeStampedLogMessage | undefined;
    constructor() {
        this.processLogMessageCalled = false;
        this.receivedLogMessage = undefined;
    }
    public processLogMessage(timeStampedLogMessage: TimeStampedLogMessage): void {
        this.processLogMessageCalled = true;
        this.receivedLogMessage = timeStampedLogMessage;
    }
    public wasProcessLogMessageCalled(): boolean {
        return this.processLogMessageCalled;
    }
    public getReceivedLogMessage(): TimeStampedLogMessage | undefined {
        return this.receivedLogMessage;
    }
}