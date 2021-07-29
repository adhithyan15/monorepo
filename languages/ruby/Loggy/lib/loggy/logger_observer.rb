module Loggy
    class LoggerObserver
        def process_log_message(time_stamped_log_message)
            puts time_stamped_log_message
        end
    end
end