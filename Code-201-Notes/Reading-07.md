# Read: Class 07

Object-oriented programming (OOP) and HTML tables are two important topics for front-end developers.

Object-oriented programming (OOP)

OOP is a programming paradigm that uses objects and their interactions to design applications and computer programs. It is a popular paradigm for front-end development, as it allows developers to create reusable code and to model real-world objects more effectively.
HTML tables

HTML tables are a fundamental element of HTML. They are used to display data in a tabular format. Tables can be used to display a variety of data, such as product catalogs, customer lists, and financial reports.
Object-oriented programming and HTML tables are two important topics for front-end developers because they can be used to create robust, maintainable, and accessible web applications.

OOP allows developers to create reusable code and to model real-world objects more effectively. This can lead to more efficient and effective development.

HTML tables are a versatile tool for displaying data in a tabular format. They can be used to display a variety of data in a variety of ways.

By understanding these two topics, front-end developers can create better web applications.
# Readings: Object-Oriented Programming, HTML Tables


# Reading
## Domain Modeling

Explain why we need domain modeling.
-Domain modeling is the process of creating a conceptual model of a problem domain. It is a critical aspect of software development, as it helps to ensure that the software meets the needs of the users.
There are several reasons why we need domain modeling:

To better understand the problem domain. Domain modeling helps us to identify the key concepts in the problem domain and their relationships to each other. This understanding is essential for developing a solution that meets the needs of the users.
To communicate the problem domain to others. Domain modeling provides a common way to communicate about the problem domain to stakeholders, such as users, developers, and business analysts. This helps to ensure that everyone has a shared understanding of the problem and the desired solution.
To validate the solution. Domain modeling can be used to validate the proposed solution by ensuring that it is consistent with the problem domain. This helps to identify and correct any errors or omissions in the solution.


## HTML Table Basics

Why should tables not be used for page layouts?
-Tables should not be used for page layouts because they are not semantically meaningful. This means that screen readers and other assistive technologies will not be able to accurately interpret the content of the page.

In addition, tables can be difficult to maintain and update. If the layout of the page changes, the table will need to be updated accordingly. This can be time-consuming and error-prone.



List and describe 3 different semantic HTML elements used in an HTML <table>.
Introducing Constructors
-**<thead>`: Defines the header row of the table. This row is typically used to label the columns of the table.
**<tbody>`: Defines the body of the table. This is where the data in the table is displayed.
**<tfoot>`: Defines the footer of the table. This row is typically used to display summary information about the table.

What is a constructor and what are some advantages to using it?
-A constructor is a special function that is used to create and initialize new object instances. Constructors are often used to set the initial values of the object's properties.

There are several advantages to using constructors:

Constructors can be used to ensure that objects are always created in a consistent state. For example, a constructor can be used to ensure that an object's required properties are always initialized.
Constructors can be used to hide the implementation details of object creation from the client code. This makes the code more modular and reusable.
Constructors can be used to implement inheritance. For example, a child class can inherit the constructor of its parent class.


How does the term this differ when used in an object literal versus when used in a constructor?
-The this keyword refers to the current object instance. When used in an object literal, the this keyword refers to the global object (e.g., window in a browser environment). When used in a constructor, the this keyword refers to the newly created object instance.

## Object Prototypes Using A Constructor

Explain prototypes and inheritance via an analogy from your previous work experience.
NOTE: This is a very common front end developer interview question
- Prototypes are used to implement inheritance in JavaScript. Every object in JavaScript has a prototype, which is another object that it inherits properties and methods from.

When a constructor is called, it creates a new object instance and sets the prototype of the new object instance to the constructor's prototype property. This allows the new object instance to inherit the properties and methods of the constructor.

Imagine you are baking a cake. You can start by making a basic cake batter, which is the prototype. Once you have made the basic cake batter, you can inherit from it to create new cakes. For example, you can inherit from the basic cake batter to make a chocolate cake, a vanilla cake, or a strawberry cake.

In the same way, prototypes and inheritance can be used to create new objects in JavaScript. You can start by creating a prototype object, which is the base object. Once you have created the prototype object, you can inherit from it to create new objects. For example, you can inherit from the prototype object to create a new user object, a new product object, or a new order object.
