
# Read: Class 09
Learning about HTML forms and JavaScript events is important for web development because it allows you to create interactive and dynamic web pages.
HTML forms allow users to interact with your web page by providing input, such as their name, email address, or feedback. You can use this input to collect data, process payments, or submit orders.
JavaScript events allow you to respond to user interactions, such as mouse clicks, keyboard presses, and form submissions. You can use JavaScript events to validate form input, display feedback to users, or perform other actions.
Together, HTML forms and JavaScript events allow you to create web pages that are both user-friendly and functional.

# HTML Forms
## our first Web Form. How To Structure A Web Form.

1,Why are forms so important in web development?
-Forms are an essential part of web development. They allow users to interact with websites and web applications, and to provide information to the server. Forms are used for a variety of purposes, such as:

Collecting user feedback
Allowing users to create accounts
Processing payments
Submitting orders
Contacting the website owner

2.When designing a form, what are some key things to keep in mind when it comes to user experience?
-When designing a form, it is important to keep the user experience in mind.

Keep the form simple and easy to understand.
Use clear and concise labels for each form field.
Make sure that the form fields are the right size and type.
Use validation to prevent users from submitting invalid data.
Provide feedback to users after they submit the form.

3.List 5 form elements and explain their importance.
-Here are 5 common form elements and their importance:

**<input>:** The<input>` element is used to create text fields, checkboxes, radio buttons, and other form fields. It is the most important form element.
<select>:** The <select> element is used to create dropdown lists. It is useful for allowing users to select one option from a list of options.
<textarea>:** The <textarea> element is used to create multi-line text fields. It is useful for collecting user feedback, descriptions, and other long pieces of text.
<button>:** The <button> element is used to create buttons. Buttons can be used to submit forms, reset forms, or perform other actions.
<fieldset>:** The <fieldset> element is used to group related form fields together. It can also be used to add a label and border to a group of form fields.


##Learn JS
##Introduction To Events.

1,How would you describe events to a non-technical friend?
-Events are things that happen on a web page. For example, when a user clicks a button, that is an event. When a user moves the mouse over an element, that is also an event.

Events can be used to trigger actions on a web page. For example, you can use an event to make an element appear or disappear, or to change the content of an element.

2.When using the addEventListener() method, what 2 arguments will you need to provide?
-To use the addEventListener() method, you need to provide two arguments:

The event type: This is the type of event that you want to listen for. For example, if you want to listen for clicks, you would use the click event type.
The event listener function: This is the function that you want to be called when the event is triggered.


3,Describe the event object. Why is the target within the event object useful?
-The event object contains information about the event that has been triggered. The target property of the event object contains the element that triggered the event.

The target property is useful because it allows you to identify the specific element that triggered the event. This can be useful if you have multiple elements on your web page that can trigger the same event.


4.What is the difference between event bubbling and event capturing?
-Event bubbling and event capturing are two different ways of handling events in JavaScript.

Event bubbling is the default behavior in JavaScript. When an event is triggered, it bubbles up the DOM tree until it reaches the document element.

Event capturing is the opposite of event bubbling. When an event is triggered, it is captured by the deepest element in the DOM tree that is listening for the event.

Event capturing can be useful if you need to stop an event from bubbling up the DOM tree. For example, you might want to use event capturing to stop a click event from bubbling up to the document element.
