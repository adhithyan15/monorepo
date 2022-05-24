import { StructuredLoggerFactory } from "./interfaces/StructuredLoggerFactory";
import { StructuredLoggerFactoryImpl } from "./implementations/StructuredLoggerFactoryImpl";
import { getLoggerFactory } from "../../loggy-browser/src/index";

export function getStructuredLoggerFactory(): StructuredLoggerFactory {
  return new StructuredLoggerFactoryImpl(getLoggerFactory());
}
