# Read: Class 08
Efficient and maintainable code: Well-designed APIs are easier to build, understand, and modify. Consistent resource identifiers, clear URIs, and predictable responses save time and effort, especially when working on large projects.
Improved user experience: Clients interacting with your API get consistent and intuitive responses. This leads to fewer errors, faster development cycles, and ultimately happy users.
Scalability and performance: RESTful principles promote statelessness, meaning each request carries all necessary information. This reduces server load and allows for easier scaling to handle increased traffic.
Interoperability: Following established standards makes your API compatible with various tools and libraries. This widens your potential user base and fosters innovation.
For users:

Clarity and predictability: Knowing what verbs (GET, POST, etc.) do and what status codes mean allows users to interact with your API confidently.
Reduced development time: Users can quickly learn how to access and manipulate your resources, saving them time and effort when building applications.
Flexibility and choice: Users have access to a wider range of tools and libraries that support RESTful APIs, giving them more options and flexibility for their projects.
Standardized communication: A common language for interacting with different APIs reduces friction and promotes collaboration within the developer community.
In essence, REST API best practices are like a universal grammar for web services. They ensure efficient communication, clear understanding, and ultimately, a more enjoyable and productive experience for everyone involved.



## API Design Best Practices

1. What does REST stand for?
-REST stands for: Representational State Transfer. It's an architectural style for designing APIs that emphasizes resources and their relationships.


2. REST APIs are designed around a ____.
-REST APIs are designed around a: resource. A resource is anything that can be acted upon or retrieved, like users, products, orders, etc.


3. What is an identifier of a resource? Give an example.
-An identifier of a resource is called a: resource identifier or ID. It uniquely defines a specific instance of a resource. Example: /users/123 identifies user with ID 123.


4. What are the most common HTTP verbs?
-The most common HTTP verbs used in REST APIs are:

GET: Retrieves a resource.
POST: Creates a new resource.
PUT: Updates an existing resource.
PATCH: Applies partial modifications to an existing resource.
DELETE: Removes a resource.




5. What should the URIs be based on?
-URIs (Uniform Resource Identifiers) should be based on: the resources they represent. They should be human-readable and follow a consistent structure.



6. Give an example of a good URI.
-Example of a good URI: /products/electronics/laptops/macbook-pro-13 clearly identifies the resource (a specific laptop model).



7. What does it mean to have a ‘chatty’ web API? Is this a good or a bad thing?
-A "chatty" web API means: it uses verbose responses and requests, often with lots of data transferred. This can be bad for performance and scalability.



8. What status code does a successful GET request return?
-A successful GET request returns: status code 200 (OK).



9. What status code does an unsuccessful GET request return?
-An unsuccessful GET request might return:

404 (Not Found): resource doesn't exist.
401 (Unauthorized): user not authorized to access resource.
403 (Forbidden): user authorized but not allowed to perform that action.




10. What status code does a successful POST request return?
-A successful POST request returns:

201 (Created): resource created successfully.
202 (Accepted): request accepted, creation may be in progress.




11. What status code does a successful DELETE request return?
-A successful DELETE request returns:

204 (No Content): resource deleted successfully (no content to return).


