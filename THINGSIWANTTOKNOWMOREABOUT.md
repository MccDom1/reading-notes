

# THINGS I WANT TO KNOW


Semantics
In programming, Semantics refers to the meaning of a piece of code — for example "what effect does running that line of JavaScript have?", or "what purpose or role does that HTML element have" (rather than "what does it look like?".)

Paragraph 1. (semantics)
One thing i would truly like to know is its origins.


# READIN01
Notes to self for understanding
Describe how HTML, CSS, and JS files are “parsed” in the browser.

When a web browser loads a web page, it needs to parse the HTML, CSS, and JavaScript files in order to render the page correctly. Parsing is the process of breaking down the code into smaller pieces that the browser can understand.
HTML parsing:

The browser starts by parsing the HTML file. This involves identifying the different elements in the HTML code, such as div, p, and img. The browser also needs to understand the relationships between the different elements. For example, the browser needs to know that the img element is a child of the div element.

Once the browser has parsed the HTML code, it can start to build the Document Object Model (DOM). The DOM is a tree-like structure that represents the content of the web page. Each element in the HTML code corresponds to a node in the DOM.

CSS parsing:

Once the browser has parsed the HTML code and built the DOM, it can start to parse the CSS files. The CSS files contain the styling information for the web page. The browser uses this information to determine how to render the different elements in the DOM.

The browser starts by parsing the CSS files line by line. It identifies the different CSS selectors and properties, and it builds a CSS Object Model (CSSOM). The CSSOM is a data structure that represents the styling information for the web page.

JavaScript parsing:

Once the browser has parsed the HTML and CSS files, it can start to parse the JavaScript files. JavaScript is a programming language that can be used to add interactivity to web pages.

The browser parses the JavaScript files line by line. It identifies the different JavaScript statements and expressions, and it builds a JavaScript Object Model (JSOM). The JSOM is a data structure that represents the JavaScript code for the web page.

Once the browser has parsed the HTML, CSS, and JavaScript files, it can start to render the web page. This involves using the DOM, CSSOM, and JSOM to determine how to display the content of the web page.


HTML parsing:

The browser starts by parsing the HTML file. This involves identifying the different elements in the HTML code, such as div, p, and img. The browser also needs to understand the relationships between the different elements. For example, the browser needs to know that the img element is a child of the div element.

Once the browser has parsed the HTML code, it can start to build the Document Object Model (DOM). The DOM is a tree-like structure that represents the content of the web page. Each element in the HTML code corresponds to a node in the DOM.







# READING 02       Basics of HTML, CSS & JS
One thing that stood out to me in this module was the else if function. here is a note for self simply defining its nature and use..

-An else if statement is used to check multiple conditions and to execute different code blocks based on the conditions that are met.

For example, the following else if statement would display a different message to the user depending on their age:

JavaScript
const age = prompt("What is your age?");

if (age < 13) {
  alert("You are not old enough to use this website.");
} else if (age >= 13 && age < 18) {
  alert("You are old enough to use this website, but you are not yet an adult.");
} else {
  alert("Welcome to the website!");
}

In this example, the first condition checks if the user's age is less than 13. If the condition is met, the code block inside the if statement is executed. The message "You are not old enough to use this website." is displayed to the user.

The second condition checks if the user's age is greater than or equal to 13 and less than 18. If the condition is met, the code block inside the else if statement is executed. The message "You are old enough to use this website, but you are not yet an adult." is displayed to the user.

If neither of the conditions are met, the code block inside the else statement is executed. The message "Welcome to the website!" is displayed to the user.

Else if statements can be used to check any number of conditions. This makes them very useful for creating complex conditional statements.

Here are some other examples of how else if statements can be used:

To display different products on a web page based on the user's search query.
To offer different discounts to customers based on their purchase amount.
To validate different types of user input, such as email addresses, phone numbers, and passwords.
To display different error messages to users based on the type of error that occurred.
Else if statements are a powerful tool that can be used to create more interactive and user-friendly web applications.





# Readings 03: HTML Lists, Control Flow with JS, and the CSS Box Model
- Something id like to know more about from this lab is Ordered and Unordered lists.

1.When should you use an unordered list in your HTML document? Ive already answered the question but i am looking forward to applying it in future labs.






# Readin04 HTML Links, JS Functions, and Intro to CSS Layout
This one does it for me What is the difference between a parameter and an argument?
-A parameter is a variable that is defined in a function declaration. An argument is a value that is passed to a function when it is invoked.

In the greet() function example above, the parameter is name and the argument is "Bard".

When a function is invoked, the arguments are passed to the function parameters and the function body is executed.
The idea a function being invoked for execution has not quite processed wiith me just yet. I am looking forward to learning more in future labs.

#  Read: Class 05 Readings: Images, Color, Text
Something I'd like to know more about in realtion to this topic is How to improve accessibility of images in an HTML document:

In addition to using the alt attribute, there are a few other things you can do to improve the accessibility of images in your HTML documents:

Use descriptive filenames for your images.
Use the longdesc attribute to provide a longer description for complex images.
Use the figure element to group related images together.
Use the figcaption element to provide a caption for an image.


# Read: Class 06
# Readings: Problem Domain, Objects, and the DOM
-Something I'd like to know more about in realtion to this topic is How to improve  my cod evaluation using the This command
const dog = 
  name: 'Spot',
  age: 2,
  color: 'white with black spots',
  humanAge: function (){
    console.log(`${this.name} is ${this.age*7} in human years`);
  }
  Overall, the this keyword is a powerful tool that can be used to make your code more concise, reusable, and object-oriented.

  # Read: Class 07
  # Readings: Object-Oriented Programming, HTML Tables
  -Something I'd like to know more about in realtion to this topic is Domain modeling
  Domain Modeling

Explain why we need domain modeling.
-Domain modeling is the process of creating a conceptual model of a problem domain. It is a critical aspect of software development, as it helps to ensure that the software meets the needs of the users.
There are several reasons why we need domain modeling:

To better understand the problem domain. Domain modeling helps us to identify the key concepts in the problem domain and their relationships to each other. This understanding is essential for developing a solution that meets the needs of the users.
To communicate the problem domain to others. Domain modeling provides a common way to communicate about the problem domain to stakeholders, such as users, developers, and business analysts. This helps to ensure that everyone has a shared understanding of the problem and the desired solution.
To validate the solution. Domain modeling can be used to validate the proposed solution by ensuring that it is consistent with the problem domain. This helps to identify and correct any errors or omissions in the solution.  
over all my question is how did this become the helper that it is for users.


# Class 08
## Readings: CSS Layout

Something id like to know more  about are specific ways that flexbox can be used to achieve your long-term goals here are some facts about that  that i will keep in mind,
Here are some specific ways that flexbox can be used to achieve your long-term goals:

Create responsive layouts: Flexbox makes it easy to create layouts that respond to different devices and screen sizes. This is important for creating websites and web applications that are accessible to all users.
Build complex layouts: Flexbox can be used to create complex layouts with multiple columns, rows, and nested elements. This is useful for creating dashboards, product pages, and other types of complex layouts.
Improve accessibility: Flexbox is more accessible than other layout methods, such as float. This is important for creating websites and web applications that are accessible to all users, including users with disabilities.

# Read: Class 09
# HTML Forms
- Something id like to know more about is Why are forms so important in web development?
-Forms are an essential part of web development. They allow users to interact with websites and web applications, and to provide information to the server. Forms are used for a variety of purposes, such as:

Collecting user feedback
Allowing users to create accounts
Processing payments
Submitting orders
Contacting the website owner

# Class 10
## Readings: Debugging

Something id like to know more about Name some key differences between a Syntax Error and a Logic Error.
-Characteristic	Syntax Error	Logic Error
Definition	An error that occurs when the code does not follow the JavaScript syntax rules.	An error that occurs when the code is syntactically correct, but the logic of the code is flawed.
Behavior	Prevents the program from running.	The program runs, but produces incorrect or unexpected results.
Debug process	Can be identified by reading the error message produced by the JavaScript engine.	More difficult to identify, as the program is still able to run. Requires the developer to step through the code and identify the logical error.

# Read: Class 11
## Readings: Audio, Video, Images

Something id like to know more about is Explain how the ability to use video and audio on the web has evolved since the early 2000s.
-The ability to use video and audio on the web has evolved significantly since the early 2000s. In the early days of the web, video and audio streaming was unreliable and slow, and only a small percentage of users had broadband internet access. This limited the use of video and audio on the web to mostly text-based content, such as news articles and blog posts.

However, as internet speeds have increased and streaming technology has improved, video and audio have become increasingly popular on the web. Today, video and audio are used in a wide variety of web content, including:

Streaming video and audio services: Services such as Netflix, Hulu, and Spotify allow users to stream video and audio content on demand.
Social media: Social media platforms such as YouTube and TikTok allow users to share and watch videos.
Video games: Many online video games now use video and audio to create immersive and engaging experiences.
Educational content: Many educational websites and online courses now use video and audio to teach students about a variety of topics.

# Read: Class 12
## Readings: Chart.js, Canvas

Something id like to know more about is What is Chart.js and how it can be brought into your project?
-Chart.js is a JavaScript library for creating charts and graphs. It is easy to use and supports a wide variety of chart types, including bar charts, line charts, pie charts, and radar charts.
