import { getLoggerFactory } from "../src/index";
import { LoggerFactoryImpl } from "../../loggy/src/implementations/LoggerFactoryImpl";

test("getLoggerFactory should return an instance of LoggerFactory when called", () => {
  expect(getLoggerFactory() instanceof LoggerFactoryImpl).toBe(true);
});
