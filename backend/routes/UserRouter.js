const express = require('express');
const router = express.Router();
const { getUsers, createUser } = require('../controllers/UserController');

// GET route to fetch users
router.get('/', getUsers);

// POST route to register a new user
router.post('/register', createUser);

module.exports = router;
