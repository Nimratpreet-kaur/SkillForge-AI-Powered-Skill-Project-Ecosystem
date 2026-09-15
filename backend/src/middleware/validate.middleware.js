/**
 * Validation Middleware
 * 
 * Validates request body, params, and query against schemas.
 * Can be used with any validation library (Joi, Zod, express-validator, etc.)
 * 
 * Usage:
 *   const { validateBody } = require('../middleware/validate.middleware');
 *   router.post('/users', validateBody(userSchema), controller.createUser);
 * 
 * TODO: Choose a validation library and implement
 *   Recommended options (all free):
 *   - Joi: https://joi.dev/
 *   - Zod: https://zod.dev/
 *   - express-validator: https://express-validator.github.io/
 */

const validateBody = (schema) => {
  return (req, res, next) => {
    // TODO: Validate req.body against the provided schema
    // If valid: call next()
    // If invalid: return 400 with validation error details
    next();
  };
};

const validateParams = (schema) => {
  return (req, res, next) => {
    // TODO: Validate req.params against the provided schema
    next();
  };
};

const validateQuery = (schema) => {
  return (req, res, next) => {
    // TODO: Validate req.query against the provided schema
    next();
  };
};

module.exports = { validateBody, validateParams, validateQuery };
