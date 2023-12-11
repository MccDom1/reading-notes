# Read: Class 12
understanding these concepts empowers you to build robust, secure, and user-friendly REST APIs. It promotes better code organization, efficient data handling, dynamic behavior, and ultimately, a more successful and reliable API.
## Readings: CRUD
## Status Codes Based On REST Methods

1. In your own words, describe what each group of status code represents:

100’s =
200’s =
300’s =
400’s =
500’s =
100's: Informational responses. These indicate that the request has been received and understood, but further processing is required.

200's: Success responses. These indicate that the request was successful and the requested operation was completed.

300's: Redirection responses. These indicate that the requested resource has been moved to a new location and the client should redirect to that location.

400's: Client error responses. These indicate that the client made a bad request and the server cannot complete the operation.

500's: Server error responses. These indicate that the server encountered an error and could not complete the request.

2. What is a status code 202?
-
202 is a status code that means that the request has been accepted for processing, but the processing has not been completed.

3. What is a status code 308?
-308: The requested resource is permanently located at a new URL. The client should update its bookmark and future requests should be directed to the new location.

4. What code would you use if an update didn’t return data to a client?
-Update without data: You would use a 204 No Content status code for an update that doesn't return data to the client.

5. What code would you use if a resource used to exist but no longer does?
- Resource no longer exists: You would use a 404 Not Found status code if a resource used to exist but no longer does.

6. What is the ‘Forbidden’ status code?
- Forbidden: The 403 Forbidden status code indicates that the client is authorized to access the server but is not authorized to access the specific resource.

## Videos

## Build A REST API With Node.js, Express, & MongoDB - Quick - First 20 minutes

1. Why do we need to pull our MongoDB database string out of our server and put it into our .env?
-Improved security: Storing sensitive information like database credentials outside the code base prevents accidental exposure and unauthorized access.
Easier configuration management: Centralizing environment variables in a .env file simplifies configuration management across different environments (development, testing, production).
Reduced code clutter: Keeps code clean and focused on functionality by separating configuration details.

2. What is middleware?
- Intercepts requests and responses: Middleware acts as a bridge between the client and the core application logic. It can perform various tasks like logging, authentication, validation, and data transformation before or after the request reaches the intended handler.
Modular and reusable code: Middleware promotes code reuse by encapsulating common functionality in separate modules.
Enhanced application features: Enables building features like rate limiting, logging, and error handling without modifying application logic directly.

3. What does app.use(express.json()) do?
-Parses JSON data from requests: This middleware parses JSON data sent in the body of POST and PUT requests and makes it accessible in the req.body object.
Essential for JSON-based APIs: Most modern REST APIs use JSON for data exchange, making this middleware crucial for handling and processing request data.
Improves code readability: Makes code more readable by providing a structured representation of request data.

4. What does the /:id mean in a route?
-Represents a placeholder for a dynamic value: The : indicates a variable segment within the route path, allowing for matching and handling requests based on specific resource identifiers.
Enables routing for individual resources: The captured id value can be used to identify and access specific resources within your API.
More flexible and dynamic routing: Allows for building routes for various resources with varying IDs, promoting dynamic API behavior.


5. What is the difference between PUT and PATCH?
-PUT replaces the entire resource: The PUT method replaces the entire resource at the specified location with the provided data.
PATCH updates specific parts of a resource: The PATCH method updates only the specified parts of the resource, leaving the remaining data untouched.
Choosing the right method: Use PUT for replacing the whole resource and PATCH for updating specific parts, ensuring precise and efficient data manipulation.


6. How do you make a default value in a schema?
- Define default values for optional fields: This ensures that a field always has a value even if not explicitly provided in the request data.
Prevents missing data errors: Guarantees data integrity by eliminating potential issues due to missing field values.
Simplifies data handling: Makes code cleaner and more predictable by ensuring all fields have defined values.


7. What does a 500 error status code mean?
- Internal server error: This status code indicates that the server encountered an unexpected error and could not process the request.
Debugging required: The server logs should be reviewed to identify the cause of the error and take corrective action.
Client retry: Clients may retry the request after a certain delay, depending on the specific error and recovery strategy.

8. What is the difference between a status 200 and a status 201?
-200 OK: Indicates that the request was successful and the requested operation was completed.
201 Created: Indicates that the request was successful and a new resource was created as a result of the operation.
Differentiating creation: The 201 status code specifically signifies resource creation, providing additional information about the outcome.