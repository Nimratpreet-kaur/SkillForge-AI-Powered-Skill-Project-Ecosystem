/**
 * Authentication Middleware
 * 
 * Verifies JWT tokens from the Authorization header.
 * Attaches the decoded user data to req.user for downstream handlers.
 * 
 * Usage in routes:
 *   const { protect } = require('../middleware/auth.middleware');
 *   router.get('/protected-route', protect, controller.handler);
 * 
 * Expected header format:
 *   Authorization: Bearer <jwt_token>
 * 
 * @owner Team Member 1 — Authentication
 */

// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// const { JWT_SECRET } = require('../config/env');

const protect = async (req, res, next) => {
  // TODO: Implement JWT verification
  // 1. Extract token from Authorization header
  // 2. Verify token with jwt.verify(token, JWT_SECRET)
  // 3. Fetch user from database
  // 4. Attach user to req.user
  // 5. Call next()
  
  // Temporary: pass through for development
  console.warn('⚠️  Auth middleware not implemented — passing through');
  next();
};

const authorize = (..._roles) => {
  return (req, res, next) => {
    // TODO: Check if req.user.role is in allowed roles
    console.warn('⚠️  Authorization not implemented — passing through');
    next();
  };
};

module.exports = { protect, authorize };
