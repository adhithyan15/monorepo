using System;
using Xunit;
using Loggy;

namespace Loggy.Tests
{
    public class LoggerObserverSpy : ILoggerObserver
    {
        public bool IsProcessLogMessageCalled { get; private set;}
        public string LogMessage { get; private set;}

        public LoggerObserverSpy()
        {
            IsProcessLogMessageCalled = false;
            LogMessage = "";
        }

        public void processLogMessage(TimeStampedLogMessage timeStampedLogMessage)
        {
            IsProcessLogMessageCalled = true;
            LogMessage = timeStampedLogMessage.logMessage;
        }
    } 
    
    public class UnitTest
    {
        [Fact]
        public void Calling_Log_Should_Call_Logger_Observer()
        {
            Logger logger = new Logger();
            LoggerObserverSpy observerSpy = new LoggerObserverSpy();
            Assert.False(observerSpy.IsProcessLogMessageCalled);
            logger.subscribe(observerSpy);
            string testLogMessage = "Test Log Message";
            logger.Log(testLogMessage);
            Assert.True(observerSpy.IsProcessLogMessageCalled);
            Assert.Equal(observerSpy.LogMessage, testLogMessage);
        }
    }
}
