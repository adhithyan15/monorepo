import { getOperationFactory } from "../src/index";
import { OperationFactory } from "../../operation/src/interfaces/OperationFactory";
import { Operation } from "../../operation/src/interfaces/Operation";
import { StructuredLoggerStub } from "../../stubs/StructuredLoggerStub";
import { StructuredLoggerSpy } from "../../spies/StructuredLoggerSpy";
import { StopWatchFactory } from "../../stopwatchy/src/interfaces/StopWatchFactory";
import { StopWatchFactoryStub } from "../../stubs/StopWatchFactoryStub";
import { OperationFactoryImpl } from "../../operation/src/implementations/OperationFactoryImpl";
import { OperationResultFactory } from "../../operation/src/interfaces/OperationResultFactory";

test("calling getOperationName should return the name of the operation", () => {
  const operationFactory: OperationFactory = getOperationFactory(
    new StructuredLoggerStub()
  );
  const operationName = "HelloWorldOperation";
  const callbackFunction = (
    operation: Operation<void>,
    operationResultFactory: OperationResultFactory
  ) => {
    console.log("Hello World!!");
    return operationResultFactory.generateOperationResult<void>({
      didOperationSucceed: true,
      returnValue: undefined,
    });
  };
  const fallbackResult: void = undefined;
  const operation: Operation<void> = operationFactory.createOperation(
    operationName,
    callbackFunction,
    fallbackResult
  );
  expect(operation.getOperationName()).toEqual(operationName);
});

test("calling getResult should return the output of the callback function", () => {
  const operationFactory: OperationFactory = getOperationFactory(
    new StructuredLoggerStub()
  );
  const operationName = "SumOperation";
  const expectedOutputValue = 4;
  const callbackFunction = (
    operation: Operation<number>,
    operationResultFactory: OperationResultFactory
  ) => {
    return operationResultFactory.generateOperationResult<number>({
      didOperationSucceed: true,
      returnValue: expectedOutputValue,
    });
  };
  const fallbackResult = 0;
  const operation: Operation<void> = operationFactory.createOperation(
    operationName,
    callbackFunction,
    fallbackResult
  );
  expect(operation.getResult()).toEqual(expectedOutputValue);
});

test("calling getResult should return undefined for a void callback function", () => {
  const operationFactory: OperationFactory = getOperationFactory(
    new StructuredLoggerStub()
  );
  const operationName = "HelloWorldOperation";
  const callbackFunction = (
    operation: Operation<void>,
    operationResultFactory: OperationResultFactory
  ) => {
    return operationResultFactory.generateOperationResult<void>({
      didOperationSucceed: true,
      returnValue: undefined,
    });
  };
  const fallbackResult: void = undefined;
  const operation: Operation<void> = operationFactory.createOperation(
    operationName,
    callbackFunction,
    fallbackResult
  );
  expect(operation.getResult()).toEqual(undefined);
});

test("calling addProperty from the operation callback should result in the property being added to propertybag", () => {
  const logger: StructuredLoggerSpy = new StructuredLoggerSpy();
  const stopWatchFactory: StopWatchFactory = new StopWatchFactoryStub();
  const operationFactory: OperationFactory = new OperationFactoryImpl(
    stopWatchFactory,
    logger
  );
  const operationName = "TestAddPropertyOperation";
  const callbackFunction = (
    operation: Operation<void>,
    operationResultFactory: OperationResultFactory
  ) => {
    operation.addProperty("TestKey", "TestValue");
    return operationResultFactory.generateOperationResult<void>({
      didOperationSucceed: true,
      returnValue: undefined,
    });
  };
  const fallbackResult: void = undefined;
  const operation: Operation<void> = operationFactory.createOperation(
    operationName,
    callbackFunction,
    fallbackResult
  );
  operation.getResult();
  expect(logger.getCapturedLogs()).toMatchSnapshot();
});

test("operation should return the fallback result if an exception was encountered and the exception should be logged out", () => {
  const logger: StructuredLoggerSpy = new StructuredLoggerSpy();
  const stopWatchFactory: StopWatchFactory = new StopWatchFactoryStub();
  const operationFactory: OperationFactory = new OperationFactoryImpl(
    stopWatchFactory,
    logger
  );
  const operationName = "TestAddPropertyOperation";
  const callbackFunction = (
    operation: Operation<number>,
    operationResultFactory: OperationResultFactory
  ) => {
    throw new Error("Throwing an exception");
  };
  const fallbackResult = 10;
  const operation: Operation<number> = operationFactory.createOperation(
    operationName,
    callbackFunction,
    fallbackResult
  );
  expect(operation.getResult()).toEqual(fallbackResult);
  expect(logger.getCapturedLogs()).toMatchSnapshot();
});
