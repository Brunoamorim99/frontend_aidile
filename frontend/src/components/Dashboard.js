import React, { useState } from "react";

function Dashboard() {
    const [projects] = useState([
        {
            id: 1,
            title: "Roof Repair",
            details: "Fix leaks and reinforce roof",
            date: "2025-10-10",
        },
        {
            id: 2,
            title: "Elevator Maintenance",
            details: "Safety inspection and servicing",
            date: "2025-10-12",
        },
        {
            id: 3,
            title: "Lobby Renovation",
            details: "Modernize building lobby",
            date: "2025-10-15",
        },
    ]);

    return (
        <div>
            <h2>Dashboard</h2>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <strong>{project.title}</strong> — {project.details} (
                        {project.date})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;
