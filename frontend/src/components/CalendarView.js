import React from "react";

function CalendarView() {
    const projects = [
        { date: "2025-10-10", title: "Roof Repair" },
        { date: "2025-10-12", title: "Elevator Maintenance" },
        { date: "2025-10-15", title: "Lobby Renovation" },
    ];

    return (
        <div>
            <h2>Calendar View</h2>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <strong>{project.date}</strong> — {project.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CalendarView;
