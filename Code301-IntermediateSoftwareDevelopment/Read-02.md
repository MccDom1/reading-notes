# Read: Class 02

understanding the lifecycle of React components and the difference between props and state is essential for building maintainable, performant, and error-free React applications. By mastering these concepts, developers can write more efficient and reusable React components that can handle complex data and user interactions effectively.
In essence, comprehending the lifecycle of React components and the difference between props and state is indispensable for crafting maintainable, efficient, and error-free React applications. By mastering these concepts, developers can craft more effective and reusable React components capable of handling complex data and user interactions seamlessly.


## Reading
### React lifecycle

1.Based off the diagram, what happens first, the ‘render’ or the ‘componentDidMount’?
-The render method is called first, and it is responsible for returning the JSX that represents the component's UI. The componentDidMount method is called after the component has been inserted into the DOM, and it is a good place to perform any initialization tasks, such as fetching data or setting up event listeners.


2.What is the very first thing to happen in the lifecycle of React?
-The very first thing to happen in the lifecycle of React is that the constructor method is called. The constructor method is used to initialize the component's state and props.


3.Put the following things in the order that they happen: componentDidMount, render, constructor, componentWillUnmount, React Updates
What does componentDidMount do?
-Constructor
Render
ComponentDidMount
React Updates
ComponentWillUnmount

### Videos
## React State Vs Props
State is data that is specific to a particular component and can change over time.
Props are data that is passed down from parent components to child components. Props are immutable, which means that they cannot be changed by the child component.
1.What types of things can you pass in the props?
-You can pass in any type of data into props, including:

Primitive types (e.g., numbers, strings, booleans)
Objects
Arrays
Functions


2.What is the big difference between props and state?
-The big difference between props and state is that props are immutable, while state is mutable. This means that props cannot be changed by the child component, while state can be changed by the component itself.


3.When do we re-render our application?
-A React application will re-render whenever its state or props change. This means that if you update the state of a component, all of its child components will also be re-rendered.


4.What are some examples of things that we could store in state?
-Some examples of things that you could store in state include:

User input (e.g., the value of a form input)
Data fetched from an API
The current state of a game