import { StructuredLoggerFactory } from "../../structured-logger/src/interfaces/StructuredLoggerFactory";
import { StructuredLoggerFactoryImpl } from "../../structured-logger/src/implementations/StructuredLoggerFactoryImpl";
import { getLoggerFactory } from "../../loggy-browser/src/index";

export function getStructuredLoggerFactory(): StructuredLoggerFactory {
  return new StructuredLoggerFactoryImpl(getLoggerFactory());
}
