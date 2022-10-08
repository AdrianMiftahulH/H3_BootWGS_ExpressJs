// menambhakn sintaks dari package.json
const express = require('express')
const app = express();
// no port
const port = 3000;
// const fs = require('fs');
const { dirname } = require('path');
const path = require('path')

// untuk get url / dengan file index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})
// untuk get url /about dengan file about.html
app.use('/about', express.static(path.join(__dirname, './about.html')))
// untuk get url /contact dengan file /contact
app.use('/contact', express.static('./contact.html'))

// membaca prot berjalan tidak nya di terminal
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})