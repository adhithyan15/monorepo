import { StopWatch } from "../../stopwatchy/src/interfaces/StopWatch";
import { TimeStampRetriever } from "../../stopwatchy/src/interfaces/TimeStampRetriever";
import { StopWatchImpl } from "../../stopwatchy/src/implementations/StopWatchImpl";
import { TimeStampRetrieverStub } from "./stubs/TimeStampRetrieverStub";
import { INVALID_STOP_WATCH_ELAPSED_TIME } from "../../stopwatchy/src/constants";
import { StopWatchLogger } from "../../stopwatchy/src/interfaces/StopWatchLogger";
import { StopWatchLoggerStub } from "./stubs/StopWatchLoggerStub";

test("should return invalid elapsed time if start was never called", () => {
  const timeStampRetrieverStub: TimeStampRetriever =
    new TimeStampRetrieverStub();
  const stopWatchLogger: StopWatchLogger = new StopWatchLoggerStub();
  const stopWatch: StopWatch = new StopWatchImpl(
    timeStampRetrieverStub,
    stopWatchLogger
  );
  stopWatch.stop();
  expect(stopWatch.getElapsedTime()).toBe(INVALID_STOP_WATCH_ELAPSED_TIME);
});

test("should return invalid elapsed time if stop was never called", () => {
  const timeStampRetrieverStub: TimeStampRetriever =
    new TimeStampRetrieverStub();
  const stopWatchLogger: StopWatchLogger = new StopWatchLoggerStub();
  const stopWatch: StopWatch = new StopWatchImpl(
    timeStampRetrieverStub,
    stopWatchLogger
  );
  stopWatch.start();
  expect(stopWatch.getElapsedTime()).toBe(INVALID_STOP_WATCH_ELAPSED_TIME);
});

test("should return a valid elapsed time if both start and stop were called", () => {
  const timeStampRetrieverStub: TimeStampRetriever =
    new TimeStampRetrieverStub();
  const stopWatchLogger: StopWatchLogger = new StopWatchLoggerStub();
  const stopWatch: StopWatch = new StopWatchImpl(
    timeStampRetrieverStub,
    stopWatchLogger
  );
  stopWatch.start();
  stopWatch.stop();
  expect(stopWatch.getElapsedTime()).not.toBe(INVALID_STOP_WATCH_ELAPSED_TIME);
});
