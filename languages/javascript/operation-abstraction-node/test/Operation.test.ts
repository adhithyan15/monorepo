import { getOperationFactory } from "../src/index";
import { OperationFactory } from "../../operation/src/interfaces/OperationFactory";
import { Operation } from "../../operation/src/interfaces/Operation";
import { StructuredLoggerStub } from "../../stubs/StructuredLoggerStub";
import { StructuredLoggerSpy } from "../../spies/StructuredLoggerSpy";

test("calling getOperationName should return the name of the operation", () => {
  const operationFactory: OperationFactory = getOperationFactory(
    new StructuredLoggerStub()
  );
  const operationName = "HelloWorldOperation";
  const callbackFunction: () => void = () => console.log("Hello world!!");
  const operation: Operation<void> = operationFactory.createOperation(
    operationName,
    callbackFunction
  );
  expect(operation.getOperationName()).toEqual(operationName);
});

test("calling getResult should return the output of the callback function", () => {
  const operationFactory: OperationFactory = getOperationFactory(
    new StructuredLoggerStub()
  );
  const operationName = "SumOperation";
  const callbackFunction: () => number = () => 2 + 2;
  const operation: Operation<void> = operationFactory.createOperation(
    operationName,
    callbackFunction
  );
  expect(operation.getResult()).toEqual(callbackFunction());
});

test("calling getResult should return undefined for a void callback function", () => {
  const operationFactory: OperationFactory = getOperationFactory(
    new StructuredLoggerStub()
  );
  const operationName = "HelloWorldOperation";
  const callbackFunction: () => void = () => console.log("Hello World");
  const operation: Operation<void> = operationFactory.createOperation(
    operationName,
    callbackFunction
  );
  expect(operation.getResult()).toEqual(undefined);
});

test("calling addProperty from the operation callback should result in the property being added to propertybag", () => {
  const logger: StructuredLoggerSpy = new StructuredLoggerSpy();
  const operationFactory: OperationFactory = getOperationFactory(logger);
  const operationName = "TestAddPropertyOperation";
  const callbackFunction: (operation: Operation<void>) => void = (
    operation: Operation<void>
  ) => {
    operation.addProperty("TestKey", "TestValue");
  };
  const operation: Operation<void> = operationFactory.createOperation(
    operationName,
    callbackFunction
  );
  operation.getResult();
  expect(logger.getCapturedLogs()).toMatchSnapshot();
});
