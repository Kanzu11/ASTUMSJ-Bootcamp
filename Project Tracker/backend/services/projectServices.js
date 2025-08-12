let projects = require('../data/projectData');
const getAllProjects = () => projects;
const getProjectById = (id) => projects.find(s => s.id === id);

const addProject = (name, description, status) => {
const newProject = {
id: projects.length + 1,
name,
description,
status
};
projects.push(newProject);
return newProject;
};

const deleteProject = (id) => {
const initialLength = projects.length;
projects = projects.filter(s => s.id !== id);
return projects.length < initialLength;
};

const updatedProject = (id, updatedData) =>{

    const project = projects.find(p => p.id === Number(id));
    if(!project) return null;

    Object.assign(project, updatedData);
    return project;
}

module.exports = {
getAllProjects,
getProjectById,
addProject,
deleteProject,
updatedProject
};
