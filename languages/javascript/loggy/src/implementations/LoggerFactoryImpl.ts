import { LoggerFactory } from "../interfaces/LoggerFactory";
import { Logger } from "../interfaces/Logger";
import { LoggerImpl } from "./LoggerImpl";

export class LoggerFactoryImpl implements LoggerFactory {
    public createLogger(): Logger {
        return new LoggerImpl();
    }
}