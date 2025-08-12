const projectServices = require('../services/projectServices');

const getAll = (req, res) => {
const result = projectServices.getAllProjects();
res.json(result);
};

const getOne = (req, res) => {
const id = parseInt(req.params.id);
const project = projectServices.getProjectById(id);
if (!project) return res.status(404).json({ message: 'project not found' });
res.json(project);
};

const create = (req, res) => {
const { name, description, status } = req.body;
if (!name || !description  || !status) return res.status(400).json({ message: 'Missing data' });
const newproject = projectServices.addProject(name, description, status);
res.status(201).json(newproject);
};

const remove = (req, res) => {
const id = parseInt(req.params.id);
const deleted = projectServices.deleteProject(id);
if (!deleted) return res.status(404).json({ message: 'project not found' });
res.json({ message: 'project deleted' });
};

const update = (req, res) => {
 const id = parseInt(req.params.id);
 const updatedData = req.body;

 const updatedProject = projectServices.updatedProject(id,updatedData);
 if(!updatedProject) return res.status(404).json({message: 'project not found'});
 res.json(updatedProject);
};

module.exports = {
getAll,
getOne,
create,
remove,
update,
};
