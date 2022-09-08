const express = require('express')
const app = express();
const port = 3000;
// const fs = require('fs');
const { dirname } = require('path');
const path = require('path')

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})
app.use('/about', express.static(path.join(__dirname, './about.html')))
app.use('/contact', express.static('./contact.html'))


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})