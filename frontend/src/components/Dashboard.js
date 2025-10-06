import React, { useState } from "react";

function Dashboard() {
    const [projects, setProjects] = useState([
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

    const [newTitle, setNewTitle] = useState("");
    const [newDetails, setNewDetails] = useState("");
    const [newDate, setNewDate] = useState("");

    const addProject = (e) => {
        e.preventDefault();
        if (!newTitle || !newDetails || !newDate) return;
        const newProject = {
            id: projects.length + 1,
            title: newTitle,
            details: newDetails,
            date: newDate,
        };
        setProjects([...projects, newProject]);
        setNewTitle("");
        setNewDetails("");
        setNewDate("");
    };

    return (
        <div>
            <h2>Dashboard</h2>

            <form
                onSubmit={addProject}
                style={{ marginBottom: "20px" }}>
                <input
                    type='text'
                    placeholder='Project Title'
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    style={{ marginRight: "10px" }}
                />
                <input
                    type='text'
                    placeholder='Project Details'
                    value={newDetails}
                    onChange={(e) => setNewDetails(e.target.value)}
                    style={{ marginRight: "10px" }}
                />
                <input
                    type='date'
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    style={{ marginRight: "10px" }}
                />
                <button type='submit'>Add Project</button>
            </form>

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
