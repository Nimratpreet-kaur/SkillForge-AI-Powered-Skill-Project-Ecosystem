/**
 * Project Controller
 * 
 * Handles project portfolio CRUD operations.
 * Projects showcase completed work with descriptions, tech stack, and links.
 * 
 * Planned methods:
 *   getAllProjects(req, res)  — List projects with pagination/filtering
 *   getProjectById(req, res) — Get single project details
 *   createProject(req, res)  — Create a new project entry
 *   updateProject(req, res)  — Update project details
 *   deleteProject(req, res)  — Remove a project
 * 
 * @owner Team Member 3 — Project Portfolio
 */

// const Project = require('../models/Project');

const getAllProjects = async (req, res) => {
  // TODO: Fetch all projects with pagination
  res.status(501).json({ message: 'Get all projects not implemented yet' });
};

const getProjectById = async (req, res) => {
  // TODO: Fetch project by req.params.id
  res.status(501).json({ message: 'Get project not implemented yet' });
};

const createProject = async (req, res) => {
  // TODO: Create new project
  res.status(501).json({ message: 'Create project not implemented yet' });
};

const updateProject = async (req, res) => {
  // TODO: Update project
  res.status(501).json({ message: 'Update project not implemented yet' });
};

const deleteProject = async (req, res) => {
  // TODO: Delete project
  res.status(501).json({ message: 'Delete project not implemented yet' });
};

module.exports = { getAllProjects, getProjectById, createProject, updateProject, deleteProject };
