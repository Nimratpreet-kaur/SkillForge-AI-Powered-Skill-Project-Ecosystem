/**
 * Review Controller
 * 
 * Handles peer review operations.
 * Reviews include ratings (1-5 stars), written feedback, and skill endorsements.
 * 
 * Planned methods:
 *   getProjectReviews(req, res) — Get all reviews for a project
 *   createReview(req, res)      — Submit a new review
 *   updateReview(req, res)      — Edit a review
 *   deleteReview(req, res)      — Remove a review
 * 
 * @owner Team Member 6 — GitHub & Reviews
 */

// const Review = require('../models/Review');

const getProjectReviews = async (req, res) => {
  // TODO: Fetch reviews by projectId
  res.status(501).json({ message: 'Get project reviews not implemented yet' });
};

const createReview = async (req, res) => {
  // TODO: Create new review
  res.status(501).json({ message: 'Create review not implemented yet' });
};

const updateReview = async (req, res) => {
  // TODO: Update review
  res.status(501).json({ message: 'Update review not implemented yet' });
};

const deleteReview = async (req, res) => {
  // TODO: Delete review
  res.status(501).json({ message: 'Delete review not implemented yet' });
};

module.exports = { getProjectReviews, createReview, updateReview, deleteReview };
