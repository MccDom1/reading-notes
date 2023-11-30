# Read: Class 04
Forms are a fundamental building block of any interactive web application, allowing users to input data and interact with the application. In React, forms are treated as components, enabling developers to create reusable and maintainable form elements.
Overall, forms are essential components in React applications, enabling user input and interaction. Controlled components provide a structured approach to managing form data, while uncontrolled components offer simplicity for basic forms. Updating state with user input ensures real-time feedback and validation. Ternary operators provide a concise way to express simple conditional statements, enhancing code readability and maintainability.

## Reading React and Forms

### How to use Forms in React

1. What is a ‘Controlled Component’?

-n React, a controlled component is a form component that maintains its own state, which means that the component manages the value of its input fields. This is in contrast to an uncontrolled component, which does not manage its own state and instead relies on the form's state.


2. Should we wait to store the users responses from the form into state when they submit the form OR should we update the state with their responses as soon as they enter them? Why.

-It is generally recommended to update the state with the user's responses as soon as they enter them. This is because it allows the component to react to changes in the user's input and provide immediate feedback. Additionally, it can make it easier to handle form validation, as the component can check the validity of the user's input as they enter it.


3. How do we target what the user is entering if we have an event handler on an input field?
-When you have an event handler on an input field, you can access the value of the input field using the event.target.value property.

### The Conditional (Ternary) Operator Explained

1. Why would we use a ternary operator?
-Ternary operators are often used to simplify conditional expressions that would otherwise require an if statement. They can make the code more concise and readable.


2. Rewrite the following statement using a ternary statement:
if(x===y){
  console.log(true);
} else {
  console.log(false);
}


-        console.log(x === y ? true : false);