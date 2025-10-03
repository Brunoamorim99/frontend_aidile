const express = require('express');
const router = express.Router();


router.post('/login', (req, res) => {
res.json({ token: 'fake-jwt-token', user: { role: 'resident' }});
});


module.exports = router;