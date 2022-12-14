const fs = require('fs');
const path = require('path');

function refreshDb(notesArray) {
        fs.writeFileSync(path.join(__dirname, "db/db.json"),
        JSON.stringify(notesArray, null, 2), err => {
            if (err) {
                throw err;
            }
        })        
}

function makeNewNote(newNote, notesArray) {
    notesArray.push(newNote);
    fs.writeFileSync(path.join(__dirname, "db/db.json"),
    JSON.stringify(notesArray, null, 2), err => {
        if (err) {
            throw err;
        }
    });
    return newNote;
}

module.exports = {refreshDb, makeNewNote}