const express = require('express'); 
const config = require('config');
const mongoose = require('mongoose');

const app = express()

app.use('/', require('./routes/routes.js'))
app.use(express.json())

let port = process.env.PORT
if (port == null || port == "") {
  port = 5000
}

async function start () {
    try {
        await mongoose.connect(config.get('mongoUrl'))
        app.listen(port, ()=> {console.log(`App has been started on port ${port}`);})
    } catch (e) {
        console.log('Server error', e.message);
        process.exit(1)
    }
}

start()