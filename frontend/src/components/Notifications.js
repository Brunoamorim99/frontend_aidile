import React, { useEffect, useState } from 'react';


function Notifications() {
const [notifications, setNotifications] = useState([]);


useEffect(() => {
fetch('http://localhost:5000/notifications')
.then(res => res.json())
.then(data => setNotifications(data));
}, []);


return (
<div>
<h2>Notifications</h2>
<ul>
{notifications.map(note => (
<li key={note.id}>{note.message}</li>
))}
</ul>
</div>
);
}


export default Notifications;