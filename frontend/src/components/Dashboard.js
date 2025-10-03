import React, { useEffect, useState } from 'react';


function Dashboard() {
const [projects, setProjects] = useState([]);


useEffect(() => {
fetch('http://localhost:5000/projects')
.then(res => res.json())
.then(data => setProjects(data));
}, []);


return (
<div>
<h2>Dashboard</h2>
<ul>
{projects.map(project => (
<li key={project.id}>
<strong>{project.title}</strong> — {project.details} ({project.date})
</li>
))}
</ul>
</div>
);
}


export default Dashboard;