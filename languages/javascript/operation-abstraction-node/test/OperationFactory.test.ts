import { getOperationFactory } from "../src/index";
import { OperationFactory } from "../../operation/src/interfaces/OperationFactory";
import { OperationImpl } from "../../operation/src/implementations/OperationImpl";
import { StructuredLoggerStub } from "../../stubs/StructuredLoggerStub";

test("createOperation should return an instance of an operation", () => {
  const operationFactory: OperationFactory = getOperationFactory(
    new StructuredLoggerStub()
  );
  const operationName = "TestOperation";
  const callbackFunction: () => void = () => console.log("Hello world!!");
  const fallbackResult: void = undefined;
  expect(
    operationFactory.createOperation(
      operationName,
      callbackFunction,
      fallbackResult
    ) instanceof OperationImpl
  ).toBe(true);
});
