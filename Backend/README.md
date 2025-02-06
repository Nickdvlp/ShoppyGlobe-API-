........ShoppyGlobe E-commerce API.........

Project Overview...
ShoppyGlobe is a backend API for e-commerce application built using Node.js, Express, MongoDB. The API provides endpoints for managing products, shopping cart functionaliy and user authentication and authorization.

features...

fetch a list of products
Get details of a single product
Add, update and remove products from the cart
User authentication with JWT
Secure access to cart routes

Technologies Used...

Node.js
Express.js
MongoDB
Mongoose
JSON Web Token
ThunderClient (for API Testing)

API Endpoints...

Products...
GET/products- fetch all products
GET /products/:id - Fetch a single product by ID

Cart...
POST /cart - Add a product to the cart (Authenticated users only)
PUT /cart/:id - Update product quantity in the cart (Authenticated users only)
DELETE /cart/:id - Remove a product from the cart (Authenticated users only)

Authentication...
POST /register - Register a new user
POST /login - Authenticate user and return a JWT token

Screenshots of API Testing...

You can check screenshots in screenshots.docx
i added this file in folder

You can check the code on GitHub...

https://github.com/Nickdvlp/ShoppyGlobe-API-
