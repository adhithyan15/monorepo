require_relative "file-extension-information/version"
require_relative "../../shared-code/file-extension-information/retrieve_file_extension_information"

module FileExtensionInformation
    def self.get_file_extension_information(file_extension)
        return retrieve_file_extension_information(file_extension)
    end
end