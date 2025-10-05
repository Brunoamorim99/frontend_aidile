import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import CalendarView from "./components/CalendarView";
import Notifications from "./components/Notifications";

function App() {
    const [page, setPage] = useState("dashboard");

    return (
        <div>
            <Navbar setPage={setPage} />
            {page === "dashboard" && <Dashboard />}
            {page === "calendar" && <CalendarView />}
            {page === "notifications" && <Notifications />}
        </div>
    );
}

export default App;
