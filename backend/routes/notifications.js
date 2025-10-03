const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
res.json([{ id: 1, message: 'Elevator Maintenance tomorrow at 9AM' }]);
});


module.exports = router;