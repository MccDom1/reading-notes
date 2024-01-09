# Read: Class 02

# Readings: Testing and Modules

## Why is this important?
- Testing is a very important part of the development process. It helps you create a foundation of trust that your code is doing what it is supposed to do. 

1. What are the key principles of Test-Driven Development (TDD) in Python, and how do they contribute to the overall quality of code?

- Test-Driven Development is a software development process that relies on the repetition of a very short development cycle: requirements are turned into very specific test
cases, then the software is improved so that the tests pass. This is opposed to software development that allows software to be shipped with known defici
encies, which are then corrected by a software maintenance team.


2. Explain the purpose of the if __name__ == '__main__': statement in Python scripts. What are some use cases for including this conditional in your code?

- The purpose of the if __name__ == '__main__': statement is to prevent the code from being executed when the module is imported. This is useful when you want to run the code as a script.


3. Describe the concept of recursion in Python.

- Recursion is a process in which a function calls itself. This is useful when you want to perform a task repeatedly. For example, you might want to print out the first 10 numbers in a sequence. You can do this by writing a function that prints the first number, then calls itself to print the next number. This process continues until the function reaches the last number. This is called a recursive function. 

4. What is the difference between Python modules and packages? Explain how to create, import, and use them in your Python programs.

- A Python module is a file that contains Python code. A package is a directory that contains multiple modules. To create a module, you create a file and save it in a directory. To import a module, you use the import statement. To use a module, you call the functions and classes in the module. 
