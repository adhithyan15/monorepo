require_relative "extension_info"
require_relative "known_application"
require_relative "known_file_extension"
require_relative "known_file_type"

def get_file_extension_information_internal(file_extension)
    case file_extension.strip
    when "rb"
        return ExtensionInfo.new(KnownFileExtension::RUBY, KnownApplication::RUBY_PROGRAMMING_LANGUAGE, KnownFileType::SOURCE_CODE)
    end
end