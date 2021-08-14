namespace Loggy {
    public interface IObservableLogger
    {
        public void subscribe(ILoggerObserver loggerObserver);
    }
}