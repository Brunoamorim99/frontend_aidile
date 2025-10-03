import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import CalendarView from './components/CalendarView';
import Notifications from './components/Notifications';


function App() {
return (
<div>
<Navbar />
<Dashboard />
<CalendarView />
<Notifications />
</div>
);
}


export default App;