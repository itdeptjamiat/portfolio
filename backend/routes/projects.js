const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// GET /api/projects - Get all projects with optional filtering
router.get('/', async (req, res) => {
  try {
    const {
      category,
      technology,
      featured,
      status,
      search,
      limit = 20,
      page = 1
    } = req.query;

    // Build filter object
    const filter = {};

    if (category) {
      filter.category = category;
    }

    if (featured !== undefined) {
      filter.featured = featured === 'true';
    }

    if (status) {
      filter.status = status;
    }

    if (technology) {
      filter.technologies = { $in: [technology] };
    }

    // Build search query
    let searchQuery = {};
    if (search) {
      searchQuery = {
        $or: [
          { name: { $regex: search, $options: 'i' } },
          { description: { $regex: search, $options: 'i' } },
          { shortDescription: { $regex: search, $options: 'i' } },
          { technologies: { $in: [new RegExp(search, 'i')] } }
        ]
      };
    }

    // Combine filters
    const finalFilter = { ...filter, ...searchQuery };

    // Calculate pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);

    // Get projects with pagination
    const projects = await Project.find(finalFilter)
      .sort({ featured: -1, createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    // Get total count for pagination
    const total = await Project.countDocuments(finalFilter);

    res.json({
      success: true,
      data: projects,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch projects',
      error: error.message
    });
  }
});

// GET /api/projects/featured - Get featured projects
router.get('/featured', async (req, res) => {
  try {
    const projects = await Project.find({ featured: true })
      .sort({ createdAt: -1 })
      .limit(6);

    res.json({
      success: true,
      data: projects
    });
  } catch (error) {
    console.error('Error fetching featured projects:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch featured projects',
      error: error.message
    });
  }
});

// GET /api/projects/categories - Get available categories
router.get('/categories', async (req, res) => {
  try {
    const categories = await Project.distinct('category');
    res.json({
      success: true,
      data: categories
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch categories',
      error: error.message
    });
  }
});

// GET /api/projects/technologies - Get available technologies
router.get('/technologies', async (req, res) => {
  try {
    const technologies = await Project.distinct('technologies');
    res.json({
      success: true,
      data: technologies.sort()
    });
  } catch (error) {
    console.error('Error fetching technologies:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch technologies',
      error: error.message
    });
  }
});

// GET /api/projects/:id - Get single project
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    res.json({
      success: true,
      data: project
    });
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch project',
      error: error.message
    });
  }
});

// POST /api/projects - Create new project (Admin only)
router.post('/', async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();

    res.status(201).json({
      success: true,
      message: 'Project created successfully',
      data: project
    });
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(400).json({
      success: false,
      message: 'Failed to create project',
      error: error.message
    });
  }
});

// PUT /api/projects/:id - Update project (Admin only)
router.put('/:id', async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    res.json({
      success: true,
      message: 'Project updated successfully',
      data: project
    });
  } catch (error) {
    console.error('Error updating project:', error);
    res.status(400).json({
      success: false,
      message: 'Failed to update project',
      error: error.message
    });
  }
});

// DELETE /api/projects/:id - Delete project (Admin only)
router.delete('/:id', async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    res.json({
      success: true,
      message: 'Project deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting project:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete project',
      error: error.message
    });
  }
});

module.exports = router;
