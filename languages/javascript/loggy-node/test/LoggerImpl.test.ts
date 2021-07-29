import { Logger } from "../../loggy/src/interfaces/Logger";
import { LogMessage } from "../../loggy/src/interfaces/LogMessage";
import { LoggerImpl } from "../../loggy/src/implementations/LoggerImpl";
import { LoggerObserverSpy } from "../../spies/LoggerObserverSpy";

test("logger should send the log message out to the logger observer when log is called", () => {
  const logger: Logger = new LoggerImpl();
  const loggerObserverSpy: LoggerObserverSpy = new LoggerObserverSpy();
  logger.subscribe(loggerObserverSpy);
  const logMessage: LogMessage = {
    logLevel: 2,
    logMessage: "Test Log",
  };
  expect(loggerObserverSpy.wasProcessLogMessageCalled()).toBe(false);
  logger.log(logMessage);
  expect(loggerObserverSpy.wasProcessLogMessageCalled()).toBe(true);
  const receivedLogMessage: LogMessage | undefined =
    loggerObserverSpy.getReceivedLogMessage();
  if (receivedLogMessage === undefined) {
    // The received log message should not be undefined
    expect(false).toBe(true);
  } else {
    expect(receivedLogMessage.logLevel).toEqual(logMessage.logLevel);
    expect(receivedLogMessage.logMessage).toEqual(logMessage.logMessage);
  }
});
