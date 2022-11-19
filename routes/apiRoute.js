const router = require('express').Router();
const db = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');
const {refreshDb, makeNewNote} = require('../notes')
const fs = require('fs');

router.get('/notes', (req, res) => {
    fs.readFile('../db/db.json', 'utf-8', function(err, data) {
        if (err) {
            res.status(500).json(err)
            return
        }
        const json = JSON.parse(data)
        res.json(json)
    })   
});

router.post('/notes', (req, res) => {
    req.body.id = uuidv4();
    const newNote = makeNewNote(req.body, notes);
    res.json(newNote);
});    

router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    let notes

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