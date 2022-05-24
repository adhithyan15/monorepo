require_relative "../lib/loggy"
require "test/unit"

class LoggerSpy < Loggy::LoggerObserver
    def initialize
        @process_log_message_called = false
        @received_log_message = nil
    end
    def process_log_message(time_stamped_log_message)
        @process_log_message_called = true
        @received_log_message = time_stamped_log_message
    end
    def was_process_log_message_called
        return @process_log_message_called
    end
    def received_log_message
        return @received_log_message
    end
end

class LoggerTest < Test::Unit::TestCase
    def test_should_call_logger_observer_every_time_log_string_called()
        logger = Loggy::Logger.new
        logger_spy = LoggerSpy.new
        logger.subscribe(logger_spy)
        log_message = "Hello World!!"
        logger.log(log_message)
        assert(logger_spy.was_process_log_message_called, "The logger observer should have been called")
        assert(logger_spy.received_log_message.log_message == log_message, "The log message received by the observer should match the message sent in")
     end
end