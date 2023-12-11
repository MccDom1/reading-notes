# Read: Class 15
## Readings: Authentication

OAuth plays a crucial role in today's interconnected digital world. It promotes secure and convenient access to user data, fosters a thriving ecosystem of applications, and ultimately empowers users to take control of their online identities.



## What is OAuth

1. What is OAuth?
-OAuth (short for "Open Authorization") is an open standard for authorization. It allows users to grant websites or applications access to their information on other websites without sharing their usernames and passwords.


2. Give an example of what using OAuth would look like.
- Imagine you're using a social media scheduling tool to post content to your Facebook account. Instead of entering your Facebook username and password into the tool, you can use OAuth. This allows you to grant the tool access to your Facebook account without revealing your sensitive login credentials.


3. How does OAuth work? What are the steps that it takes to authenticate the user?
- User initiates request: You want to use an application that requires access to your data on another website (e.g., Facebook).
Redirection to authorization server: The application redirects you to the authorization server of the website where your data is stored (e.g., Facebook Login page).
Granting permission: You review the permissions requested by the application and grant them access if you agree.
Authorization code: The authorization server generates an authorization code and sends it back to the application.
Token exchange: The application exchanges the authorization code for an access token from the authorization server.
Accessing data: The application uses the access token to access your data on the website.

4. What is OpenID?
- OIDC extends OAuth and adds capabilities for user authentication. It allows the application to verify your identity and obtain basic profile information like name and email.


## Authorization and Authentication flows

1. What is the difference between authorization and authentication?
-Authentication: Verifying the identity of a user (who they are).
Authorization: Determining their access rights (what they can do).



2. What is Authorization Code Flow?
-Authorization Code Flow: Secure and widely used. Involves redirecting the user to the authorization server and exchanging an authorization code for an access token


3. What is Authorization Code Flow with Proof Key for Code Exchange (PKCE)?
-Authorization Code Flow with PKCE: Enhanced security for authorization code flow. Adds additional protection against code interception attacks.


4. What is Implicit Flow with Form Post?
- Implicit Flow: Simpler than authorization code flow but less secure. Suitable for applications where access tokens are short-lived.



5. What is Client Credentials Flow?
- Client Credentials Flow: Used by applications to access their own data or resources.

6. What is Device Authorization Flow?
- Device Authorization Flow: Facilitates authorization on devices without web browsers, such as smart TVs.


7. What is Resource Owner Password Flow?
- Resource Owner Password Flow: Not recommended due to security concerns. Involves sending the user's username and password directly to the authorization server.


Choosing the right OAuth flow depends on your specific application and security requirements.