/**
 * Health Controller
 * 
 * Handles the health check endpoint.
 * Returns server status, timestamp, and version info.
 */

const getHealth = (_req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'skillforge-api',
    version: '1.0.0',
    uptime: process.uptime(),
  });
};

module.exports = { getHealth };
