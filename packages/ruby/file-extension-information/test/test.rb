require_relative "../lib/file-extension-information"
require "test/unit"

class FileExtensionInformationTest < Test::Unit::TestCase
    def test_should_return_ruby_source_code_if_extension_is_rb()
        output = FileExtensionInformation.get_file_extension_information("rb")
        assert(output.extension  == "rb", "The output extension should be rb")
    end
end