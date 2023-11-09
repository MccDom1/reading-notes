# Class 10

Debugging is important because it allows software engineers and developers to fix errors in a program before releasing it to the public. Errors, or bugs, can cause a program to malfunction, and can lead to poor performance, incorrect results, or even security vulnerabilities. Debugging can be a time-consuming and complex task, but it is essential for ensuring that a software system is functioning correctly.

There are many reasons why debugging is important, including:

To improve the quality of software. Debugging helps to identify and fix errors in a program before it is released to users. This can help to improve the overall quality of the software, making it more reliable, efficient, and user-friendly.
To reduce the risk of security vulnerabilities. Bugs can sometimes be exploited by attackers to gain access to computer systems or data. Debugging can help to identify and fix these vulnerabilities before they can be exploited.
To improve the user experience. Software that is full of bugs can be frustrating and difficult to use. Debugging can help to improve the user experience by making software more reliable and predictable.
To save time and money. Fixing bugs after a program has been released can be expensive and time-consuming. Debugging can help to reduce these costs by identifying and fixing errors early on.
Debugging is also important for software developers themselves. By debugging their code, developers can learn from their mistakes and become better programmers. Debugging can also help developers to better understand their code and how it works.

Overall, debugging is an essential part of the software development process. It helps to improve the quality, security, and reliability of software, and it can also save time and money.



## Readings: Debugging

### What Went Wrong? Troubleshooting JavaScript.

1.Name some key differences between a Syntax Error and a Logic Error.
-Characteristic	Syntax Error	Logic Error
Definition	An error that occurs when the code does not follow the JavaScript syntax rules.	An error that occurs when the code is syntactically correct, but the logic of the code is flawed.
Behavior	Prevents the program from running.	The program runs, but produces incorrect or unexpected results.
Debug process	Can be identified by reading the error message produced by the JavaScript engine.	More difficult to identify, as the program is still able to run. Requires the developer to step through the code and identify the logical error.



2.List a few types of errors that you have encountered in past lab assignments and explain how you were able to correct them.
-Syntax errors: Syntax errors are relatively easy to identify and correct, as the JavaScript engine will produce a detailed error message. For example, if I forget to include a semicolon at the end of a statement, the JavaScript engine will throw a syntax error. To correct this error, I simply need to add the semicolon to the end of the statement.
Logical errors: Logical errors can be more difficult to identify and correct, as the program is still able to run. For example, I might write a function to calculate the area of a rectangle, but I accidentally transpose the length and width values. The function will still run, but it will produce incorrect results. To identify and correct this error, I need to step through the code and identify the logical error. I can do this using a debugger tool, or by using console.log() statements to output the values of variables at different points in the code.



3.How will this topic continue to influence your long term goals?
-Debugging is an essential skill for any software developer. By learning how to debug effectively, I can improve the quality and reliability of my code. This will help me to achieve my long-term goals of becoming a successful software developer and creating high-quality software products.



### The JavaScript Debugger.

1.How would you describe the JavaScript Debugger tool and how it works to someone just starting out in software development?
-The JavaScript Debugger tool is a built-in tool in most web browsers that allows developers to step through their code line by line, inspect the values of variables, and set breakpoints. Breakpoints are points in the code where the debugger will stop execution and allow the developer to inspect the state of the program.

The JavaScript Debugger tool is a very powerful tool for troubleshooting JavaScript errors. It can be used to identify and correct both syntax errors and logic errors.


2.Define what a breakpoint is.
-A breakpoint is a point in the code where the debugger will stop execution and allow the developer to inspect the state of the program. Breakpoints can be set at any line of code, and can be toggled on and off.

To set a breakpoint in the JavaScript Debugger tool, simply click on the line of code where you want to set the breakpoint. The line of code will turn red to indicate that a breakpoint has been set.

To toggle a breakpoint on and off, simply click on the red line of code.




3.What is the call stack?
-The call stack is a stack that stores information about the current function calls. The call stack is used to keep track of where the debugger is in the code, and to allow the debugger to return to the previous function call when the current function call completes.

The call stack can be viewed in the JavaScript Debugger tool. This can be helpful for debugging errors that occur in nested function calls.

