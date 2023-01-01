const router = require('express').Router();
const db = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');
const {refreshDb, makeNewNote} = require('../notes')
const fs = require('fs');

router.get('/notes', (req, res) => {
    res.json(db); 
});

router.post('/notes', (req, res) => {
    req.body.id = uuidv4();
    const newNote = makeNewNote(req.body, db);
    res.json(newNote);
});    

router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    let note

    db.map((element, index) => {
        if (element.id == id) {
            note = element;
            db.splice(index, 1);
            refreshDb(db);
            return res.json(note);
        }
    })
});

module.exports = router;