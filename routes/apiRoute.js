const router = require('express').Router();
const db = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (req, res) => {
    let results = db;
    res.json(results);

    router.post('/notes', (req, res) => {
        req.body.id = uuidv4;
        const newNote = makeNewNote(req.body, notes);
        res.json(newNote);
    });

    
})

module.exports = router;