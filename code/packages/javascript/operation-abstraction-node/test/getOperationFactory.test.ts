import { getOperationFactory } from "../src/index";
import { OperationFactoryImpl } from "../../operation/src/implementations/OperationFactoryImpl";
import { StructuredLoggerStub } from "../../stubs/StructuredLoggerStub";

test("getOperationFactory should return an instance of OperationFactory", () => {
  expect(
    getOperationFactory(new StructuredLoggerStub()) instanceof
      OperationFactoryImpl
  ).toBe(true);
});
