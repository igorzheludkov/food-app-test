const express = require('express'); 
const config = require('config');
const mongoose = require('mongoose');

const app = express()

app.use('/', require('./routes/routes.js'))
app.use(express.json())

const PORT = config.get('port') || 3000

async function start () {
    try {
        await mongoose.connect(config.get('mongoUrl'))
        app.listen(PORT, ()=> {console.log(`App has been started on port ${PORT}`);})
    } catch (e) {
        console.log('Server error', e.message);
        process.exit(1)
    }
}

start()