import os
import sys
import platform
import subprocess

def osIndependentPathAppend(basePath, pathToAppend):
    path_to_return = basePath
    if platform.system() == "Linux" or platform.system() == "Darwin":
        path_to_return += "/"
    elif platform.system() == "Windows":
        path_to_return += "\\"
    path_to_return += pathToAppend
    return path_to_return

def buildJavaScriptProjects():
    print("Starting to build javascript projects\n")
    print("Installing Yarn\n")
    try:
        process = subprocess.Popen(['npm', 'install', '-g', 'yarn'], stdout=subprocess.PIPE, stderr=subprocess.PIPE, universal_newlines=True)
        stdout, stderror = process.communicate()
    except FileNotFoundError:
        print("Unable to install Yarn. Failing the build\n")
        sys.exit(2)
    project_contents = os.listdir(".")
    base_dir_path = os.getcwd()
    for project in project_contents:
        if os.path.isdir(project):
            print("Switching to " + project + " project to build\n")
            project_path = osIndependentPathAppend(base_dir_path, project)
            os.chdir(project_path)
            project_contents = os.listdir(".")
            packageJsonFound = False
            for content in project_contents:
                if content == "package.json":
                    packageJsonFound = True
            if packageJsonFound:
                process = subprocess.Popen(['yarn', 'bundle'], stdout=subprocess.PIPE, stderr=subprocess.PIPE, universal_newlines=True)
                stdout, stderror = process.communicate()
                if "npm ERR" in stderror:
                    print("Build failed")
                    print(stdout)
                    print(stderror)
                    sys.exit(2);
                else:
                    print("Build succeeded")
            else:
                print("package.json not found. Skipping this package")
            os.chdir(base_dir_path)
            print("\n")

print("Starting Build\n")

directory_contents = os.listdir(".")

languages_folder_found = False;
for item in directory_contents:
    if os.path.isdir(item):
        if item == "languages":
            languages_folder_found = True

if not languages_folder_found:
    print("Languages folder was not found")
    sys.exit(0)

languages_directory = os.getcwd()
languages_directory = osIndependentPathAppend(languages_directory, "languages")

print("Switching to languages directory\n")
os.chdir(languages_directory)

languages_directory_contents = os.listdir(".")
for language in languages_directory_contents:
    if os.path.isdir(language):
        language_directory = osIndependentPathAppend(os.getcwd(), language)
        if language == "javascript":
            print("Switching to " + language + " directory\n")
            os.chdir(language_directory)
            buildJavaScriptProjects()