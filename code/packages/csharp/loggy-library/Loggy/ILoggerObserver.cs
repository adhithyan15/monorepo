namespace Loggy {
    public interface ILoggerObserver
    {
        public void processLogMessage(TimeStampedLogMessage timeStampedLogMessage);
    }
}