/**
 * Error Handling Middleware
 * 
 * Global error handler and 404 handler for the Express app.
 * Catches all unhandled errors and formats consistent error responses.
 */

const notFound = (req, res, _next) => {
  res.status(404).json({
    status: 'error',
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
};

const errorHandler = (err, _req, res, _next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  console.error(`❌ Error: ${message}`);
  if (process.env.NODE_ENV === 'development') {
    console.error(err.stack);
  }

  res.status(statusCode).json({
    status: 'error',
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

module.exports = { notFound, errorHandler };
