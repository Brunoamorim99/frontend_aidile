const express = require('express');
const router = express.Router();


let projects = [
{ id: 1, title: 'Elevator Maintenance', date: '2025-10-05', details: 'Routine check' },
];


router.get('/', (req, res) => res.json(projects));


router.post('/', (req, res) => {
const newProject = req.body;
projects.push(newProject);
res.json(newProject);
});


module.exports = router;