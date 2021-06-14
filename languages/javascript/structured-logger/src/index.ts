import { StructuredLoggerFactory } from "./interfaces/StructuredLoggerFactory";
import { StructuredLoggerFactoryImpl } from "./implementations/StructuredLoggerFactoryImpl";
import { getLoggerFactory } from "../../loggy/src/index";

export function getStructuredLoggerFactory(): StructuredLoggerFactory {
  return new StructuredLoggerFactoryImpl(getLoggerFactory());
}
