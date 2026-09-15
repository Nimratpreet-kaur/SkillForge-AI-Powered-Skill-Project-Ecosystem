/**
 * GitHub Integration Routes
 * 
 * Connects to the GitHub API to pull repository and commit data.
 * Uses GitHub OAuth for authentication.
 * 
 * Planned endpoints:
 *   GET  /api/github/repos/:username  — Get user's GitHub repositories
 *   GET  /api/github/stats/:username  — Get contribution statistics
 *   POST /api/github/connect          — Connect GitHub account via OAuth
 * 
 * GitHub API docs: https://docs.github.com/en/rest
 * Rate limits: 60 req/hr (unauth), 5000 req/hr (authenticated)
 * 
 * @owner Team Member 6 — GitHub & Reviews
 */

const express = require('express');
const router = express.Router();
const githubController = require('../controllers/github.controller');

// TODO: Implement GitHub routes
// router.get('/repos/:username', authMiddleware, githubController.getUserRepos);
// router.get('/stats/:username', authMiddleware, githubController.getUserStats);
// router.post('/connect', authMiddleware, githubController.connectAccount);

module.exports = router;
