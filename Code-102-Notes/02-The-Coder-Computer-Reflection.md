# Choosing A Text Editor
## When selecting it can be a daunting task, as there are many different choices available.
### Naturally, each with its own strengths and weaknesses. 
#### In my opinion the best text editor for you will most likely depend on your specific needs and or preferences.
##### Here are some factors to consider when choosing a text editor:
1. Features: What features are important to you? Do you need a text editor with basic features like syntax highlighting and code completion, or do you need more advanced features like debugging and refactoring?
2. Ease of use: How easy is the text editor to learn and use? If you are a beginner, you may want to choose an editor with a more intuitive interface.
3. Customization: Can the text editor be customized to meet your needs? For example, do you want to be able to change the keyboard shortcuts or create your own plugins?
4. Platform: What operating system do you use? Some text editors are only available for certain platforms.
5. Price: Is the text editor free or paid? There are many excellent free text editors available, but paid editors may offer additional features and support.
When you’ve finally narrowed down all of these factors, you can start narrowing down your choices. Here are a few popular text editors to consider:
1. Visual Studio Code: Visual Studio Code is a free and open-source text editor that is popular among both beginners and experienced developers. It supports a wide range of programming languages and features a variety of features, including syntax highlighting, code completion, debugging, and refactoring.
2. Sublime Text: Sublime Text is a paid text editor that is known for its speed and performance. It also offers a variety of features, including syntax highlighting, code completion, and macros.
3. Atom: Atom is a free and open-source text editor that is built on Electron. It is highly customizable and extensible, making it a good choice for developers who need a powerful and flexible text editor.
4. Vim: Vim is a modal text editor that is popular among experienced developers. It is known for its efficiency and power, but it can be difficult to learn at first.
5.Emacs: Emacs is another modal text editor that is popular among experienced developers. It is even more customizable than Vim and offers a wide range of features.
Still  unsure on which text editor to choose, I highly recommend just trying out a few different options to see which one is the best fit for you. Majority of text editors offer free trials, so you can play around with them out before you buy them.
Additional tips for choosing a text editor:
1. Read reviews and compare features: There are many websites and blogs that review text editors. Read reviews and compare features to get a better understanding of what each editor has to offer.
2. Ask your friends and colleagues: Ask your friends and colleagues who are also developers what text editors they use and recommend.
3. Try out a few different options: Don't be afraid to try out a few different text editors before you choose one. Most text editors offer free trials, so you can try them out before you buy them.
When you have finally chosen your text editor, take some time to learn how to use it effectively. There are many tutorials and resources available online that can help you get started.

pwd
Print Working Directory - ie. Where are we currently.
ls
List the contents of a directory.
cd
Change Directories - ie. move to another directory.

Relative path
A file or directory location relative to where we currently are in the file system.
Absolute path
A file or directory location in relation to the root of the file system.
pwd - Where are we? Print Working Directory (It tells you what your current or present working directory is)
ls - What’s in our current location? ls (short for list) shows a List of the contents of a directory
With no arguments, it will just do a plain listing of our current location
cd [location] - Change Directory (move) to specified location
If you run cd without any arguments then it will always take you back to your home (root) directory
mkdir - Creates a directory
touch - Used to create, change or modify a file
touch [file name] creates a new file with the specified file name in the current directory
 
Refeerences
Remember that when we supply a directory in the above command we are actually supplying a path. Is the path we specified relative or absolute? Here are a few more examples of how we can supply a directory to be created
* mkdir /home/ryan/foo
* mkdir ./blah
* mkdir ../dir1
* mkdir ~/linuxtutorialwork/dir2
The first one is -p which tells mkdir to make parent directories as needed (demonstration of what that actually means below). The second one is -v which makes mkdir tell us what it is doing (as you saw in the example above, it normally does not).
1. mkdir -p linuxtutorialwork/foo/bar
2. 
3. cd linuxtutorialwork/foo/bar
4. pwd
5. /home/ryan/linuxtutorialwork/foo/bar
And now the same command but with the -v option
1. mkdir -pv linuxtutorialwork/foo/bar
2. mkdir: created directory 'linuxtutorialwork/foo'
3. mkdir: created directory 'linuxtutorialwork/foo/bar'
4. 
5. cd linuxtutorialwork/foo/bar
6. pwd
7. /home/ryan/linuxtutorialwork/foo/bar

touch [options] <filename>
1. pwd
2. /home/ryan/linuxtutorialwork
3. 
4. ls
5. foo
6. 
7. touch example1
8. 
9. ls
10. example1 foo
touch is actually a command we may use to modify the access and modification times on a file (normally not needed but sometimes when you're testing a system that relies on file access or modification times it can be useful). I know some students have tried using this command to make it look like their assignment files were not modified after the due date (there are means to detect this so it never works but points for being creative). What we are taking advantage of here is that if we touch a file and it does not exist, the command will do us a favor and automatically create it for us.

mkdir
Make Directory - ie. Create a directory.
rmdir
Remove Directory - ie. Delete a directory.
touch
Create a blank file.
cp
Copy - ie. Copy a file or directory.
mv
Move - ie. Move a file or directory (can also be used to rename).
rm
Remove - ie. Delete a file.
ScenarioLinks to an external site.
cd projects
mkdir new-project
touch new-project/newfile.md
cd ..
ls projects/new-project
pwd
ls
cd
mkdir
touch

If the above commands and arguments are entered in the terminal, the below will happen:
1.cd projects
2.mkdir new-project
3.touch new-project/newfile.md
4.cd ..
5.ls projects/new-project

1.Change Directory to the projects directory
2.Create new folder called new-project in the projects directory
3.Create new file called newfile.md in the new-project directory
4.Changes Directory up one level in the hierarchy in reference to the parent directory up to projects directory
5.Shows a List of the contents of ls projects/new-project directory


![7721C784-0F10-452B-95B8-CC3B5EA47142](https://github.com/MccDom1/reading-notes/assets/145872110/6b150aec-8e31-4962-997e-bb1bf3d88588)



