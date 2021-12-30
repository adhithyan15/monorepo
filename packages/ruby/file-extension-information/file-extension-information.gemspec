# frozen_string_literal: true

require_relative "lib/file-extension-information/version"

Gem::Specification.new do |spec|
  spec.name          = "file-extension-information"
  spec.version       = FileExtensionInformation::VERSION
  spec.authors       = ["Adhithya Rajasekaran"]
  spec.email         = ["adhithyan15@gmail.com"]

  spec.summary       = "A small library that tells you information about file extension"
  spec.description   = "This gem provides get_file_extension_information method that takes in a file extension and returns information about the file extension like which application created it"
  spec.homepage      = "https://github.com/adhithyan15/monorepo/tree/main/languages/ruby/file-extension-information"
  spec.license       = "MIT"
  spec.required_ruby_version = ">= 2.4.0"

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = "https://github.com/adhithyan15/monorepo/tree/main/languages/ruby/file-extension-information"
  spec.metadata["changelog_uri"] = "https://github.com/adhithyan15/monorepo/tree/main/languages/ruby/file-extension-information"

  # Specify which files should be added to the gem when it is released.
  # The `git ls-files -z` loads the files in the RubyGem that have been added into git.
  spec.files = Dir.chdir(File.expand_path(__dir__)) do
    `git ls-files -z`.split("\x0").reject { |f| f.match(%r{\A(?:test|spec|features)/}) }
  end
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{\Aexe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  # Uncomment to register a new dependency of your gem
  # spec.add_dependency "example-gem", "~> 1.0"

  # For more information and examples about making a new gem, checkout our
  # guide at: https://bundler.io/guides/creating_gem.html
end
