import { StopWatch } from "../../stopwatchy/src/interfaces/StopWatch";
import { TimeStampRetriever } from "../../stopwatchy/src/interfaces/TimeStampRetriever";
import { StopWatchImpl } from "../../stopwatchy/src/implementations/StopWatchImpl";
import { TimeStampRetrieverStub } from "./stubs/TimeStampRetrieverStub";
import { INVALID_STOP_WATCH_ELAPSED_TIME } from "../../stopwatchy/src/constants";

test("should return invalid elapsed time if start was never called", () => {
  const timeStampRetrieverStub: TimeStampRetriever =
    new TimeStampRetrieverStub();
  const stopWatch: StopWatch = new StopWatchImpl(timeStampRetrieverStub);
  stopWatch.stop();
  expect(stopWatch.getElapsedTimeInMilliSeconds()).toBe(
    INVALID_STOP_WATCH_ELAPSED_TIME
  );
});

test("should return invalid elapsed time if stop was never called", () => {
  const timeStampRetrieverStub: TimeStampRetriever =
    new TimeStampRetrieverStub();
  const stopWatch: StopWatch = new StopWatchImpl(timeStampRetrieverStub);
  stopWatch.start();
  expect(stopWatch.getElapsedTimeInMilliSeconds()).toBe(
    INVALID_STOP_WATCH_ELAPSED_TIME
  );
});

test("should return a valid elapsed time if both start and stop were called", () => {
  const timeStampRetrieverStub: TimeStampRetriever =
    new TimeStampRetrieverStub();
  const stopWatch: StopWatch = new StopWatchImpl(timeStampRetrieverStub);
  stopWatch.start();
  stopWatch.stop();
  expect(stopWatch.getElapsedTimeInMilliSeconds()).not.toBe(
    INVALID_STOP_WATCH_ELAPSED_TIME
  );
});
