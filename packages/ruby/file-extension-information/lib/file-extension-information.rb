require_relative "file-extension-information/version"

module FileExtensionInformation
    ExtensionInfo = Struct.new(:extension, :application, :type)
    def self.get_file_extension_information(file_extension)
    case file_extension.strip
    when "rb"
        return ExtensionInfo.new(KnownFileExtension::RUBY, KnownApplication::RUBY_PROGRAMMING_LANGUAGE, FileType::SOURCE_CODE)
    end
    end
    module KnownFileExtension
        RUBY = "rb"
    end
    module KnownApplication
        RUBY_PROGRAMMING_LANGUAGE = "Ruby Programming Language"
    end
    module FileType
        SOURCE_CODE = "Source Code"
    end
end