document.getElementById('projectForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const data = {
    name: event.target.name.value.trim(),
    description: event.target.description.value.trim(),
    status: event.target.status.value === 'Completed' ? 'Completed' : 'Ongoing', // enforce only Ongoing or Completed
  };

  try {
    const response = await fetch('http://localhost:5000/api/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert('Project submitted successfully!');
      event.target.reset();
      await loadProjects();
    } else {
      const errorData = await response.json();
      alert('Failed to submit project: ' + (errorData.message || response.status));
    }
  } catch (error) {
    alert('Error submitting project.');
    console.error(error);
  }
});

async function loadProjects() {
  try {
    const res = await fetch('http://localhost:5000/api/projects');
    if (!res.ok) throw new Error('Failed to fetch projects');

    const projects = await res.json();
    const projectList = document.getElementById('projectList');
    projectList.innerHTML = '';

    projects.forEach(project => {
      const id = project.id || project._id;
      const status = project.status === 'Completed' ? 'Completed' : 'Ongoing'; // normalize

      const projectDiv = document.createElement('div');
      projectDiv.className = 'project';
      projectDiv.innerHTML = `
        <h3>${project.name}</h3>
        <p><strong>Description:</strong> ${project.description}</p>
        <p><strong>Status:</strong> 
          <span class="status ${status === 'Completed' ? 'completed' : 'ongoing'}">
            ${status}
          </span>
        </p>
        <div class="buttons">
          <button class="update-btn" onclick="updateProject('${id}', '${project.name}', '${project.description}',
           '${status}')">Update</button>
          <button class="complete-btn" onclick="toggleStatus('${id}', '${status}')">
            ${status === 'Completed' ? 'Mark as Ongoing' : 'Mark as Complete'}
          </button>
          <button class="delete-btn" onclick="deleteProject('${id}')">Delete</button>
        </div>
      `;
      projectList.appendChild(projectDiv);
    });
  } catch (err) {
    console.error(err);
  }
}

async function deleteProject(id) {
  if (!confirm('Are you sure you want to delete this project?')) return;
  try {
    const res = await fetch(`http://localhost:5000/api/projects/${id}`, { method: 'DELETE' });
    if (res.ok) {
      await loadProjects();
    } else {
      alert('Failed to delete project');
    }
  } catch (err) {
    console.error(err);
  }
}

async function toggleStatus(id, currentStatus) {
  const newStatus = currentStatus === 'Completed' ? 'Ongoing' : 'Completed';

  try {
    const res = await fetch(`http://localhost:5000/api/projects/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus }),
    });
    if (res.ok) {
      await loadProjects();
    } else {
      alert('Failed to update project status');
    }
  } catch (err) {
    console.error(err);
  }
}

async function updateProject(id, currentName, currentDesc, currentStatus) {
  const name = prompt('Update Project Name:', currentName);
  const description = prompt('Update Project Description:', currentDesc);
  const status = prompt('Update Project Status (Ongoing or Completed):', currentStatus);

  if (!name || !description || !status) return;

  const normalizedStatus = status === 'Completed' ? 'Completed' : 'Ongoing';

  try {
    const res = await fetch(`http://localhost:5000/api/projects/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description, status: normalizedStatus }),
    });
    if (res.ok) {
      await loadProjects();
    } else {
      alert('Failed to update project');
    }
  } catch (err) {
    console.error(err);
  }
}

document.addEventListener('DOMContentLoaded', loadProjects);
