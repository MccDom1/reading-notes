# Read: Class 03

Understanding how to use lists and keys, the spread operator, and passing functions between components is important for building dynamic and efficient React applications.

Lists and Keys
Lists are a fundamental building block of user interfaces, and React provides a declarative way to render lists using JSX. Keys play a crucial role in optimizing list rendering performance, especially when dealing with large datasets. By assigning unique keys to each list item, React can efficiently track and update the list when data changes, avoiding unnecessary re-renders.

Spread Operator
The spread operator is a versatile tool for manipulating arrays and objects. It allows you to combine multiple arrays, add items to arrays, create new objects from existing ones, and spread arguments to functions. This concise syntax simplifies code and enhances readability.

Passing Functions Between Components
Passing functions between components is essential for creating interactive and responsive user interfaces. By passing functions as props, you can establish communication and data flow between components, enabling them to react to user actions and update their state accordingly. This pattern promotes modularity and reusability in React applications.







## Reading
### React Docs - lists and keys)

1.What does .map() return?
-The .map() method returns a new array with the results of calling a function for each element in the original array.




2.If I want to loop through an array and display each value in JSX, how do I do that in React?
-To loop through an array and display each value in JSX in React, you can use the .map() method to create an array of JSX elements and then return that array.




3.Each list item needs a unique ____.
-Each list item needs a unique key to help React identify and efficiently update the list when data changes.




4.What is the purpose of a key?
-The purpose of a key is to provide a unique identifier for each list item, allowing React to efficiently track and update the list when data changes.


### The Spread Operator

1.What is the spread operator?
-The spread operator is a concise way to expand iterable objects, such as arrays and objects.


2.List 4 things that the spread operator can do.
-Combine arrays: Merge two or more arrays into a single array.
Add items to arrays: Add new elements to an existing array.
Spread objects: Create a new object with the properties of another object and any additional properties.
Pass arguments: Expand an iterable object as arguments to a function.



3.Give an example of using the spread operator to combine two arrays.
-const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]



4.Give an example of using the spread operator to add a new item to an array.
-const arr = [1, 2, 3];
const newArr = [...arr, 4]; // [1, 2, 3, 4]


Give an example of using the spread operator to combine two objects into one.
-const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }

With reference from Chatgpt.

### Videos

1.How to Pass Functions Between Components
-The first step to pass functions between components is to define the function in the parent component

2.In the video, what is the first step that the developer does to pass functions between components?
- He defined two componets the first one being the Parent then the child then he clicked a Button to invoke a function on the child component. And then proceeded to do the inverse.

3.In your own words, what does the handleClick function do?
-The handleClick function is an event handler that triggers when the button is clicked.


4.How can you pass a method from a parent component into a child component?
-To pass a method from a parent component into a child component, you can include it as a prop in the child component's JSX tag.


5.How does the child component invoke a method that was passed to it from a parent component?
-The child component can invoke a method that was passed to it from a parent component by accessing the prop and calling it like a regular function.
