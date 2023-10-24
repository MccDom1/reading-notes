# Basics of HTML, CSS & JS
                           
Food for thought HTML, CSS, and JavaScript are the three core technologies of the web. HTML is used to structure the content of a web page, CSS is used to style the content, and JavaScript is used to add interactivity to the page.

These topics matter because they are essential for building any kind of website, from a simple blog to a complex e-commerce platform. Even if you are not planning to become a professional web developer, learning the basics of HTML, CSS, and JavaScript will give you a better understanding of how the web works and how to create your own web pages.                     
                           
                           
                           ## HTML Text Fundamentals. HTML Advanced Text Formatting.

1.Why is it important to use semantic elements in our HTML?
- Using semantic elements in HTML is important for a few reasons:

Accessibility: Semantic elements help screen readers and other assistive technologies to understand the structure and content of a web page. This makes it easier for people with disabilities to navigate and understand web pages.
SEO: Search engines use semantic elements to index and rank web pages. By using semantic elements, you can help your website to rank higher in search engine results pages (SERPs).
Maintainability: Semantic elements make it easier to understand and maintain HTML code. When you use semantic elements, the code is more self-documenting and easier to read and understand.

2.How many levels of headings are there in HTML?
-There are six levels of headings in HTML: <h1> through <h6>. Headings are used to structure the content of a web page and to indicate the importance of different sections of the page.

3.What are some uses for the <sup> and <sub> elements?
-The <sup> element is used to display superscript text, which is text that is raised above the baseline of the surrounding text. Superscript text is often used to denote footnotes, citations, and other annotations.

The <sub> element is used to display subscript text, which is text that is lowered below the baseline of the surrounding text. Subscript text is often used to denote chemical formulas, mathematical expressions, and other technical terms.

4.When using the <abbr> element, what attribute must be added to provide the full expansion of the term?
-The title attribute must be added to the <abbr> element to provide the full expansion of the term. For example, the following code would display the word "Laser" with the full expansion "Light Amplification by Stimulated Emission of Radiation
It is important to use the title attribute to provide the full expansion of the term so that users can understand the meaning of the abbreviation, even if they are not familiar with it.

                               ##How CSS Is Structured.

 1.What are ways we can apply CSS to our HTML?
-Inline styles: Inline styles are applied directly to an HTML element using the style attribute. 
-nternal styles: Internal styles are placed inside a <style> element in the <head> section of the HTML document.
-External styles: External styles are placed in a separate CSS file and then linked to the HTML document using the <link> element in the <head> section of the HTML document.

2.Why should we avoid using inline styles?
-Inline styles should be avoided because they make it difficult to maintain and scale CSS code. When using inline styles, it is easy to create duplicate styles and to forget to update styles when they change. This can lead to inconsistencies in the appearance of a web page and can make it difficult to troubleshoot problems.

3.Review the block of code below and answer the following questions:
CSS
h2 {
  color: black;
  padding: 5px;
}
1.What is representing the selector?
-The selector in the above code is the h2 element. This means that the CSS declarations will be applied to all h2 elements on the web page.

2.Which components are the CSS declarations?
-The CSS declarations in the above code are color: black; and padding: 5px;. These declarations tell the browser to set the color of all h2 elements to black and to add 5px of padding to all sides of all h2 elements.

3.Which components are considered properties?                              
-The CSS properties in the above code are color and padding. CSS properties are the attributes that can be styled. For example, the color property can be used to set the color of an element, and the padding property can be used to add padding to an element.

                                  Learn JS

1.What data type is a sequence of text enclosed in single quote marks?
-A sequence of text enclosed in single quote marks is a string data type in JavaScript. Strings are used to represent text data, such as words, phrases, and sentences.

2.List 4 types of JavaScript operators.
-Arithmetic operators: These operators are used to perform mathematical operations on numbers. Some examples of arithmetic operators include +, -, *, /, and %.
Comparison operators: These operators are used to compare two values and return a Boolean value (true or false). Some examples of comparison operators include ==, !=, >, <, >=, and <=.
Logical operators: These operators are used to combine two or more Boolean values into a single Boolean value. Some examples of logical operators include &&, ||, and !.
Assignment operators: These operators are used to assign a value to a variable. Some examples of assignment operators include =, +=, -=, *=, /=, and %=.

3.Describe a real world Problem you could solve with a Function.
-Calculate the shipping cost for an order.
function calculateShippingCost(orderWeight, shippingDistance) {
  // Calculate the base shipping cost based on the order weight and shipping distance.
  let baseShippingCost = orderWeight * shippingDistance;

  // Apply a discount to the shipping cost if the order is over a certain amount.
  if (orderWeight > 100) {
    baseShippingCost *= 0.9;
  }

  // Return the shipping cost.
  return baseShippingCost;
}

This function can be used to calculate the shipping cost for any order, regardless of the order weight or shipping distance. This makes it a very reusable and efficient solution.

Functions can be used to solve a wide variety of real-world problems. For example, functions can be used to:

Validate form data
Calculate taxes
Send emails
Display data in a chart or graph
Perform complex mathematical operations
Functions are one of the most powerful tools in JavaScript. By learning how to use functions, you can write more efficient and reusable code.
  - Question 3 referenced from AI chatbot (Google Bard) In which was also utilzied for a better understanding.


1.An if statement checks a __ and if it evaluates to ___, then the code block will execute.
-An if statement checks a condition and if it evaluates to true, then the code block will execute.

2.What is the use of an else if?
-An else if statement is used to check multiple conditions. If the first condition evaluates to false, the second condition is checked. If the second condition evaluates to false, the third condition is checked, and so on. If any of the conditions evaluate to true, the corresponding code block is executed. If none of the conditions evaluate to true, the else block is executed.

3.List 3 different types of comparison operators.
-Equality operators: These operators are used to compare two values and return a Boolean value (true or false) depending on whether the values are equal. The equality operators are == and ===.
Inequality operators: These operators are used to compare two values and return a Boolean value (true or false) depending on whether the values are not equal. The inequality operators are != and !==.
Relational operators: These operators are used to compare two values and return a Boolean value (true or false) depending on the relationship between the values. The relational operators are <, >, <=, and >=.


4.What is the difference between the logical operator && and ||?
-The logical operator && (and) returns true if both of its operands are true. It returns false otherwise.

The logical operator || (or) returns true if either of its operands is true. It returns false only if both of its operands are false.




























