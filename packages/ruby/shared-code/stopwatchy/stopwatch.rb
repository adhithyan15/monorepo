require_relative "stopwatchneverstartederror"
require_relative "stopwatchneverstoppederror"

class StopWatch
    def initialize(monotonically_increasing_clock = true)
        @start_time_stamp = nil
        @stop_time_stamp = nil
        @monotonically_increasing_clock = monotonically_increasing_clock
    end

    def start()
        if @monotonically_increasing_clock
            @start_time_stamp = Process.clock_gettime(Process::CLOCK_MONOTONIC)
        else
            @start_time_stamp = Time.now
        end
    end

    def stop()
        if @start_time_stamp.nil?
            raise StopWatchNeverStartedError.new
        end

        if @monotonically_increasing_clock
            @stop_time_stamp = Process.clock_gettime(Process::CLOCK_MONOTONIC)
        else
            @stop_time_stamp = Time.now
        end
    end

    def get_elapsed_time()
        if @start_time_stamp.nil?
            raise StopWatchNeverStartedError.new
        end

        if @stop_time_stamp.nil?
            raise StopWatchNeverStoppedError.new
        end

        elapsed_time = @stop_time_stamp - @start_time_stamp
        @stop_time_stamp = nil
        @start_time_stamp = nil
        return elapsed_time
    end
end