# typed: ignore
require_relative "../lib/Stopwatchy"
require "test/unit"

class StopWatchTest < Test::Unit::TestCase
    def test_stop_watch_never_started()
        assert_raise Stopwatchy::StopWatchNeverStartedError do
            stopwatch = Stopwatchy::StopWatch.new
            stopwatch.stop()
        end
    end

    def test_get_elapsed_time_without_starting_stopwatch()
        assert_raise Stopwatchy::StopWatchNeverStartedError do
            stopwatch = Stopwatchy::StopWatch.new
            stopwatch.get_elapsed_time()
        end
    end

    def test_stop_watch_never_stopped()
        assert_raise Stopwatchy::StopWatchNeverStoppedError do
            stopwatch = Stopwatchy::StopWatch.new
            stopwatch.start()
            stopwatch.get_elapsed_time()
        end
    end

    def test_get_elapsed_time()
        stopwatch = Stopwatchy::StopWatch.new
        stopwatch.start()
        sleep(1)
        stopwatch.stop()
        assert(stopwatch.get_elapsed_time() > 0, "Elapsed time must be greater than zero")
    end

    def test_get_elapsed_time_non_monotonically_increasing()
        stopwatch = Stopwatchy::StopWatch.new(false)
        stopwatch.start()
        sleep(1)
        stopwatch.stop()
        assert(stopwatch.get_elapsed_time() > 0, "Elapsed time must be greater than zero")
    end
end