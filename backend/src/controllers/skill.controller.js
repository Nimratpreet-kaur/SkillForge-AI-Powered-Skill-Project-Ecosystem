/**
 * Skill Controller
 * 
 * Handles skill proficiency CRUD operations.
 * Skills track a user's proficiency level (0-100) in various technologies.
 * 
 * Planned methods:
 *   getUserSkills(req, res) — Get all skills for a specific user
 *   addSkill(req, res)      — Add a new skill entry
 *   updateSkill(req, res)   — Update proficiency level
 *   deleteSkill(req, res)   — Remove a skill
 * 
 * @owner Team Member 2 — Skill Profiles
 */

// const Skill = require('../models/Skill');

const getUserSkills = async (req, res) => {
  // TODO: Fetch skills by req.params.userId
  res.status(501).json({ message: 'Get user skills not implemented yet' });
};

const addSkill = async (req, res) => {
  // TODO: Create new skill entry
  res.status(501).json({ message: 'Add skill not implemented yet' });
};

const updateSkill = async (req, res) => {
  // TODO: Update skill proficiency
  res.status(501).json({ message: 'Update skill not implemented yet' });
};

const deleteSkill = async (req, res) => {
  // TODO: Delete skill entry
  res.status(501).json({ message: 'Delete skill not implemented yet' });
};

module.exports = { getUserSkills, addSkill, updateSkill, deleteSkill };
