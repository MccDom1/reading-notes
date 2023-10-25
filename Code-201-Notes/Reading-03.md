Readings 03: HTML Lists, Control Flow with JS, and the CSS Box Model

Overall, HTML lists, control flow with JavaScript, and the CSS box model are all important topics for web developers to learn. These topics are essential for creating readable, user-friendly, and interactive web pages.
HTML lists, control flow with JavaScript, and the CSS box model are all important topics in web development.

HTML lists are used to organize and display content in a logical way. They can be used to create bulleted lists, numbered lists, and definition lists. HTML lists are essential for creating readable and user-friendly web pages.

Control flow in JavaScript allows you to control the order in which code is executed. This is done using conditional statements and loops. Conditional statements allow you to execute different code blocks based on the value of a condition. Loops allow you to execute a code block multiple times. Control flow is essential for creating dynamic and interactive web applications.

The CSS box model is a model for describing how HTML elements are laid out on a web page. The box model consists of four parts: content, padding, border, and margin. The CSS box model allows you to control the spacing and positioning of HTML elements on a web page.

Learn HTML
Ordered and Unordered lists.

1.When should you use an unordered list in your HTML document?
-You should use an unordered list when you want to list items in no particular order. For example, you might use an unordered list to list ingredients in a recipe, steps in a procedure, or features of a product.



2.How do you change the bullet style of unordered list items?
-You can change the bullet style of unordered list items using CSS. For example, the following CSS code would change the bullet style to a square

3.When should you use an ordered list vs an unorder list in your HTML document?
-You should use an ordered list when you want to list items in a specific order. For example, you might use an ordered list to list steps in a tutorial, numbered items in a list of products, or items in a timeline.



4.Describe two ways you can change the numbers on list items provided by an ordered list?
-You can use the start attribute. The start attribute tells the browser where to start numbering the list items. For example, the following HTML code would start numbering the list items at 5

-You can use CSS to change the style of the list item numbers. For example, the following CSS code would change the list item numbers to roman numerals

Learn CSS
The Box Model.

1.Describe the CSS properties of margin and padding as characters in a story. What is their role in a story titled: “The Box Model”?
-Margin: The margin property specifies the amount of space around the outside of an element.
Padding: The padding property specifies the amount of space around the inside of an element.
Margin and padding in the Box Model story:

Imagine that the box model is a story about a house. The content of the element is the furniture inside the house. The padding is the carpet or rug on the floor. The border is the walls of the house. The margin is the yard around the house.

The margin and padding properties allow you to control the spacing of the furniture, carpet, walls, and yard in the house.

2.List and describe the four parts of an HTML elements box as referred to by the box model.
-Content
Padding
Border
Margin

Learn JS
Arrays. Operators and Expressions. Conditionals. Loops.

1.What data types can you store inside of an Array?
-You can store any data type inside of a JavaScript array. This includes strings, numbers, booleans, objects, and other arrays.

2.Is the people array a valid JavaScript array? If so, how can I access the values stored? If not, why?
-Yes, the people array is a valid JavaScript array.
-You can access the values stored in the people array using the following syntax:

JavaScript
people[0]; // This will return the value at index 0, which is ['pete', 32, 'librarian', null]
people[1]; // This will return the value at index 1, which is ['Smith', 40, 'accountant', 'fishing:hiking:rock_climbing']
people[2]; // This will return the value at index 2, which is ['bill', null, 'artist', null


 const people = [['pete', 32, 'librarian', null], ['Smith', 40, 'accountant', 'fishing:hiking:rock_climbing'], ['bill', null, 'artist', null]];

3.List five shorthand operators for assignment in javascript and describe what they do.
-Operator	Description
+=	Adds the value on the right to the variable on the left. For example: a += 1; is equivalent to a = a + 1;
-=	Subtracts the value on the right from the variable on the left. For example: a -= 1; is equivalent to a = a - 1;
*=	Multiplies the value on the right by the variable on the left. For example: a *= 1; is equivalent to a = a * 1;
/=	Divides the variable on the left by the value on the right. For example: a /= 1; is equivalent to a = a / 1;
%=	Modulus operator. Returns the remainder of the division of the variable on the left by the value on the right. For example: a %= 1; is equivalent to a = a % 1;

4.Read the code below and evaluate the last expression and explain what the result would be and why.

 let a = 10;
 let b = 'dog';
 let c = false;

 // evaluate this
 (a + c) + b;
 
 -The last expression in the code you provided is:

(a + c) + b
This expression will be evaluated in the following order:

The a and c variables will be added together.
The result of the addition will be concatenated with the b variable.
Since the c variable is of type boolean, the addition of a and c will be coerced to a string. The + operator will then concatenate the string result with the b variable.

Therefore, the result of the expression will be the string "10false", since the + operator will concatenate the two strings without any spaces.


5.Describe a real world example of when a conditional statement should be used in a JavaScript program.
-Conditional statements are used to control the flow of a JavaScript program. They allow you to execute different code blocks depending on the value of a condition.

A real world example of when a conditional statement should be used in a JavaScript program is to validate a form before submitting it. For example, you could use a conditional statement to check if all of the required fields have been filled in, and if the email address is in a valid format. If any of the conditions are not met, you could display an error message to the user and prevent them from submitting the form.

6.Give an example of when a Loop is useful in JavaScript.
-Loops are useful in JavaScript when you need to perform a task multiple times. For example, if you need to iterate over an array of elements, or if you need to repeat a code block until a certain condition is met.

file:///Users/dm/Pictures/Photos%20Library.photoslibrary/resources/renders/F/F78165EA-2237-4F3F-846C-029C1452629F_1_201_a.jpeg