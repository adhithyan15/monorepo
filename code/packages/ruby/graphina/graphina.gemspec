# frozen_string_literal: true

require_relative "lib/graphina/version"

Gem::Specification.new do |spec|
  spec.name          = "graphina"
  spec.version       = Graphina::VERSION
  spec.authors       = ["Adhithya Rajasekaran"]
  spec.email         = ["adhithyan15@gmail.com"]

  spec.summary       = "A small graph library"
  spec.description   = "This gem provides a Graph library"
  spec.homepage      = "https://github.com/adhithyan15/monorepo/tree/main/languages/ruby/graphina"
  spec.license       = "MIT"
  spec.required_ruby_version = ">= 2.4.0"

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = "https://github.com/adhithyan15/monorepo/tree/main/languages/ruby/graphina"
  spec.metadata["changelog_uri"] = "https://github.com/adhithyan15/monorepo/tree/main/languages/ruby/graphina"

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
