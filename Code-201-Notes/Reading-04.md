Clas 04
HTML Links, JS Functions, and Intro to CSS Layout



HTML links, JavaScript functions, and CSS layout are three fundamental topics in web development. They are essential for creating dynamic and interactive web pages.

HTML links allow users to navigate between different web pages or resources. They are created using the <a> element. 
JavaScript functions are reusable blocks of code that can be used to perform specific tasks. They are created using the function keyword. 
CSS layout is used to control the position and appearance of elements on a web page. CSS layout is defined using the CSS style sheet language.
Overall, HTML links, JavaScript functions, and CSS layout are three essential topics for web developers to know. By mastering these topics, you can create dynamic and interactive web pages that will engage your users and provide them with a positive experience.



Learn HTML
Creating Hyperlinks

1.To create a basic link, we wrap text or other content inside what element?
-
To create a basic link, we wrap the text or other content we want to link inside an <a> element. The href attribute specifies the URL of the resource that the link should point to.



2.The href attribute contains what information?
-The href attribute contains the URL of the resource that the link should point to. It can be a relative URL, which is a path to a file or resource on the same website, or an absolute URL, which is the full URL of a website or resource.

Here are some examples of href values:

https://www.google.com/ (absolute URL)
/about-me.html (relative URL)
mailto:example@email.com (email address)
tel:+1-555-555-5555 (phone number)
The href attribute is required for all links. Without it, the link will not work.

3.What are some ways we can ensure links on our pages are accessible to all readers?
-Use descriptive link text. Avoid using link text like "Click here" or "Learn more." Instead, use text that describes the content that the link points to. For example, instead of "Click here to read more about our products," you could use "Read more about our products."
Use a title attribute. The title attribute provides additional information about the link. This information is read aloud by screen readers, so it is important to use descriptive text. For example, the following link would have a title attribute of "Google homepage":
Avoid using images as links. If you must use an image as a link, be sure to include a text alternative (alt text) attribute. The alt text attribute provides a description of the image for screen reader users.
Use consistent link styling. Use the same CSS styling for all of the links on your page. This will make it easier for users to identify links.
Make sure that links are visible and have enough space around them. Links should be large enough to be easily clicked on, and they should have enough space around them so that users can easily hover over them and see the link text.

CSS Layout
CSS Layout: Normal Flow CSS Layout: Positioning

1.What is meant by “normal flow”?
-The normal flow is the way that HTML elements are displayed on a page by default. Elements are stacked on top of each other in the order they appear in the HTML code, with block-level elements taking up the full width of the container and inline elements flowing around them.

2.What are a few differences between block-level and inline elements?
-Block-level elements

Block-level elements are elements that take up the full width of the container and start on a new line. Some examples of block-level elements include:

div
header
main
footer
p
h1
ul
ol
Inline elements

Inline elements are elements that flow around other elements on the page and do not take up the full width of the container. Some examples of inline elements include:

span
a
img
strong
em


3.___ positioning is the default for every html element.
-Static positioning means that the element will be displayed in the normal flow, just like any other element. It will be positioned relative to its parent element and will take up the full width of its container.

4.Name a few advantages to using absolute positioning on an element.
-Absolute positioning allows you to position an element anywhere on the page, regardless of the normal flow. This can be useful for creating elements that are fixed in place, such as a navigation bar or a header, or for crea

5.What is a key difference between fixed positioning and absolute positioning?
-Fixed positioning is similar to absolute positioning, but there is one key difference: fixed elements are positioned relative to the browser window, while absolute elements are positioned relative to their parent element. This means that fixed elements will stay in place even if the user scrolls the page.


Learn JS
Functions – Reusable Blocks of Code

1.Describe the difference between a function declaration and a function invocation.
-A function declaration is a statement that defines a new function. It includes the function name, the function parameters, and the function body.
A function invocation is a statement that calls a function. It includes the function name and any arguments that need to be passed to the function.

2.What is the difference between a parameter and an argument?
-A parameter is a variable that is defined in a function declaration. An argument is a value that is passed to a function when it is invoked.

In the greet() function example above, the parameter is name and the argument is "Bard".

When a function is invoked, the arguments are passed to the function parameters and the function body is executed.


Miscellaneous
6 Reasons for Pair Programming

Pick 2 benefits to pair programming and reflect on how these benefits could help you on your coding journey.

-Improved code quality: When you pair program with a more experienced programmer, they can help you to catch errors and write better code. They can also teach you new coding techniques and best practices. This can help you to improve your coding skills and write higher quality code.

Shared knowledge: Pair programming is a great way to learn from other programmers. When you pair program, you can share your knowledge with your partner and learn from their knowledge as well. This can help you to learn new things and expand your coding skills.
Overall, pair programming is a great way to improve your coding skills, learn new things, and write higher quality code.