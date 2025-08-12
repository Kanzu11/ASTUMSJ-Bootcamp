document.getElementById('projectForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const data = {
    name: event.target.name.value.trim(),
    description: event.target.description.value.trim(),
    status: event.target.status.value,
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
      const projectDiv = document.createElement('div');
      projectDiv.innerHTML = 
      `<h3>${project.name}</h3>
        <p><strong>Description:</strong> ${project.description}</p>
        <p><strong>Status:</strong> ${project.status}</p>
      `
      projectList.appendChild(projectDiv);
    });
  } catch (err) {
    console.error(err);
  }
}

document.addEventListener('DOMContentLoaded', loadProjects);