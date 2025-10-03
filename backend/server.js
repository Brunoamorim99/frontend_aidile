const express = require('express');
const cors = require('cors');


const authRoutes = require('./routes/auth');
const projectRoutes = require('./routes/projects');
const notificationRoutes = require('./routes/notifications');


const app = express();
app.use(cors());
app.use(express.json());


app.use('/auth', authRoutes);
app.use('/projects', projectRoutes);
app.use('/notifications', notificationRoutes);


app.listen(5000, () => console.log('Backend running on http://localhost:5000'));