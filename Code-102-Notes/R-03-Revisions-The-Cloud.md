
#Reflection

Revisions and the cloud are closely related. The cloud provides a convenient and scalable way to store and manage revisions of documents, code, and other files. This can be helpful for individuals, teams, and organizations of all sizes.
Some of the benefits of using the cloud for revisions consist of
- Convenience: 
-Document revisions: 
Utilizing The cloud makes it possible to have a single, authoritative source for all versions of a file. This can help to avoid confusion and conflict, especially when working with teams.
The cloud also makes it easy to roll back to previous versions of a file if needed. This can be helpful if a change to a file causes problems.
The cloud can help to ensure that revisions are secure and accessible to authorized users.
Overall, the cloud is a powerful tool for managing revisions. It can help to save time, improve efficiency, and reduce the risk of errors.

https://mccdom1.github.io/reading-notes/Links to an external site.

1. What is Version Control?

- Version control is ideally a infastructure that allows you to revisit various versions of a file or set of files by recording its changes.
it also gives you the capabilities to revert a file or project to a prior version, track those modifications along with the source or origin of the mod, and compare changes
And if you make a mistake no problem its uniqueness allows for an easy fix.
Git is indeed version control system

2. What is cloning in Git?

- When cloning in Git it creates a copy of an existing Git repository from a specific servers by using a clone command with a repository’s URL.
Having done so now cloning the file, you have copied all versions of all files for that particular project!

3. What is the command to track and stage files?
- Single file git add [file name]

- Notifies Git to include these changes in the next snapshot

- All files git add *

- Once youve used those commands, files will be tracked and are then staged for committing

 

 

4. What is the command to take a snapshot of your changed files?

- You can utilize what is called the Git status command to put eyes on theinformation regarding changes to be committed

- $ git status

-On branch master

-Changes to be committed:

  -(use "git reset HEAD ..." to unstage)

  -new file: EXAMPLE
In the end this information tells us that there are changes that can be committed and that the file has been staged.


5. What is the command to send your changed files to Github?

- Whats is known as Committing a File
After youre done staging one or more or multiple files, it is common that you should commit the changes and record what you did within the commit message:

-$git commit -m “made change x,y,z because x”
-Committing All Changes
-$git commit -a
-This command commits a snapshot of all modifications to tracked files in the working directory.

-Pushing Changes to GitHub remote repository
-Type git push origin main

-This command sends any new commits (the snapshots of your code) to GitHub

Ive also learned in my terminal if your going to push things dont be afraid to pull either. 
