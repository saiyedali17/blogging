 const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Middleware to protect routes (optional: implement this yourself)
const authMiddleware = require('../middleware/auth');

// Public routes
router.get('/', postController.getPosts);         // GET /api/posts
router.get('/:id', postController.getPost);       // GET /api/posts/:id

// Protected routes (requires login)
router.post('/', authMiddleware, postController.createPost);         // POST /api/posts
router.put('/:id', authMiddleware, postController.updatePost);       // PUT /api/posts/:id
router.delete('/:id', authMiddleware, postController.deletePost);    // DELETE /api/posts/:id

module.exports = router;
