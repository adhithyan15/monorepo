import { OperationResultFactory } from "../../operation/src/interfaces/OperationResultFactory";
import { OperationResultFactoryImpl } from "../../operation/src/implementations/OperationResultFactoryImpl";

const factory: OperationResultFactory = new OperationResultFactoryImpl();

test("should return an instance of OperationResult of certain type", () => {
  expect(
    factory.generateOperationResult<number>({
      didOperationSucceed: true,
      returnValue: 5,
    })
  ).toMatchSnapshot();
});

test("should return an instance of OperationResult with didOperationFailUnexpectedly if that field was set", () => {
  expect(
    factory.generateOperationResult<number>({
      didOperationSucceed: true,
      didOperationFailUnexpectedly: true,
      returnValue: 5,
    })
  ).toMatchSnapshot();
});
