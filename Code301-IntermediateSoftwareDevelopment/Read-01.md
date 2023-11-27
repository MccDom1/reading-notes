# Read: Class 01
# Introduction to React and Components


Component-based architecture and props are essential concepts in React for building maintainable, reusable, and testable applications.
Overall, component-based architecture and props are key features of React that contribute to building maintainable, reusable, and testable user interfaces. These concepts enable developers to create complex applications with a clear structure, efficient code reuse, and simplified debugging.


## Component-Based Architecture

1. What is a “component”?
-A component is a fundamental building block of a React application. It is a reusable piece of UI that encapsulates its own data and logic. Components can be nested within other components to create complex UIs.

2. What are the characteristics of a component?
-Reusable: A component can be reused multiple times throughout an application.
Encapsulated: A component encapsulates its own data and logic, hiding it from other components.
Self-contained: A component is responsible for rendering its own UI.
Testable: A component can be easily tested because it is isolated from other components.


3. What are the advantages of using component-based architecture?
-Modular code: Component-based architecture makes code more modular and easier to understand.
Reusability: Components can be reused multiple times throughout an application, which saves time and code.
Maintainability: Component-based architecture makes code more maintainable because components are isolated from each other.
Testability: Components can be easily tested because they are isolated from other components.

## What is Props and How to Use it in React


1. What is “props” short for?
-"Props" is short for "properties". Props are read-only properties that child components receive from their parent components.

2. How are props used in React?
-Props are used to pass data from parent components to child components. Child components can use the data they receive from their parents to render their UI elements and handle user interactions.

3. What is the flow of props?
-The flow of props is unidirectional, meaning that data flows from parent components to child components. Props are passed down through the component tree, and child components cannot modify the props they receive.