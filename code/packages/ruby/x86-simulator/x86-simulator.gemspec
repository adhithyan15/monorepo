# frozen_string_literal: true

require_relative "lib/x86-simulator/version"

Gem::Specification.new do |spec|
  spec.name          = "x86-simulator"
  spec.version       = X86Simulator::VERSION
  spec.authors       = ["Adhithya Rajasekaran"]
  spec.email         = ["adhithyan15@gmail.com"]

  spec.summary       = "A small library for simulating a X86 architecture based system"
  spec.description   = "This gem provides a way to run X86 instructions on a simulator"
  spec.homepage      = "https://github.com/adhithyan15/monorepo/tree/main/languages/ruby/x86-simulator"
  spec.license       = "MIT"
  spec.required_ruby_version = ">= 2.4.0"

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = "https://github.com/adhithyan15/monorepo/tree/main/languages/ruby/x86-simulator"
  spec.metadata["changelog_uri"] = "https://github.com/adhithyan15/monorepo/tree/main/languages/ruby/x86-simulator"

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