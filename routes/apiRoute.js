const router = require('express').Router();
const db = require('../db/db.json');

router.get('/notes', (req, res) => {
    res.send(db)
    console.log(db)
})

module.exports = router;