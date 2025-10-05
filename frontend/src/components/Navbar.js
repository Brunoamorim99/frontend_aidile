import React from "react";

function Navbar({ setPage }) {
    return (
        <nav style={{ marginBottom: "20px" }}>
            <button onClick={() => setPage("dashboard")}>Dashboard</button>
            <button onClick={() => setPage("calendar")}>Calendar</button>
            <button onClick={() => setPage("notifications")}>
                Notifications
            </button>
        </nav>
    );
}

export default Navbar;
