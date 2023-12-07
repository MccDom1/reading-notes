# Read: Class 09

Both functional programming concepts and Node.js modules are critical for developing robust and efficient applications. Here's why:

Functional Programming:

Predictable and reliable code: Pure functions and immutability lead to code that's easier to reason about, debug, and test. This reduces bugs, improves maintainability, and promotes code confidence.
Modular and reusable components: Functions become independent building blocks, allowing for cleaner code organization and reuse across various parts of your application.
Concurrent and parallel execution: Pure functions are inherently thread-safe, enabling easier parallelization and utilization of multi-core processors, boosting performance and scalability.
Comprehensible and maintainable code: Referential transparency allows for simpler understanding of program flow and logic, making code more readable and easier to maintain for future developers.
Node.js Modules:

Modular and organized code: Modules encapsulate functionalities, promoting code organization, separation of concerns, and improved code reusability.
Simplified development: Importing existing modules allows developers to leverage pre-built functionalities, reducing development time and effort.
Code reuse and maintainability: Modules encourage code reuse across different parts of your application, promoting consistency and simplifying maintenance.
Improved project structure: Modules organize code logically, making projects more organized and easier to navigate, especially for large applications.
Easier collaboration: Sharing modules enables developers to collaborate more effectively by working on independent units without interfering with each other's code.
In essence, both functional programming and Node.js modules contribute to writing cleaner, more efficient, and maintainable code. They promote modularity, reusability, predictability, and collaboration, ultimately leading to better software development practices and higher quality applications.

# Readings: Functional Programming


## Functional Programming Concepts

1. What is functional programming?
-Functional programming is a programming paradigm that emphasizes the use of functions as the primary building blocks of programs. It focuses on immutability, pure functions, and data manipulation through function application.


2. What is a pure function and how do we know if something is a pure function?
-A pure function is a function that, given the same inputs, always produces the same outputs and does not have any side effects. In other words, it does not modify any external state, including global variables or internal state between calls.
-Deterministic: Outputs are solely determined by the inputs.
Stateless: Doesn't rely on or modify any external state.
Referentially transparent: Can be replaced with its output anywhere in the code without affecting the program's behavior.


3. What are the benefits of a pure function?
-Reasoning and testing: Predictable behavior due to no side effects makes debugging and testing simpler.
Concurrency: Pure functions are thread-safe, enabling easier parallelization and multi-core utilization.
Memoization: Pure functions can be memoized (cached) to improve performance.
Composition: Pure functions can be easily combined to build complex functions, enhancing modularity and code reuse.


4. What is immutability?
-Immutability refers to the concept of data being non-modifiable once created. Any changes result in a new data structure instead of altering the existing one. This promotes predictable behavior and simplifies reasoning about program state.


5. What is Referential transparency?
-Referential transparency guarantees that a function call can be replaced with its return value without affecting the program's behavior. This allows for optimizations like constant folding and function inlining.




## Videos
## Node JS Tutorial for Beginners #6 - Modules and require()

1. What is a module?
-Modules in Node.js are JavaScript files that contain independent, reusable code. They encapsulate functionality and promote modularity, organization, and code reuse.


2. What does the word ‘require’ do?
-require() is a built-in function in Node.js used to import modules into a file. It takes the module path as an argument and returns the module's exported object. This object can then be used to access the module's functionalities.


3. How do we bring another module into the file the we are working in?
-To use functions or variables defined in another module:

Syntax: const module = require('path/to/module');
Example: const math = require('./math'); imports the math module located in the current directory.


4. What do we have to do to make a module available?
-To make your module available for import by other files:

Syntax: module.exports = { ... }; or exports.function = ...;
Example: module.exports = { add, subtract }; exports the add and subtract functions.

