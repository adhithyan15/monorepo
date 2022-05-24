import { RandomNumberGenerator } from "./RandomNumberGenerator";

export interface RandomNumberGeneratorFactory {
    getRandomNumberGenerator(): RandomNumberGenerator;
}