import { LoggerFactory } from "./interfaces/LoggerFactory";
import { LoggerFactoryImpl } from "./implementations/LoggerFactoryImpl";

export function getLoggerFactory(): LoggerFactory {
    return new LoggerFactoryImpl();
}