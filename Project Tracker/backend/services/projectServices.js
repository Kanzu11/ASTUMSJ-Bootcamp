const Project = require("../models/project");

const getAllProjects = async () => {
  return await Project.find();
};
const getProjectById = async (id) => {
  return await Project.findById(id);
};

const addProject = async (name, description, status) => {
  const newProject = new Project({ name, description, status });
  return await newProject.save();
};

const deleteProject = async (id) => {
  const result = await Project.findByIdAndDelete(id);
  return result !== null;
};

const updatedProject = async (id, updatedData) => {
  return await Project.findByIdAndUpdate(id, updatedData, { new: true });
};

module.exports = {
  getAllProjects,
  getProjectById,
  addProject,
  deleteProject,
  updatedProject,
};
