/**
 * Certification Model — PLACEHOLDER
 * 
 * Mongoose schema for user certifications and badges.
 * 
 * Suggested fields:
 *   - user: Reference to User who earned this certification
 *   - title: Certification name (e.g., "Python Fundamentals")
 *   - issuer: Who issued the cert (e.g., "SkillForge", "External")
 *   - description: Brief description of the certification
 *   - dateEarned: When the certification was earned
 *   - expiryDate: Expiration date (if applicable)
 *   - credentialUrl: Link to verify the certification
 *   - badgeImage: URL to badge/icon image
 *   - type: Type of certification ("assessment", "course", "external")
 * 
 * @owner Team Member 4 — Certifications
 */

const mongoose = require('mongoose');

const certificationSchema = new mongoose.Schema(
  {
    // TODO: Define schema fields following the User model pattern
    // See User.js for reference on field definitions, validation, and indexes
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Certification', certificationSchema);
