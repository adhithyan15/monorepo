def build_javascript_projects()
    puts "\n"
    puts "Building and testing JavaScript projects"
    puts "Attempting to install yarn\n"
    unless system("npm install -g yarn")
        puts "Unable to install yarn. Aborting the build"
        exit(false)
    end
    current_directory_path = Dir.pwd
    Dir.chdir(current_directory_path + "/javascript")
    current_directory_path = Dir.pwd
    current_directory_contents = Dir.entries(".")
    current_directory_contents.each do |package_directory|
        package_directory_path = current_directory_path + "/" + package_directory
        if File.directory?(package_directory_path)
            Dir.chdir(package_directory_path)
            # Check if package.json exists on the folder. If not, skip
            package_directory_contents = Dir.entries(".")
            puts "\n"
            puts "Checking if " + package_directory + " is a valid javascript package"
            package_json_found = package_directory_contents.include?("package.json")
            if package_json_found
                puts "package.json file found. Confirmed that it is a valid package"
                puts "Installing all dependencies\n"
                puts "\n"
                unless system("yarn install")
                    puts "Unable to install all dependencies. Aborting the build"
                    exit(false)
                end
                puts "\n"
                puts "Attemping to build and test " + package_directory + " package"
                puts "\n"
                unless system("yarn bundle")
                    puts "Build or test failed. Stopping the build"
                    exit(false)
                end
                puts "Successfully built and tested the package. Moving on to the next package"
                puts "\n"
            else
                puts "package.json not found. It is not a valid package. Skipping"
                puts "\n"
                puts "\n"
            end
        end
        Dir.chdir(current_directory_path)
    end
end

def build_ruby_projects()
    puts "Building and testing Ruby projects"
    current_directory_path = Dir.pwd
    Dir.chdir(current_directory_path + "/ruby")
    current_directory_path = Dir.pwd
    current_directory_contents = Dir.entries(".")
    current_directory_contents.each do |package_directory|
        package_directory_path = current_directory_path + "/" + package_directory
        if File.directory?(package_directory_path)
            Dir.chdir(package_directory_path)
            # Check if Gemfile exists on the folder. If not, skip
            package_directory_contents = Dir.entries(".")
            puts "\n"
            puts "Checking if " + package_directory + " is a valid ruby gem"
            gemfile_found = package_directory_contents.include?("Gemfile")
            if gemfile_found
                puts "Gemfile file found. Confirmed that it is a valid gem package"
                puts "Installing all dependencies\n"
                puts "\n"
                unless system("bundle")
                    puts "Installing dependencies failed"
                    exit(false)
                end
                puts "\n"
                puts "Attemping to build and test " + package_directory + " gem"
                puts "\n"
                unless system("ruby test/test.rb")
                    puts "Build or test failed. Stopping the build"
                    exit(false)
                end
                puts "Successfully built and tested the package. Moving on to the next package"
                puts "\n"
            else
                puts "Gemfile not found. It is not a valid package. Skipping"
                puts "\n"
                puts "\n"
            end
        end
        Dir.chdir(current_directory_path)
    end
end

puts "Starting build"
current_directory_contents = Dir.entries(".")
current_directory_path = Dir.pwd()
languages_directory_found = false
languages_directory_path = ""
current_directory_contents.each do |content|
    content_path = current_directory_path + "/" + content
    if File.directory?(content_path)
        if content == "languages"
            puts "Found languages directory"
            languages_directory_found = true
            languages_directory_path = content_path
        end
    end
end

unless languages_directory_found
    puts "No languages directory found. Exiting with an error"
    exit(false)
end

Dir.chdir(languages_directory_path)
languages_directory_contents = Dir.entries(".")

languages_directory_contents.each do |language_directory|
    if language_directory == "javascript"
        build_javascript_projects()
    elsif language_directory == "ruby"
        build_ruby_projects()
    end
    Dir.chdir(languages_directory_path)
end