import { getStopWatchFactory } from "../src/index";
import { NodeStopWatchFactoryImpl } from "../src/implementations/NodeStopWatchFactoryImpl";
import { StructuredLoggerStub } from "../../stubs/StructuredLoggerStub";

test("should produce an instance of StopWatchFactoryImpl", () => {
  const structuredLoggerStub: StructuredLoggerStub = new StructuredLoggerStub();
  expect(
    getStopWatchFactory(structuredLoggerStub) instanceof
      NodeStopWatchFactoryImpl
  ).toBe(true);
});
