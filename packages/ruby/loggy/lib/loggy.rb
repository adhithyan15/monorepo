require_relative "loggy/version"
require_relative "../../shared-code/loggy/logger_observer"
require_relative "../../shared-code/loggy/logger"

module Loggy
    def self.const_missing(missing_constant)
        case missing_constant
        when :LoggerObserver
            Object.const_get(missing_constant)
        when :Logger
            Object.const_get(missing_constant)
        end
    end
end