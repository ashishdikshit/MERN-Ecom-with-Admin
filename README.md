# MERN E-commerce with Admin Dashboard

A full-stack e-commerce application built with MERN (MongoDB, Express, React, Node.js) stack with admin functionality for product management.

---

## 📋 Table of Contents

- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Code Flow & Architecture](#code-flow--architecture)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Running the Project](#running-the-project)

---

## 📁 Project Structure

```
MERN-Ecom-with-Admin/
├── backend/
│   ├── config/
│   │   ├── config.env          # Environment variables (PORT, DB_URI)
│   │   └── db.js               # MongoDB connection setup
│   ├── controller/
│   │   └── productController.js # Business logic for product operations
│   ├── models/
│   │   └── productModels.js    # MongoDB schema and model definitions
│   ├── routes/
│   │   └── productRoutes.js    # API route definitions
│   ├── app.js                  # Express app configuration
│   └── server.js               # Server entry point
├── frontend/                   # React frontend (to be implemented)
├── package.json                # Project dependencies
└── README.md                   # This file
```

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/ashishdikshit/MERN-Ecom-with-Admin.git
   cd MERN-Ecom-with-Admin
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   - Edit `backend/config/config.env` file:
   ```env
   PORT=5000
   DB_URI=mongodb://localhost:27017/ecomDB
   ```

4. **Ensure MongoDB is running**
   - For local MongoDB: Start MongoDB service
   - For MongoDB Atlas: Update `DB_URI` with your cloud connection string

---

## 🔄 Code Flow & Architecture

### Application Entry Point Flow

```
server.js (Entry Point)
    ↓
Loads environment variables (dotenv)
    ↓
app.js (Express App Setup)
    ↓
Connects to MongoDB (db.js)
    ↓
Starts listening on PORT (default: 5000)
```

### Request Processing Flow

```
Client Request
    ↓
Express Server (app.js)
    ↓
Routes (productRoutes.js)
    ↓
Controller Functions (productController.js)
    ↓
Database Models (productModels.js)
    ↓
MongoDB Database
    ↓
Response Back to Client
```

### Architecture Layers

#### 1. **Server Layer** (`server.js`)
- Entry point of the application
- Loads environment configuration using dotenv
- Initializes MongoDB connection
- Starts Express server on specified PORT

```javascript
Key Functions:
- dotenv.config() → Load environment variables
- connectMongoDB() → Establish DB connection
- app.listen(PORT) → Start server
```

#### 2. **Application Layer** (`app.js`)
- Configures Express middleware
- Registers route handlers
- Sets up JSON parsing middleware

```javascript
Key Features:
- express.json() → Parse incoming JSON requests
- Route mounting → Attach product routes to /api/v1 and / paths
```

#### 3. **Routes Layer** (`routes/productRoutes.js`)
- Defines API endpoints
- Maps HTTP methods (GET, POST, PUT, DELETE) to controller functions
- Uses Express Router for modular route management

```javascript
Key Routes:
- GET /api/v1/ → getAllProducts
- GET /api/v1/product → getSingleProduct
- POST /api/v1/product → createProducts
- PUT /api/v1/product/:id → updateProduct
- DELETE /api/v1/product/:id → deleteProduct
```

#### 4. **Controller Layer** (`controller/productController.js`)
- Contains business logic for handling requests
- Interacts with database models
- Formats and sends responses to clients

```javascript
Key Functions:
- createProducts() → Add new product to database
- getAllProducts() → Retrieve all products
- getSingleProduct() → Get single product (placeholder)
- updateProduct() → Modify existing product
- deleteProduct() → Remove product from database
```

#### 5. **Model Layer** (`models/productModels.js`)
- Defines MongoDB schema structure
- Specifies data validation rules
- Establishes database relationships

```javascript
Key Schema Fields:
- name (String, required)
- description (String, required)
- price (Number, required, max 7 digits)
- category (String, required)
- stock (Number, required, max 5 digits, default: 1)
- ratings (Number, default: 0)
- image (Array of objects with public_id and url)
- reviews (Array of review objects with user references)
- numOfReviews (Number, default: 0)
- createdAt (Date, auto-populated)
```

#### 6. **Database Layer** (`config/db.js`)
- Establishes MongoDB connection
- Handles connection success and error scenarios
- Uses Mongoose for database operations

```javascript
Key Function:
- connectMongoDB() → Connect to MongoDB using Mongoose
```

#### 7. **Configuration Layer** (`config/config.env`)
- Centralized environment variables
- Sensitive configuration (API keys, DB URIs)
- Environment-specific settings

```env
PORT=5000                                    # Server port
DB_URI=mongodb://localhost:27017/ecomDB    # MongoDB connection string
```

---

## 📡 API Endpoints

### Base URL
```
http://localhost:5000/api/v1
```

### Product Endpoints

#### 1. Get All Products
- **Method:** `GET`
- **Endpoint:** `/` or `/api/v1/`
- **Response:**
```json
{
  "message": "All products",
  "success": true,
  "products": [
    {
      "_id": "...",
      "name": "Product Name",
      "price": 100,
      "category": "Electronics",
      ...
    }
  ]
}
```

#### 2. Create Product
- **Method:** `POST`
- **Endpoint:** `/product`
- **Request Body:**
```json
{
  "name": "Product Name",
  "description": "Product Description",
  "price": 100,
  "category": "Electronics",
  "stock": 50,
  "image": [
    {
      "public_id": "image_id",
      "url": "image_url"
    }
  ]
}
```
- **Response:**
```json
{
  "success": true,
  "product": { /* newly created product */ }
}
```

#### 3. Get Single Product
- **Method:** `GET`
- **Endpoint:** `/product`
- **Response:**
```json
{
  "message": "Single product"
}
```
*Note: Currently returns placeholder response. To be implemented.*

#### 4. Update Product
- **Method:** `PUT`
- **Endpoint:** `/product/:id`
- **Request Body:** Fields to update
- **Response:**
```json
{
  "success": true,
  "message": "Update product",
  "product": { /* updated product */ }
}
```

#### 5. Delete Product
- **Method:** `DELETE`
- **Endpoint:** `/product/:id`
- **Response:**
```json
{
  "success": true,
  "message": "Product deleted successfully"
}
```

---

## 💾 Database Schema

### Product Schema

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| name | String | ✓ | - | Product name (trimmed) |
| description | String | ✓ | - | Product description |
| price | Number | ✓ | - | Price (max 7 digits) |
| category | String | ✓ | - | Product category |
| stock | Number | ✓ | 1 | Available quantity (max 5 digits) |
| ratings | Number | ✗ | 0 | Average rating |
| numOfReviews | Number | ✗ | 0 | Number of reviews |
| image | Array | ✗ | - | Product images (public_id, url) |
| reviews | Array | ✗ | - | Customer reviews (user ref, name, rating, comment) |
| createdAt | Date | ✗ | Date.now | Creation timestamp |

---

## ▶️ Running the Project

### Development Mode

1. **Start MongoDB**
   ```bash
   # For local MongoDB, ensure MongoDB service is running
   ```

2. **Run the server**
   ```bash
   npm start
   ```
   This will start the server with Nodemon for automatic restart on file changes.

3. **Expected Console Output**
   ```
   Database connected successfully with host: localhost:27017
   Server is running on port 5000
   ```

### Making API Requests

You can test the API using:
- **Postman** - API testing tool
- **cURL** - Command line
- **Frontend React App** - Once implemented

Example using cURL:
```bash
# Get all products
curl http://localhost:5000/api/v1/

# Create product
curl -X POST http://localhost:5000/api/v1/product \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","description":"Test","price":100,"category":"Test","stock":10}'
```

---

## 🔧 Dependencies

- **express** (v5.2.1) - Web framework
- **mongoose** (v9.1.5) - MongoDB ODM
- **dotenv** (v17.2.3) - Environment variables
- **nodemon** (v3.1.11) - Development server auto-restart

---

## 📝 Code Refactoring History

### Initial Structure (Refactored)
- Moved controller logic from `server.js` to `productController.js`
- Separated routes into `productRoutes.js`
- Moved database models to `productModels.js`
- Benefits: Better code organization, reusability, and maintainability

---

## 🚧 Future Enhancements

- [ ] Implement frontend React components
- [ ] Admin dashboard for product management
- [ ] User authentication (JWT)
- [ ] Order management system
- [ ] Payment gateway integration
- [ ] Product search and filtering
- [ ] Image upload functionality
- [ ] Review and rating system implementation
- [ ] Email notifications
- [ ] Testing (Jest, Mocha)

---

## 📧 Contact & Support

For issues and questions, please visit: [GitHub Issues](https://github.com/ashishdikshit/MERN-Ecom-with-Admin/issues)

---

## 📄 License

ISC
