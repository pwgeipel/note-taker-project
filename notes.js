const fs = require('fs');
const path = require('path');

function refreshDb(deleteNote, notesArray) {
    const deleteNote = deleteNote;
    for (let i = 0; i , notesArray.length; i++) {
        notesArray.splice(i, 1);
        fs.writeFileSync(path.join(__dirname, "db/db.json"),
        JSON.stringify({notes: notesArray}, null, 2), err => {
            if (err) {
                throw err;
            }
        })
        
    }
}

function makeNewNote(newNote, notesArray) {
    const newNote = newNote;
    fs.writeFileSync(path.join(__dirname, "db/db.json"),
    JSON.stringify({notes: notesArray}, null, 2));
    return newNote;
}

module.exports = {refreshDb, makeNewNote}