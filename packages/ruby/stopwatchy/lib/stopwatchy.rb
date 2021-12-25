# frozen_string_literal: true

require_relative "stopwatchy/version"
require_relative "../../shared-code/stopwatchy/stopwatch"
require_relative "../../shared-code/stopwatchy/stopwatchneverstartederror"
require_relative "../../shared-code/stopwatchy/stopwatchneverstoppederror"

module Stopwatchy
  def self.const_missing(missing_constant)
    case missing_constant
    when :StopWatch
      Object.const_get(missing_constant)
    when :StopWatchNeverStartedError
      Object.const_get(missing_constant)
    when :StopWatchNeverStoppedError
      Object.const_get(missing_constant)
    else
      raise NoMethodError.new
    end
  end
end
