require "time"

class TimeStampedLogMessage
    def initialize(log_message)
        @current_time_stamp = Time.now.utc.iso8601
        @log_message = log_message
    end
    def time_stamp
        return @current_time_stamp
    end
    def log_message
        return @log_message
    end
end