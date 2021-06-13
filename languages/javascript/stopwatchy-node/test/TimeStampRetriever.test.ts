import { TimeStampRetriever } from "../../stopwatchy/src/interfaces/TimeStampRetriever";
import { TimeStampRetrieverImpl } from "../../stopwatchy/src/implementations/TimeStampRetrieverImpl";
import { PerformanceAPIWrapper } from "../../stopwatchy/src/interfaces/PerformanceAPIWrapper";
import { MockPerformanceAPIWrapper } from "./mocks/MockPerformanceAPIWrapper";
import { PerformanceAPIWrapperStub } from "./stubs/PerformanceAPIWrapperStub";
import { INVALID_TIME_STAMP } from "../../stopwatchy/src/constants";

test("If performance is not defined, then the time stamp retriever should return invalid timestamp", () => {
  const mockPerformanceAPIWrapper: MockPerformanceAPIWrapper =
    new MockPerformanceAPIWrapper();
  mockPerformanceAPIWrapper.failPerformanceDefinedCheck();
  const timeStampRetriever: TimeStampRetriever = new TimeStampRetrieverImpl(
    mockPerformanceAPIWrapper
  );
  expect(timeStampRetriever.getCurrentTimeStamp()).toEqual(INVALID_TIME_STAMP);
});

test("If performance.now is not defined, then the time stamp retriever should return invalid timestamp", () => {
  const mockPerformanceAPIWrapper: MockPerformanceAPIWrapper =
    new MockPerformanceAPIWrapper();
  mockPerformanceAPIWrapper.failPerformanceNowDefinedCheck();
  const timeStampRetriever: TimeStampRetriever = new TimeStampRetrieverImpl(
    mockPerformanceAPIWrapper
  );
  expect(timeStampRetriever.getCurrentTimeStamp()).toEqual(INVALID_TIME_STAMP);
});

test("If both performance and performance.now is defined, then ", () => {
  const performanceAPIWrapper: PerformanceAPIWrapper =
    new PerformanceAPIWrapperStub();
  const timeStampRetriever: TimeStampRetriever = new TimeStampRetrieverImpl(
    performanceAPIWrapper
  );
  expect(timeStampRetriever.getCurrentTimeStamp()).not.toEqual(
    INVALID_TIME_STAMP
  );
});
