import { LoggerFactory } from "../../loggy/src/interfaces/LoggerFactory";
import { LoggerFactoryImpl } from "../../loggy/src/implementations/LoggerFactoryImpl";

export function getLoggerFactory(): LoggerFactory {
  return new LoggerFactoryImpl();
}
