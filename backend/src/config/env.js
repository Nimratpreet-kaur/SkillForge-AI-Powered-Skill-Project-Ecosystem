/**
 * Environment Configuration
 * 
 * Loads and validates environment variables.
 * Provides defaults for development.
 */

require('dotenv').config();

const env = {
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  MONGODB_URI: process.env.MONGODB_URI || '',
  JWT_SECRET: process.env.JWT_SECRET || 'dev-secret-change-me',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '7d',
  PISTON_API_URL: process.env.PISTON_API_URL || 'https://emkc.org/api/v2/piston',
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID || '',
  GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET || '',
};

// Warn about missing critical vars in production
if (env.NODE_ENV === 'production') {
  const required = ['MONGODB_URI', 'JWT_SECRET'];
  const missing = required.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    console.error(`❌ Missing required env vars: ${missing.join(', ')}`);
    process.exit(1);
  }
}

module.exports = env;
