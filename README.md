# Simple Blogging Platform Backend

A backend API for a simple blogging platform built with Express.js, Node.js, and MongoDB.

## Features
- User registration and login (JWT authentication)
- User roles: admin, author, reader
- CRUD operations for blog posts
- Role-based permissions

## Tech Stack
- Express.js
- Node.js
- MongoDB (Mongoose)
- JWT for authentication
- bcrypt for password hashing

## Setup
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root with:
   ```env
   MONGO_URI=mongodb://localhost:27017/blogging_app
   PORT=8080
   JWT_SECRET=your_jwt_secret
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Auth
- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and get JWT

### Posts
- `GET /api/posts` — List all posts
- `GET /api/posts/:id` — Get a single post
- `POST /api/posts` — Create a post (auth required)
- `PUT /api/posts/:id` — Update a post (author/admin only)
- `DELETE /api/posts/:id` — Delete a post (author/admin only)

## License
MIT 