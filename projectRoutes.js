const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const {
  createProject,
  getProjects,
  updateProject,
  deleteProject
} = require('../controllers/projectController');

// Log when each route is accessed
router.post('/', auth, (req, res, next) => {
  console.log('[POST] /projects accessed');
  next();
}, createProject);

router.get('/', auth, (req, res, next) => {
  console.log('[GET] /projects accessed');
  next();
}, getProjects);

router.put('/:id', auth, (req, res, next) => {
  console.log('[PUT] /projects/:id accessed');
  next();
}, updateProject);

router.delete('/:id', auth, (req, res, next) => {
  console.log('[DELETE] /projects/:id accessed');
  next();
}, deleteProject);

module.exports = router;
