/**
 * Assessment Model — PLACEHOLDER
 * 
 * Mongoose schema for coding assessments/challenges.
 * 
 * Suggested fields:
 *   - title: Assessment title (e.g., "Two Sum", "FizzBuzz")
 *   - description: Problem description (markdown supported)
 *   - difficulty: Difficulty level ("easy", "medium", "hard")
 *   - language: Target programming language(s)
 *   - starterCode: Boilerplate code provided to the user
 *   - testCases: Array of { input, expectedOutput } for validation
 *   - timeLimit: Time limit in minutes
 *   - points: Points awarded for completion
 *   - submissions: Array of { user, code, result, submittedAt }
 * 
 * Note: Code execution is handled by the Piston API (see services/piston.service.js)
 * 
 * @owner Team Member 5 — Coding Assessments
 */

const mongoose = require('mongoose');

const assessmentSchema = new mongoose.Schema(
  {
    // TODO: Define schema fields following the User model pattern
    // See User.js for reference on field definitions, validation, and indexes
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Assessment', assessmentSchema);
