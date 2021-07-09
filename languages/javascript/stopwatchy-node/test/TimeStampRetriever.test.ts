import { TimeStampRetriever } from "../../stopwatchy/src/interfaces/TimeStampRetriever";
import { TimeStampRetrieverImpl } from "../../stopwatchy/src/implementations/TimeStampRetrieverImpl";
import { DateAPIWrapper } from "../../stopwatchy/src/interfaces/DateAPIWrapper";
import { MockPerformanceAPIWrapper } from "./mocks/MockPerformanceAPIWrapper";
import { MockDateAPIWrapper } from "./mocks/MockDateAPIWrapper";
import { DateAPIWrapperStub } from "./stubs/DateAPIWrapperStub";
import { INVALID_TIME_STAMP } from "../../stopwatchy/src/constants";

test("If performance is not defined, then the time stamp retriever should return the timestamp from the Date API", () => {
  const mockPerformanceAPIWrapper: MockPerformanceAPIWrapper =
    new MockPerformanceAPIWrapper();
  mockPerformanceAPIWrapper.failPerformanceDefinedCheck();
  const timeValueToReturnBack = 10;
  const mockDateAPIWrapper: MockDateAPIWrapper = new MockDateAPIWrapper();
  mockDateAPIWrapper.setGetTimeValueToReturnBack(timeValueToReturnBack);
  const timeStampRetriever: TimeStampRetriever = new TimeStampRetrieverImpl(
    mockPerformanceAPIWrapper,
    mockDateAPIWrapper
  );
  expect(timeStampRetriever.getCurrentTimeStamp()).toEqual(
    timeValueToReturnBack
  );
});

test("If performance.now is not defined, then the time stamp retriever should return the timestamp from the Date API", () => {
  const mockPerformanceAPIWrapper: MockPerformanceAPIWrapper =
    new MockPerformanceAPIWrapper();
  mockPerformanceAPIWrapper.failPerformanceNowDefinedCheck();
  const timeValueToReturnBack = 10;
  const mockDateAPIWrapper: MockDateAPIWrapper = new MockDateAPIWrapper();
  mockDateAPIWrapper.setGetTimeValueToReturnBack(timeValueToReturnBack);
  const timeStampRetriever: TimeStampRetriever = new TimeStampRetrieverImpl(
    mockPerformanceAPIWrapper,
    mockDateAPIWrapper
  );
  expect(timeStampRetriever.getCurrentTimeStamp()).toEqual(
    timeValueToReturnBack
  );
});

test("If both performance and performance.now is defined, then the timestamp should be returned from the performance API", () => {
  const performanceNowValueToReturnBack = 10;
  const mockPerformanceAPIWrapper: MockPerformanceAPIWrapper =
    new MockPerformanceAPIWrapper();
  mockPerformanceAPIWrapper.setPerformanceNowValueToReturnBack(
    performanceNowValueToReturnBack
  );
  const dateAPIWrapper: DateAPIWrapper = new DateAPIWrapperStub();
  const timeStampRetriever: TimeStampRetriever = new TimeStampRetrieverImpl(
    mockPerformanceAPIWrapper,
    dateAPIWrapper
  );
  expect(timeStampRetriever.getCurrentTimeStamp()).toEqual(
    performanceNowValueToReturnBack
  );
});

test("If both performance API and date API are not supported, then it should return an invalid timestamp", () => {
  const mockPerformanceAPIWrapper: MockPerformanceAPIWrapper =
    new MockPerformanceAPIWrapper();
  mockPerformanceAPIWrapper.failPerformanceDefinedCheck();
  const mockDateAPIWrapper: MockDateAPIWrapper = new MockDateAPIWrapper();
  mockDateAPIWrapper.failDateAPISupportedCheck();
  const timeStampRetriever: TimeStampRetriever = new TimeStampRetrieverImpl(
    mockPerformanceAPIWrapper,
    mockDateAPIWrapper
  );
  expect(timeStampRetriever.getCurrentTimeStamp()).toEqual(INVALID_TIME_STAMP);
});
