/**
 * Health Check Routes
 * 
 * GET /api/health — Returns server status.
 * Used by the frontend to verify API connectivity.
 */

const express = require('express');
const router = express.Router();
const healthController = require('../controllers/health.controller');

router.get('/', healthController.getHealth);

module.exports = router;
