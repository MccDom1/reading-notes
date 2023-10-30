# Read: Class 06

The topic of problem domain, objects, and the DOM is important because it is the foundation of web development.
The problem domain is the area of knowledge that a software application addresses. In the context of web development, the problem domain is the World Wide Web.
Objects are the building blocks of web applications. Objects represent the different entities in the web domain, such as HTML elements, CSS styles, and JavaScript functions.
The DOM is the interface that JavaScript uses to interact with HTML and XML documents. The DOM represents the document as a tree of objects, with each object representing a different element in the document.
By understanding the problem domain, objects, and the DOM, web developers can create dynamic and interactive web applications.

# Readings: Problem Domain, Objects, and the DOM



JavaScript Object Basics

1.How would you describe an object to a non-technical friend you grew up with?
-To describe an object to a non-technical friend, I would use analogies and metaphors. For example, I might say that an object is like a container that holds information. Or I might say that an object is like a person, with properties like name, age, and height.


2.What are some advantages to creating object literals?
-Object literals are easy to read and write. They are a concise way to create objects with named properties.
Object literals are flexible. You can add, remove, and change properties at any time.
Object literals are efficient. The JavaScript engine can optimize object literals for performance.


3.How do objects differ from arrays?
-Objects are key-value pairs. Arrays are ordered collections of items.
Objects can have properties of any type. Arrays can only have elements of the same type.
Objects can have methods. Arrays cannot have methods.


4.Give an example for when you would need to use bracket notation to access an object’s property instead of dot notation.
-You would need to use bracket notation to access an object's property instead of dot notation if the property name is not a valid JavaScript identifier. For example, if the property name contains spaces or special characters, you would need to use bracket notation.


5.Evaluate the code below. What does the term this refer to and what is the advantage to using this?
const dog = {
  name: 'Spot',
  age: 2,
  color: 'white with black spots',
  humanAge: function (){
    console.log(`${this.name} is ${this.age*7} in human years`);
  }
}
-In the code snippet above, the term this refers to the current object. In this case, the current object is the dog object. The advantage to using this is that it allows you to access the object's properties and methods without having to explicitly pass the object as a parameter.


Introduction To The DOM

1.What is the DOM?
-The DOM, or Document Object Model, is a tree-like representation of an HTML or XML document. The DOM allows JavaScript to access and manipulate the elements of a document.


2.Briefly describe the relationship between the DOM and JavaScript.
-The relationship between the DOM and JavaScript is that JavaScript can be used to modify the DOM. For example, JavaScript can be used to create new elements, remove existing elements, and change the style of elements.