import { getOperationFactory } from "../src/index";
import { OperationFactory } from "../../operation/src/interfaces/OperationFactory";
import { OperationImpl } from "../../operation/src/implementations/OperationImpl";
import { StructuredLoggerStub } from "../../stubs/StructuredLoggerStub";
import { Operation } from "../../operation/src/interfaces/Operation";
import { OperationResultFactory } from "../../operation/src/interfaces/OperationResultFactory";

test("createOperation should return an instance of an operation", () => {
  const operationFactory: OperationFactory = getOperationFactory(
    new StructuredLoggerStub()
  );
  const operationName = "TestOperation";
  const callbackFunction = (
    operation: Operation<void>,
    operationResultFactory: OperationResultFactory
  ) => {
    console.log("Hello world!!");
    return operationResultFactory.generateOperationResult<void>({
      didOperationSucceed: true,
      returnValue: undefined,
    });
  };
  const fallbackResult: void = undefined;
  expect(
    operationFactory.createOperation(
      operationName,
      callbackFunction,
      fallbackResult
    ) instanceof OperationImpl
  ).toBe(true);
});
