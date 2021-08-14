namespace Loggy {
    public interface ILogger : IObservableLogger
    {
        public void Log(string logMessage);
    }
}