/**
 * Review Routes
 * 
 * Manages peer reviews on projects.
 * Reviews include a rating (1-5), written feedback, and reviewer info.
 * 
 * Planned endpoints:
 *   GET    /api/reviews/project/:projectId — Get reviews for a project
 *   POST   /api/reviews                    — Submit a review
 *   PUT    /api/reviews/:id                — Update a review
 *   DELETE /api/reviews/:id                — Delete a review
 * 
 * @owner Team Member 6 — GitHub & Reviews
 */

const express = require('express');
const router = express.Router();
// const reviewController = require('../controllers/review.controller');

// TODO: Implement review routes
// router.get('/project/:projectId', reviewController.getProjectReviews);
// router.post('/', authMiddleware, reviewController.createReview);
// router.put('/:id', authMiddleware, reviewController.updateReview);
// router.delete('/:id', authMiddleware, reviewController.deleteReview);

module.exports = router;
