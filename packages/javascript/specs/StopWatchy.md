# StopWatchy Spec

This document specifies the `StopWatchy` library. The spec is designed to be detail rich to help with the implementation. Please feel free to skim through. 

## Definitions

1. Invalid Elapsed Time - Invalid elapsed time will be equal to -1. If this value is encountered, you can assume that the stopwatch library encountered an error and the value cannot be used.
2. Monotonically Increasing Clock - A clock that is not related to the wall clock and is not affected by things like NTP and changes to system time. It is a linearly increasing clock that can never go back. 

## Purpose of the library

The main purpose of the library is to expose an interface through which users can measure how long something took to complete. The resolution of the time returned should at least be in milliseconds. This library is designed to be incorporated into your code through the use of a module bundler like `webpack` and is designed to support a wide range of browsers and non-browser JavaScript environments like Node.js. The library expects the presence of at least one of the following APIs in the JavaScript environment

1. Performance API
2. Date API

If neither one is present, it will return an invalid time measurement.

## Inteface of the library

### StopWatch Interface

`StopWatch`interface that has three functions - `start`, `stop` and `getElapsedTime`.

1. `start` starts the StopWatch and starts recording the time.
2. `stop` stops an already started StopWatch.
3. `getElapsedTime` returns the amount of time recorded by the stopped StopWatch. If the stopwatch was never started before calling this function, it will return an invalid elapsed time. If the stopwatch was never stopped before calling this function, it will return an invalid elapsed time.

### StopWatchFactory Interface

`StopWatchFactory` interface is responsible for creating one or more instances of objects that have the `StopWatch` interface. The `StopWatchFactory` interface has only method `createStopWatch`. When called, it returns an instance of an object with the `StopWatch` interface.

### Retrieving StopWatchFactory Interface

You can retrieve an instance of the `StopWatchFactory` interface by calling the `getStopWatchFactory` function. The `getStopWatchFactory` requires a logger instance and you can look into the logger output to see if the library encountered any errors. 

## Example Usage

Assume you have the following code to time

```ts
function doSomething() {
    // Some task that takes a long time
}
```

To find out how long this function took to excute, you would something as follows

```ts
import { getStopWatchFactory, StopWatchFactory, StopWatch } from "stopwatchy";

const stopWatchFactory: StopWatchFactory = getStopWatchFactory(logger);
const stopWatch: StopWatch = stopWatchFactory.createStopWatch();
stopWatch.start();
doSomething();
stopWatch.stop();
const elapsedTime: number = stopWatch.getElapsedTime();
console.log(elapsedTime);
```