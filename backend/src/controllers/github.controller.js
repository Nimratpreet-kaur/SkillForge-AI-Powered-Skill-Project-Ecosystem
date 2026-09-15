/**
 * GitHub Controller
 * 
 * Handles GitHub API integration for pulling repo/commit data.
 * 
 * GitHub API: https://docs.github.com/en/rest
 * Rate limits: 60/hr (unauth), 5000/hr (with OAuth token)
 * 
 * Planned methods:
 *   getUserRepos(req, res)   — Fetch user's public repositories
 *   getUserStats(req, res)   — Fetch contribution statistics
 *   connectAccount(req, res) — Initiate GitHub OAuth flow
 * 
 * @owner Team Member 6 — GitHub & Reviews
 */

// const githubService = require('../services/github.service');

const getUserRepos = async (req, res) => {
  // TODO: Fetch repos from GitHub API
  res.status(501).json({ message: 'Get user repos not implemented yet' });
};

const getUserStats = async (req, res) => {
  // TODO: Fetch contribution stats from GitHub API
  res.status(501).json({ message: 'Get user stats not implemented yet' });
};

const connectAccount = async (req, res) => {
  // TODO: Start GitHub OAuth flow
  res.status(501).json({ message: 'Connect GitHub not implemented yet' });
};

module.exports = { getUserRepos, getUserStats, connectAccount };
