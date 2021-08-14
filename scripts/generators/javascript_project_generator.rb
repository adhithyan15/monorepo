require 'fileutils'

def fill_project_directory(project_name, project_description, project_directory_path, version, is_combo)
    unless version == "browser" or version == "node"
        puts "Unknown version. Aborting"
        exit(1)
    end

    FileUtils.mkdir_p(project_directory_path + "/src" + "/implementations")
    FileUtils.mkdir_p(project_directory_path + "/src" + "/interfaces")

    # index.ts file contents
    index_ts_contents = <<-INDEX_TS_CONTENTS
console.log("Hello World");
    INDEX_TS_CONTENTS
    index_ts_file = File.new(project_directory_path + "/src" + "/index.ts", "w")
    index_ts_file.puts(index_ts_contents)
    index_ts_file.close

    eslintignore_contents = <<-ESLINTIGNORE_CONTENTS
# don't ever lint node_modules
node_modules
# don't lint build output (make sure it's set to your correct build folder name)
dist
    ESLINTIGNORE_CONTENTS
    eslintignore_file = File.new(project_directory_path + "/.eslintignore", "w")
    eslintignore_file.puts(eslintignore_contents)
    eslintignore_file.close

    eslintrc_contents = <<-ESLINTRC_CONTENTS
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
};
    ESLINTRC_CONTENTS
    eslintrc_file = File.new(project_directory_path + "/.eslintrc.js", "w")
    eslintrc_file.puts(eslintrc_contents)
    eslintrc_file.close

    gitignore_contents = <<-GITIGNORE_CONTENTS
node_modules/
dist/
coverage/
yarn-error.log
    GITIGNORE_CONTENTS
    gitignore_file = File.new(project_directory_path + "/.gitignore", "w")
    gitignore_file.puts(gitignore_contents)
    gitignore_file.close

    prettierignore_contents = <<-PRETTIERIGNORE_CONTENTS
dist/
node_modules/
*.json
*.md
*.js
coverage/
    PRETTIERIGNORE_CONTENTS
    prettierignore_file = File.new(project_directory_path + "/.prettierignore", "w")
    prettierignore_file.puts(prettierignore_contents)
    prettierignore_file.close

    babelconfig_contents = <<-BABELCONFIG_CONTENTS
// babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
  ],
};
    BABELCONFIG_CONTENTS
    babelconfig_file = File.new(project_directory_path + "/babel.config.js", "w")
    babelconfig_file.puts(babelconfig_contents)
    babelconfig_file.close

    license_contents = <<-LICENSE_CONTENTS
MIT License

Copyright (c) 2021 Adhithya Rajasekaran

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

    LICENSE_CONTENTS
    license_file = File.new(project_directory_path + "/LICENSE", "w")
    license_file.puts(license_contents)
    license_file.close

    package_name = project_name
    if is_combo
        package_name = package_name + "-" + version
    end
    node_type_dependency = ""
    if version == "node"
        node_type_dependency = <<-NODE_TYPE_DEPENDENCY
,"dependencies": {
    "@types/node": "^15.12.2"
  }
        NODE_TYPE_DEPENDENCY
    end
    package_json_contents = <<-PACKAGE_JSON_CONTENTS
{
  "name": "#{package_name}",
  "version": "0.1.0",
  "description": "#{project_description}",
  "main": "dist/bundle.js",
  "scripts": {
    "build": "npx webpack",
    "lint": "npx eslint . --ext .ts",
    "prettier": "npx prettier --write .",
    "test": "npx jest --passWithNoTests --coverage",
    "bundle": "npm run build && npm run lint && npm run prettier && npm run test"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/adhithyan15/monorepo.git"
  },
  "keywords": [
    "operation"
  ],
  "author": "Adhithya Rajasekaran",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/adhithyan15/monorepo/issues"
  },
  "homepage": "https://github.com/adhithyan15/#{package_name}#readme",
  "devDependencies": {
    "@babel/core": "^7.14.3",
    "@babel/preset-env": "^7.14.2",
    "@babel/preset-typescript": "^7.13.0",
    "@types/jest": "^26.0.23",
    "@typescript-eslint/eslint-plugin": "^4.25.0",
    "@typescript-eslint/parser": "^4.25.0",
    "babel-jest": "^27.0.1",
    "eslint": "^7.27.0",
    "jest": "^27.0.1",
    "prettier": "2.3.0",
    "ts-loader": "^9.2.2",
    "typescript": "^4.2.4",
    "webpack": "^5.37.1",
    "webpack-cli": "^4.7.0"
  }
  #{node_type_dependency}
}
    PACKAGE_JSON_CONTENTS

    package_json_file = File.new(project_directory_path + "/package.json", "w")
    package_json_file.puts(package_json_contents)
    package_json_file.close

    readme_contents = <<-README_CONTENTS
# #{package_name}

#{project_description}

    README_CONTENTS

    readme_file = File.new(project_directory_path + "/readme.md", "w")
    readme_file.puts(readme_contents)
    readme_file.close

    webpack_browser_config_contents = <<-WEBPACK_BROWSER_CONFIG_CONTENTS
const path = require('path');

const browserConfig = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: "production"
};

module.exports = [browserConfig];
    WEBPACK_BROWSER_CONFIG_CONTENTS

    webpack_node_config_contents = <<-WEBPACK_NODE_CONFIG_CONTENTS
const path = require('path');

const serverConfig = {
  target: 'node',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
        name: "#{package_name}",
        type: "commonjs"
    }
  },
  mode: "production"
}

module.exports = [serverConfig];
    WEBPACK_NODE_CONFIG_CONTENTS

    webpack_config_file = File.new(project_directory_path + "/webpack.config.js", "w")
    webpack_config_file.puts(version == "node" ? webpack_node_config_contents : webpack_browser_config_contents)
    webpack_config_file.close

    tsconfig_browser_contents = <<-TSCONFIG_BROWSER_CONTENTS
{
  "compilerOptions": {
    "outDir": "./dist/",
    "noImplicitAny": true,
    "strictNullChecks": true,
    "allowJs": false,
    "module": "es6",
    "target": "ES3",
    "incremental": true,
    "sourceMap": true,
    "noImplicitThis": true,
    "strict": true,
    "declaration": true,
  },
}
    TSCONFIG_BROWSER_CONTENTS

    tsconfig_node_contents = <<-TSCONFIG_NODE_CONTENTS
{
  "compilerOptions": {
    "outDir": "./dist/",
    "noImplicitAny": true,
    "strictNullChecks": true,
    "allowJs": false,
    "module": "CommonJS",
    "incremental": true,
    "sourceMap": true,
    "noImplicitThis": true,
    "strict": true,
    "declaration": true,
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true
  }
}
    TSCONFIG_NODE_CONTENTS
    tsconfig_file = File.new(project_directory_path + "/tsconfig.json", "w")
    tsconfig_file.puts(version == "node" ? tsconfig_node_contents : tsconfig_browser_contents)
    tsconfig_file.close
end

puts "Welcome to the JavaScript Project Generator"
puts "\n"
puts "The generator currently supports browser and Node.js projects"
puts "Press 1 for browser project"
puts "Press 2 for Node.js project"
puts "Press 3 to generate both browser and Node.js projects with a shared folder to share code between the two"
puts "\n"
node_project = false
browser_project = false
combo_project = false
choice = gets.chomp.to_i

unless choice > 0  and choice < 4
    puts "Invalid choice. Aborting the generator"
    exit(1)
end

case choice
when 1
    browser_project = true
    puts "You chose the standalone browser project"
when 2
    node_project = true
    puts "You chose the standlaone Node.js project"
when 3
    combo_project = true
    puts "You chose both browser and Node.js project with a shared folder"
end

puts "\n"
puts "Please provide a name for your project. Here are some guidelines to help"
puts "1. No spaces allowed in package names"
puts "2. Use dashes to separate words"
puts "3. Use lowercase letters"
puts "4. If you are generating both browser and Node.js project, then we will automatically append -browser and -node to the package name"
puts "\n"

project_name = gets.chomp

puts "Please provide a description for the project\n"
project_description = gets.chomp
puts "\n"

puts "\n"
puts "The project name you have provided is " + project_name
puts "\n"

puts "Checking if the package name meets guidelines"
puts "\n"

if project_name.split(" ").length > 1
    puts "Found one or more spaces in the project name. Aborting"
    exit(1)
end

if /([a-z\-]+)/.match(project_name) == nil
    puts "Provided package name doesn't meet the package name guidelines. Aborting"
    exit(1)
end

puts "\n"
puts "Package name meets the guidelines"
puts "\n"

puts "\n"
puts "Checking with npm to see if the package name is available"
puts "\n"

if node_project or browser_project
    npm_package_found = system("npm info " + project_name)

    # npm info command returns an error if the package doesn't exist. 
    if npm_package_found
        puts "A package with the same name has been found on npm. Aborting"
        exit(1)
    end
elsif combo_project
    browser_package_found = system("npm info " + project_name + "-browser")
    node_package_found = system("npm info " + project_name + "-node")
    if browser_package_found
        puts "A browser package with the same name has been found on npm. Aborting"
        exit(1)
    end
    if node_package_found
        puts "A node.js package with the same name has been found on npm. Aborting"
        exit(1)
    end
end

puts "\n"
puts "The package name is available on npm"
puts "\n"

root_directory_path = Dir.pwd
languages_directory_path = root_directory_path + "/" + "packages"

unless File.directory?(languages_directory_path)
    puts "Expected to find the language directory inside the root folder. But didn't find it. Aborting"
    exit(1)
end

javascript_language_directory_path = languages_directory_path + "/" + "javascript"

unless File.directory?(javascript_language_directory_path)
    puts "Expected to find the JavaScript language directory inside the languages directory. But didn't find it. Aborting"
    exit(1)
end

project_directory_path = javascript_language_directory_path + "/" + project_name

if browser_project or node_project
    if File.directory?(project_directory_path)
        puts "There is an existing folder with the same name as the project. Aborting"
        exit(1)
    end
elsif combo_project
    if File.directory?(project_directory_path)
        puts "There is an existing folder with the same name as the project. This means shared code cannot be stored. Aborting."
        exit(1)
    end
    if File.directory?(project_directory_path + "-browser")
        puts "There is an existing folder with the same name as the browser version of the project. Aborting"
        exit(1)
    end
    if File.directory?(project_directory_path + "-node")
        puts "There is an existing folder with the same name as the node.js version of the project. Aborting"
    end
end

Dir.chdir(javascript_language_directory_path)

if browser_project
    puts "Populating the browser project with boilerplate code"
    fill_project_directory(project_name, project_description, project_directory_path, "browser", false)
    puts "\n"
elsif node_project
    puts "Populating the node.js project with boilerplate code"
    fill_project_directory(project_name, project_description, project_directory_path, "node", false)
    puts "\n"
elsif combo_project
    puts "Populating the shared folder"
    puts "\n"
    FileUtils.mkdir_p(project_directory_path + "/src" + "/implementations")
    FileUtils.mkdir_p(project_directory_path + "/src" + "/interfaces")

    puts "Populating the browser project with boilerplate code"
    fill_project_directory(project_name, project_description, project_directory_path + "-browser", "browser", false)
    puts "\n"

    puts "Populating the node.js project with boilerplate code"
    fill_project_directory(project_name, project_description, project_directory_path + "-node", "node", false)
    puts "\n"
end

