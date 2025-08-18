const projectServices = require('../services/projectServices');

const getAll = async (req, res) => {
  try {
    const result = await projectServices.getAllProjects();
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch projects', error: err.message });
  }
};

const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const project = await projectServices.getProjectById(id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch project', error: err.message });
  }
};


const create = async (req, res) => {
  try {
    const { name, description, status } = req.body;
    if (!name || !description) {
      return res.status(400).json({ message: 'Missing required data' });
    }
    const newProject = await projectServices.addProject(name, description, status);
    res.status(201).json(newProject);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create project', error: err.message });
  }
};

const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await projectServices.deleteProject(id);
    if (!deleted) return res.status(404).json({ message: 'Project not found' });
    res.json({ message: 'Project deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete project', error: err.message });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;

    const updatedProject = await projectServices.updatedProject(id, updatedData);
    if (!updatedProject) return res.status(404).json({ message: 'Project not found' });
    res.json(updatedProject);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update project', error: err.message });
  }
};

module.exports = {
  getAll,
  getOne,
  create,
  remove,
  update,
};
