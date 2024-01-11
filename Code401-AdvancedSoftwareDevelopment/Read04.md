# Read: Class 04

## Why is this important?

- Understanding classes and objects in Python is crucial for organizing and structuring code in an object-oriented manner, promoting reusability and maintainability. Recursion, as a programming concept, enhances problem-solving skills, especially for tasks that can be divided into smaller sub-problems. Pytest fixtures aid in setting up consistent test environments, and code coverage helps assess test effectiveness, contributing to overall code quality. Proficiency in these concepts supports efficient troubleshooting, debugging, and collaboration within development teams, leading to more successful and scalable software projects.

# Readings: Topic

1. What are the key differences between classes and objects in Python, and how are they used to create and manage instances of a class?

- Classes are used to create a blueprint for an object. They are used to create a template for an object.
t defines a data structure along with methods to operate on that data. Classes are used to bundle data and functionality together.

Objects: Objects are instances of a class. They represent a real-world entity and are created from a class definition. Objects have attributes (characteristics) and methods (functions) associated with them. 

2. Explain the concept of recursion and provide an example of how it can be used to solve a problem in Python. What are some best practices to follow when implementing a recursive function?

- Recursion is a method of solving problems by breaking a problem down into smaller and smaller sub-problems until the sub-problems are small enough to be solved directly. 
Best practices for recursion:

Define a base case to stop the recursion.
Ensure progress toward the base case.
Avoid infinite recursion.

3. What is the purpose of pytest fixtures and code coverage in testing Python code? Explain how they can be used together to improve the quality and maintainability of a project.

- Fixtures are used to provide a common environment for testing. Code coverage is used to determine the percentage of code that is covered by tests. 
Fixtures are a way to provide a fixed baseline for your tests. They can set up preconditions, and the fixture function is marked with the @pytest.fixture decorator.