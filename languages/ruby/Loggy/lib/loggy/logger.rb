require_relative "observable_logger"
require_relative "time_stamped_log_message"
require 'time'

module Loggy
    class Logger < ObservableLogger
        def log(log_message)
            time_stamped_log_message = TimeStampedLogMessage.new(log_message)
            @logger_observers.each do |logger_observer|
                logger_observer.process_log_message(time_stamped_log_message)
            end
        end
    end
end