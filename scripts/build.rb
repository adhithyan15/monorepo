def check_for_workspace_file(directory_path)
    return File.exist?(directory_path + "/WORKSPACE")
end

def check_for_build_file(directory_path)
    return File.exist?(directory_path + "/BUILD") || File.exist?(directory_path + "/BUILD.win") || File.exist?(directory_path + "/BUILD.darwin") || File.exist?(directory_path + "/BUILD.linux")
end

def process_workspace_file(workspace_directory_path)
    puts "Processing WORKSPACE file in " + workspace_directory_path
    workspace_file_path = workspace_directory_path + "/WORKSPACE"
    workspace_file_contents = File.read(workspace_file_path).split("\n")
    if workspace_file_contents.length == 0
        puts "WORKSPACE file is empty. Stopping the build"
        exit(true)
    end
    workspace_file_contents.each do |directory_to_process|
        nested_workspace_directory_path = workspace_directory_path + "/" + directory_to_process
        if check_for_workspace_file(nested_workspace_directory_path)
            process_workspace_file(nested_workspace_directory_path)
        end
        if check_for_build_file(nested_workspace_directory_path)
            process_build_file(nested_workspace_directory_path)
        end
    end
end

def process_build_file(build_directory_path)
    Dir.chdir(build_directory_path)
    puts "Processing BUILD file in " + build_directory_path
    cross_platform_build_file_path = build_directory_path + "/BUILD"
    cross_plaform_build_file_found = File.exist?(cross_platform_build_file_path)
    windows_build_file_path = build_directory_path + "/BUILD.win"
    windows_build_file_found = File.exist?(windows_build_file_path)
    linux_build_file_path = build_directory_path + "/BUILD.linux"
    linux_build_file_found = File.exist?(linux_build_file_path)
    darwin_build_file_path = build_directory_path + "/BUILD.darwin"
    darwin_build_file_found = File.exist?(darwin_build_file_path)
    build_file_path = ""
    if RUBY_PLATFORM =~ /darwin/
        build_file_path = cross_plaform_build_file_found ? cross_platform_build_file_path : darwin_build_file_found ? darwin_build_file_path : ""
    elsif RUBY_PLATFORM =~ /linux/
        build_file_path = cross_plaform_build_file_found ? cross_platform_build_file_path : linux_build_file_found ? linux_build_file_path : ""
    elsif RUBY_PLATFORM =~ /w32/
        build_file_path = cross_plaform_build_file_found ? cross_platform_build_file_path : windows_build_file_found ? windows_build_file_path : ""
    end
    begin
        unless build_file_path == ""
            build_file_contents = File.read(build_file_path).split("\n")
            build_file_contents.each do |build_command|
                unless system(build_command)
                    puts build_command
                    puts "Build failed. Aborting"
                    exit(false)
                end
            end
            puts "Build succeeded"
        end
    rescue
        puts "Build failed for build file " + build_file_path
    end
end

puts "Looking for a WORKSPACE or a build.rb file to start the build"
workspace_file_found = check_for_workspace_file(Dir.pwd)
build_file_found = check_for_build_file(Dir.pwd)

if RUBY_PLATFORM =~ /w32/
    program_files_path = ENV["ProgramFiles(x86)"]
    visual_studio_path = "#{program_files_path}\\Microsoft Visual Studio\\Installer"
    puts "Adding Visual Studio installer to the path"
    unless system("set PATH=%PATH%;#{visual_studio_path}")
        puts "Unable to add Visual Studio Installer to path"
        exit(false);
    end
    vswhere_path = `vswhere -products * -latest -prerelease -property installationPath`
    puts "#{vswhere_path}\\VC\\Auxillary\\Build\\vcvarsall.bat x64"
    unless system("#{vswhere_path}\\VC\\Auxillary\\Build\\vcvarsall.bat x64")
        puts "Unable to configure visual studio using vcvarsall"
        exit(false)
    end
end

if workspace_file_found
    puts "Found a WORKSPACE file. Will attempt to recursively build the directories mentioned in the WORKSPACE file"
    process_workspace_file(Dir.pwd)
elsif build_file_found
    puts "Found a BUILD file. Will attempt to build using the instructions in the build.rb file"
    process_build_file(Dir.pwd)
else
    puts "Expected to find a WORKSPACE or BUILD file. Found nothing. Aborting"
    exit(false)
end