/**
 * Review Model — PLACEHOLDER
 * 
 * Mongoose schema for peer reviews on projects.
 * 
 * Suggested fields:
 *   - reviewer: Reference to User who wrote the review
 *   - project: Reference to the Project being reviewed
 *   - rating: Numeric rating (1-5)
 *   - title: Review title/summary
 *   - content: Detailed review text
 *   - skillEndorsements: Array of skills endorsed in this review
 *   - helpful: Number of "helpful" votes from other users
 * 
 * @owner Team Member 6 — GitHub & Reviews
 */

const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    // TODO: Define schema fields following the User model pattern
    // See User.js for reference on field definitions, validation, and indexes
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Review', reviewSchema);
