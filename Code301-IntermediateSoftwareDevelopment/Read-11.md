# Read: Class 11

## Readings: MongoDB and Mongoose


Overall, understanding the differences between SQL and NoSQL empowers you to make informed decisions about data management, build efficient and scalable applications, and contribute effectively to collaborative projects involving various database technologies.
### Reading
### nosql vs sql

1. Fill in the chart below with five differences between SQL and NoSQL databases:
-
SQL vs NoSQL Databases
Feature	SQL	NoSQL
Data type	Structured data	Structured, semi-structured, and unstructured data
Data model	Relational (tabular)	Document-oriented, key-value, graph, wide-column
Schema	Fixed and predefined	Flexible and dynamic
Query language	SQL (Structured Query Language)	Varies depending on the database
Scalability	Horizontally scalable with sharding	Horizontally scalable with replication
 	 
 	 
1. What kind of data is a good fit for an SQL database?
- Good fit for SQL databases are data that is structured and has a fixed schema.


2. Give a real world example.
-Ecommerce store: Products, orders, customers (structured data with predefined relationships)
Financial institution: Account information, transactions, users (highly organized data with complex relationships)

3. What kind of data is a good fit a NoSQL database?
- Good fit for NoSQL databases are data that is unstructured and has a flexible schema.
-
4. Give a real world example.
-Social media platform: User profiles, posts, comments (semistructured data with dynamic relationships)
Internet of Things (IoT): Sensor data, device information (unstructured data with varying formats)


5. Which type of database is best for hierarchical data storage?
- SQL: More suitable for hierarchical data storage due to its relational structure and fixed schema.
NoSQL: Some NoSQL databases like graph databases are specifically designed for hierarchical data, but most NoSQL databases are not as well-suited for this type of data.


6. Which type of database is best for scalability?
- SQL: Vertically scalable by adding more powerful hardware. Horizontally scalable with sharding, but more complex to implement.
NoSQL: Horizontally scalable by adding more nodes to the cluster. Easier to implement than sharding in SQL databases.

# Videos
## sql vs nosql (Video)

1. What does SQL stand for?
- SQL stands for: Structured Query Language. It's a standardized language used to access and manipulate data stored in relational database management systems (RDBMS). SQL: Offers ACID compliance (Atomicity, Consistency, Isolation, Durability) for data integrity.


2. What is a relational database?
- A relational database: Organizes data in tables with rows and columns. Each table represents a specific entity (e.g., customers, products, orders), and columns represent attributes of that entity (e.g., name, price, quantity). Relationships between tables are established through foreign keys, enabling efficient data retrieval and manipulation.


3. What type of structure does a relational database work with?
- Data structure: Relational databases work with structured data, meaning the data is organized in a predefined format with a fixed schema. This ensures data consistency and facilitates efficient querying.


4. What is a ‘schema’?
- Schema: Defines the structure of a relational database. It specifies the tables, columns, data types, and relationships between tables. The schema acts as a blueprint for organizing and managing data in the database.


5. What is a NoSQL database?
- NoSQL: Stands for "not only SQL" and represents a category of non-relational databases. They offer flexible data models that can accommodate structured, semi-structured, and unstructured data.


6. How does it work?
- NoSQL operation: NoSQL databases typically use key-value pairs, documents, or graphs to store data. They provide different query languages and APIs for accessing and manipulating data depending on the specific database type.


7. What is inside of a MongoDB database?
- MongoDB: A popular NoSQL database that uses a document-oriented data model. Documents are JSON-like structures that can store various data types and have flexible, dynamic schemas.


8. Which is more flexible - SQL or MongoDB? and why.
- Flexibility: MongoDB offers greater flexibility than SQL due to its dynamic schema and ability to store diverse data types. This makes it adaptable to changing requirements and evolving data models.


9. What is the disadvantage of a NoSQL database?
- Disadvantage of NoSQL: Compared to SQL, NoSQL databases may offer weaker data consistency guarantees and lack standardized query languages. This can make it challenging to ensure data integrity and perform complex queries across different data types.

Ultimately, the choice between SQL and NoSQL depends on your specific needs and priorities. If you deal with structured data and require reliable data integrity, SQL might be a better choice. Conversely, if you value flexibility and need to accommodate diverse or evolving data, NoSQL might be a better fit.

