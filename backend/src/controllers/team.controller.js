/**
 * Team Controller
 * 
 * Handles team formation and membership management.
 * Uses rule-based matching by skills and availability (no AI).
 * 
 * Planned methods:
 *   getAllTeams(req, res)  — List all teams
 *   getTeamById(req, res) — Get team details + members
 *   createTeam(req, res)  — Create a new team
 *   findMatches(req, res) — Find matching teams/members by skills
 *   joinTeam(req, res)    — Add current user to team
 *   leaveTeam(req, res)   — Remove current user from team
 * 
 * @owner Team Member 7 — Teams & Dashboard
 */

// const Team = require('../models/Team');
// const matchingService = require('../services/matching.service');

const getAllTeams = async (req, res) => {
  // TODO: Fetch all teams
  res.status(501).json({ message: 'Get all teams not implemented yet' });
};

const getTeamById = async (req, res) => {
  // TODO: Fetch team by ID with populated members
  res.status(501).json({ message: 'Get team not implemented yet' });
};

const createTeam = async (req, res) => {
  // TODO: Create new team
  res.status(501).json({ message: 'Create team not implemented yet' });
};

const findMatches = async (req, res) => {
  // TODO: Use matchingService to find compatible teams/members
  res.status(501).json({ message: 'Find matches not implemented yet' });
};

const joinTeam = async (req, res) => {
  // TODO: Add user to team
  res.status(501).json({ message: 'Join team not implemented yet' });
};

const leaveTeam = async (req, res) => {
  // TODO: Remove user from team
  res.status(501).json({ message: 'Leave team not implemented yet' });
};

module.exports = { getAllTeams, getTeamById, createTeam, findMatches, joinTeam, leaveTeam };
