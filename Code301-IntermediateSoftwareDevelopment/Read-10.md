# Read: Class 10

# WHY IS THIS IMPORTANT ?
1. Debugging and problem-solving: Knowing how the call stack works helps you identify the root cause of errors in your code. By analyzing the call stack, you can trace the execution flow and pinpoint where things went wrong.
2. Writing efficient code: The call stack has limitations in depth, so understanding it helps you write code that minimizes the number of nested function calls, preventing stack overflows and ensuring optimal performance.
3. Understanding asynchronous code: Asynchronous code introduces new dimensions to the call stack, and understanding how functions are queued and executed in the context of the stack is crucial for writing complex and responsive applications.
4. Building advanced features: Features like recursion and error handling rely heavily on the call stack. Grasping its behavior empowers you to implement these functionalities effectively.


## Understanding the JavaScript Call Stack


1. **What is a ‘call’?** 
- Used for function invocation.n the context of programming and the call stack, a ‘call’ refers to the invocation or execution of a function. When a function is called, it gets added to the call stack, and its execution begins
2. **How many ‘calls’ can happen at once?** 
- One at a time, from top to bottom. In a single-threaded JavaScript environment with a single call stack, only one function call can happen at a time. The call stack processes function calls in a synchronous manner, executing them one after another.
3. **What does LIFO mean?** 
- Last In, First Out t’s a principle used in data structures, and in the context of the call stack, it means that the last function added to the stack is the first one to be executed and removed. The call stack follows the LIFO order in managing function invocations.
4. **Draw an example of a call stack and the functions that would need to be invoked to generate that call stack.**
-

    function firstFunction(){
                 throw new Error('Stack Trace Error');
                 }
                 function secondFunction(){
                 firstFunction();
                 }
                 function thirdFunction(){
                 secondFunction();
                 }
                 thirdFunction();

5. **What causes a Stack Overflow?** 
- When a recursive function (function that calls itself) without an exit point.he function keeps calling itself, and each call adds a new stack frame to the call stack. Eventually, the stack reaches its maximum capacity, leading to a “Maximum call size exceeded” error
## JavaScript error messages
1. **What is a ‘reference error’?** 
- When you use a variable that is not declared yet.
2. **What is a ‘syntax error’?** 
- This can be a spelling error, or someting that cannot be parsed in terms of syntax.
3. **What is a ‘range error’?** 
- When you manipulat a object with some kind of length and give it an invalid length.
4. **What is a ‘type error’?** 
- When you try to do something that is not allowed. For example, trying to add a string to a number.
5. **What is a breakpoint?** 
- A ‘breakpoint’ is a specified point in your code where the debugger should pause execution, allowing you to inspect the current state of your program and analyze variables, expressions, and the call stack.A place where you can stop your code and look at it, intended for debugging.
6. **What does the word ‘debugger’ do in your code?** 
- The Word and or term ‘debugger’ refers to a tool or functionality used to identify and fix errors (bugs) in your code. In the provided context, it seems to be referring to the usage of debugger statements in the code. When the JavaScript interpreter encounters a debugger statement, it pauses execution, allowing developers to inspect the code, variables, and the call stack at that point. This aids in the debugging process by providing a way to interactively analyze the program’s state.Puts a statement in your line of code you want to break.