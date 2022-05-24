using System;
using System.Collections;
using System.Globalization;

namespace Loggy
{
    public class Logger : ILogger
    {
        private ArrayList loggerObservers;

        public Logger()
        {
            loggerObservers = new ArrayList();
        }

        public void Log(string logMessage)
        {
            TimeStampedLogMessage timeStampedLogMessage = new TimeStampedLogMessage();
            timeStampedLogMessage.logMessage = logMessage;
            timeStampedLogMessage.timeStamp = DateTime.UtcNow.ToString("yyyyMMddHHmmssffff");
            foreach(ILoggerObserver loggerObserver in loggerObservers)
            {
                loggerObserver.processLogMessage(timeStampedLogMessage);
            }
        }

        public void subscribe(ILoggerObserver loggerObserver)
        {
            loggerObservers.Add(loggerObserver);
        }
    }
}
