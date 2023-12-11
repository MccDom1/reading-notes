# Read: Class 13
CRUD and REST are like two best friends who work together to make your API rock.

CRUD stands for Create, Read, Update, and Delete. These are the four basic operations you can do with any data, and they're also the foundation of any good API.

REST stands for Representational State Transfer. It's a set of principles for designing APIs that are consistent, predictable, and easy to use.

Here's how they work together:

CRUD operations tell your API what to do with data.
REST methods tell your API how to do it.
For example:

To create a new user: You would use the HTTP method POST and send the user's data to the API endpoint.
To read a user's information: You would use the HTTP method GET and specify the user's ID in the request.
To update a user's email address: You would use the HTTP method PUT and send the user's ID and updated email address to the API endpoint.
To delete a user: You would use the HTTP method DELETE and specify the user's ID in the request.
Using CRUD and REST together helps you build APIs that are:

Easy to use: Anyone who understands CRUD and REST can use your API.
Efficient: CRUD operations are designed to be efficient, and REST principles help you avoid unnecessary complexity.
Scalable: Your API can be easily scaled to handle more users and data.
Reliable: CRUD and REST principles help you build APIs that are reliable and predictable.

## Readings: More CRUD


### CRUD Basics

1. Which HTTP method would you use to update a record through an API?
-The HTTP method used to update a record through an API is PUT.


2. Which REST methods require an ID parameter?
- The following REST methods require an ID parameter to identify the specific resource being accessed or manipulated:

GET /:id: Retrieve a specific resource by its ID.
PUT /:id: Update a specific resource by its ID.
DELETE /:id: Delete a specific resource by its ID.



### Videos
Speed Coding: Building a CRUD API (Watch a Twitch streamer code an Express API in 20 minutes!)

1. What’s the relationship between REST and CRUD?
-CRUD (Create, Read, Update, Delete) operations map to the following HTTP methods in REST APIs:

Create: POST
Read: GET
Update: PUT/PATCH
Delete: DELETE



2. If you had to describe the process of creating a RESTful API in 5 steps, what would they be?
-Define resources: Identify the entities your API will manage (users, products, etc.)
Choose appropriate routes: Map HTTP methods (GET, POST, PUT, DELETE) to CRUD operations for each resource.
Design data models: Define the structure of your data (schemas) for each resource.
Implement API logic: Write code to handle requests, process data, and respond with appropriate HTTP status codes.
Test and deploy: Test your API thoroughly and deploy it to a production environment.