/**
 * Project Model — PLACEHOLDER
 * 
 * Mongoose schema for user project portfolios.
 * 
 * Suggested fields:
 *   - owner: Reference to User who created the project
 *   - title: Project title
 *   - description: Detailed project description
 *   - techStack: Array of technologies used (e.g., ["React", "Node.js", "MongoDB"])
 *   - githubUrl: Link to GitHub repository
 *   - liveUrl: Link to deployed project
 *   - thumbnail: URL to project screenshot/thumbnail
 *   - status: Project status ("in-progress", "completed", "archived")
 *   - collaborators: Array of User references
 *   - tags: Searchable tags
 * 
 * @owner Team Member 3 — Project Portfolio
 */

const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    // TODO: Define schema fields following the User model pattern
    // See User.js for reference on field definitions, validation, and indexes
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Project', projectSchema);
