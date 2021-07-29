import { LoggerFactory } from "../../loggy/src/interfaces/LoggerFactory";
import { LoggerFactoryImpl } from "../../loggy/src/implementations/LoggerFactoryImpl";
import { LoggerImpl } from "../../loggy/src/implementations/LoggerImpl";

test("LoggerFactoryImpl should return an instance of a LoggerImpl when createLogger is called", () => {
  const loggerFactory: LoggerFactory = new LoggerFactoryImpl();
  expect(loggerFactory.createLogger() instanceof LoggerImpl).toBe(true);
});
