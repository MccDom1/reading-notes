# Read: Class 05

Higher-order functions (HOFs) are a powerful tool in React, enabling developers to create more modular, reusable, and expressive code. They play a crucial role in component composition, state management, and asynchronous programming, making them essential for building well-structured and maintainable React applications.

## Readings: Putting it all together

## React Docs - Thinking in React

1.What is the single responsibility principle and how does it apply to components?
-The single responsibility principle (SRP) states that every software module should have only one reason to change. This principle applies to components as well. Each component should have a single, well-defined responsibility, and it should not be responsible for too much or too little.

This means that each component should be focused on a specific task or functionality, and it should not be concerned with other tasks or concerns. 


2.What does it mean to build a ‘static’ version of your application?
-A static application is a website that has been pre-rendered and does not require any additional processing or code execution to be displayed. This means that the entire HTML, CSS, and JavaScript code for the website is already generated and embedded in the static files, and the browser does not need to make any additional requests to the server to render the page.

Static applications are typically faster and more performant than dynamic applications, as they do not require any additional server-side processing. They are also more scalable, as they can be easily distributed and cached on multiple servers.

3.Once you have a static application, what do you need to add?
-Once you have a static application, you typically need to add a way to deploy and serve the static files to users. This can be done using a variety of methods, such as:

Hosting the static files on a web server, such as Apache or Nginx
Using a content delivery network (CDN) to distribute the files globally
Deploying the files to a cloud storage service, such as Amazon S3 or Google Cloud Storage
You may also need to add additional features to your static application, such as:

Client-side routing to handle navigation between different pages
JavaScript libraries or frameworks to add interactivity and dynamic behavior
Server-side APIs to handle user authentication, data persistence, and other backend tasks



4.What are the three questions you can ask to determine if something is state?
-The three questions you can ask to determine if something is state are:

Does it change over time?
Is it specific to a particular instance or component?
Is it used to derive other data?
If the answer to all three of these questions is yes, then the thing is likely state.


5.How can you identify where state needs to live?
-Granularity: State should be stored as close as possible to the code that needs to use it. This makes it easier to manage and update the state.
Reuse: If state is needed by multiple components, it should be stored in a higher-level component or in a shared state management system.
Performance: If state is updated frequently, it may be more performant to store it in a React state management library, such as Redux or MobX.
Ultimately, the decision of where to store state is a trade-off between granularity, reuse, and performance.

Sources



## Higher-Order Functions

1.What is a “higher-order function”?
-A higher-order function is a function that takes other functions as arguments or returns a function as its result. This means that higher-order functions can operate on functions in the same way that they can operate on other data types, such as numbers or strings.

Higher-order functions are a powerful tool for abstraction in programming. They allow us to write generic code that can be reused in a variety of different situations. They also make it easier to write code that is expressive and easy to understand.



2.Explore the greaterThan function as defined in the reading. In your own words, what is line 2 of this function doing?
-Line 2 of the greaterThan function is defining a new function that takes two arguments, x and y, and returns a boolean value indicating whether x is greater than y. This new function is then returned as the result of the greaterThan function.





3.Explain how either map or reduce operates, with regards to higher-order functions.
-The map function is a higher-order function that takes an array and a function as arguments and returns a new array of the same length. The function is applied to each element of the original array, and the results are stored in the new array.