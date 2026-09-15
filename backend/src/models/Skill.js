/**
 * Skill Model — PLACEHOLDER
 * 
 * Mongoose schema for tracking user skills and proficiency levels.
 * 
 * Suggested fields:
 *   - user: Reference to User who owns this skill
 *   - name: Skill name (e.g., "Python", "React", "Docker")
 *   - category: Skill category (e.g., "Language", "Framework", "Tool")
 *   - proficiency: Proficiency level 0-100 (displayed as progress bar)
 *   - endorsements: Number of peer endorsements
 *   - assessmentScore: Score from coding assessments (if applicable)
 * 
 * Example usage:
 *   { user: "userId", name: "Python", category: "Language", proficiency: 82 }
 * 
 * @owner Team Member 2 — Skill Profiles
 */

const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema(
  {
    // TODO: Define schema fields following the User model pattern
    // See User.js for reference on field definitions, validation, and indexes
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Skill', skillSchema);
