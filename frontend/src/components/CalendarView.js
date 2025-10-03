import React, { useEffect, useState } from 'react';


function CalendarView() {
const [projects, setProjects] = useState([]);


useEffect(() => {
fetch('http://localhost:5000/projects')
.then(res => res.json())
.then(data => setProjects(data));
}, []);


return (
<div>
<h2>Calendar</h2>
<div>
{projects.map(project => (
<div key={project.id}>
📅 {project.date} — {project.title}
</div>
))}
</div>
</div>
);
}


export default CalendarView;