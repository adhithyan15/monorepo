# frozen_string_literal: true

require_relative "lib/stopwatchy/version"

Gem::Specification.new do |spec|
  spec.name          = "stopwatchy"
  spec.version       = Stopwatchy::VERSION
  spec.authors       = ["Adhithya Rajasekaran"]
  spec.email         = ["adhithyan15@gmail.com"]

  spec.summary       = "A small library for timing operations"
  spec.description   = "This gem provides a StopWatch class that wraps Timer and Process objects"
  spec.homepage      = "https://github.com/adhithyan15/monorepo/tree/main/languages/ruby/stopwatchy"
  spec.license       = "MIT"
  spec.required_ruby_version = ">= 2.4.0"

  spec.metadata["allowed_push_host"] = "https://github.com/adhithyan15/monorepo'"

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = "https://github.com/adhithyan15/monorepo/tree/main/languages/ruby/stopwatchy"
  spec.metadata["changelog_uri"] = "https://github.com/adhithyan15/monorepo/tree/main/languages/ruby/stopwatchy"

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
