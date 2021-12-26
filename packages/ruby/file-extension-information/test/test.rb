require_relative "../lib/file-extension-information"
require "test/unit"

class FileExtensionInformationTest < Test::Unit::TestCase
    def test_should_return_ruby_source_code_if_extension_is_rb()
        output = FileExtensionInformation::get_file_extension_information("rb")
        assert(output.extension == FileExtensionInformation::KnownFileExtension::RUBY)
        assert(output.application == FileExtensionInformation::KnownApplication::RUBY_PROGRAMMING_LANGUAGE)
        assert(output.type == FileExtensionInformation::FileType::SOURCE_CODE)
    end
end