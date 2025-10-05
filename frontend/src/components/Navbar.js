import React from "react";

function Navbar({ setPage, currentPage }) {
    return (
        <nav className='navbar'>
            <h1 className='app-title'>Aidile Construction Tracker</h1>
            <div className='nav-links'>
                <button
                    className={currentPage === "dashboard" ? "active" : ""}
                    onClick={() => setPage("dashboard")}>
                    Dashboard
                </button>
                <button
                    className={currentPage === "calendar" ? "active" : ""}
                    onClick={() => setPage("calendar")}>
                    Calendar
                </button>
                <button
                    className={currentPage === "notifications" ? "active" : ""}
                    onClick={() => setPage("notifications")}>
                    Notifications
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
