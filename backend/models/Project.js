const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  shortDescription: {
    type: String,
    required: true,
    maxlength: 200
  },
  image: {
    type: String,
    required: true
  },
  technologies: [{
    type: String,
    required: true
  }],
  category: {
    type: String,
    enum: ['mobile', 'web', 'fullstack', 'ai', 'other'],
    default: 'mobile'
  },
  githubUrl: {
    type: String,
    required: false
  },
  liveUrl: {
    type: String,
    required: false
  },
  playStoreUrl: {
    type: String,
    required: false
  },
  appStoreUrl: {
    type: String,
    required: false
  },
  featured: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: ['completed', 'in-progress', 'planned'],
    default: 'completed'
  },
  completionDate: {
    type: Date,
    required: false
  },
  screenshots: [{
    type: String
  }],
  highlights: [{
    type: String
  }],
  client: {
    type: String,
    required: false
  },
  teamSize: {
    type: Number,
    default: 1
  },
  duration: {
    type: String,
    required: false
  },
  challenges: [{
    type: String
  }],
  solutions: [{
    type: String
  }]
}, {
  timestamps: true
});

// Add text index for search functionality
projectSchema.index({
  name: 'text',
  description: 'text',
  shortDescription: 'text',
  technologies: 'text'
});

module.exports = mongoose.model('Project', projectSchema);
