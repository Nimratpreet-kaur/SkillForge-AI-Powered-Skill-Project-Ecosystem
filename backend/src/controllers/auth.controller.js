/**
 * Auth Controller
 * 
 * Handles user authentication: registration, login, logout.
 * Uses bcrypt for password hashing and JWT for token generation.
 * 
 * Planned methods:
 *   register(req, res) — Create new user, hash password, return JWT
 *   login(req, res)    — Verify credentials, return JWT
 *   logout(req, res)   — Invalidate token (if using blacklist)
 *   getMe(req, res)    — Return current authenticated user from JWT
 * 
 * @owner Team Member 1 — Authentication
 */

// const User = require('../models/User');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const { JWT_SECRET, JWT_EXPIRES_IN } = require('../config/env');

const register = async (req, res) => {
  // TODO: Implement user registration
  res.status(501).json({ message: 'Register not implemented yet' });
};

const login = async (req, res) => {
  // TODO: Implement user login
  res.status(501).json({ message: 'Login not implemented yet' });
};

const logout = async (req, res) => {
  // TODO: Implement logout
  res.status(501).json({ message: 'Logout not implemented yet' });
};

const getMe = async (req, res) => {
  // TODO: Return authenticated user from req.user
  res.status(501).json({ message: 'Get me not implemented yet' });
};

module.exports = { register, login, logout, getMe };
