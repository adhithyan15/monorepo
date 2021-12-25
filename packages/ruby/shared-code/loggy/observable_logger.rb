class ObservableLogger
    def initialize()
        @logger_observers = []
    end
    def subscribe(logger_observer)
        @logger_observers.append(logger_observer)
    end
end