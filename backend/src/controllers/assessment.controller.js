/**
 * Assessment Controller
 * 
 * Handles coding assessments and code execution.
 * Integrates with the Piston API for safe code execution.
 * 
 * Piston API: https://emkc.org/api/v2/piston
 * - Supports 60+ programming languages
 * - Free, no API key required
 * - Provides sandboxed execution environment
 * 
 * Planned methods:
 *   getAllAssessments(req, res) — List available coding challenges
 *   getAssessmentById(req, res) — Get challenge details + test cases
 *   submitCode(req, res)        — Execute code via Piston API, check results
 *   getResults(req, res)        — Get previous submission results
 * 
 * @owner Team Member 5 — Coding Assessments
 */

// const Assessment = require('../models/Assessment');
// const pistonService = require('../services/piston.service');

const getAllAssessments = async (req, res) => {
  // TODO: Fetch all assessments
  res.status(501).json({ message: 'Get all assessments not implemented yet' });
};

const getAssessmentById = async (req, res) => {
  // TODO: Fetch assessment by ID
  res.status(501).json({ message: 'Get assessment not implemented yet' });
};

const submitCode = async (req, res) => {
  // TODO: Send code to Piston API, compare output with test cases
  res.status(501).json({ message: 'Submit code not implemented yet' });
};

const getResults = async (req, res) => {
  // TODO: Fetch submission results
  res.status(501).json({ message: 'Get results not implemented yet' });
};

module.exports = { getAllAssessments, getAssessmentById, submitCode, getResults };
