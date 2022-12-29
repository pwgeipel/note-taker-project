const express = require("express");
const htmlRoute = require('./routes/htmlRoute');
const apiRoute = require('./routes/apiRoute');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"))

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use('/api', apiRoute);
app.use('/', htmlRoute);

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
  })