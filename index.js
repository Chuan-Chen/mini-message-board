const express = require('express');
const spdy = require('spdy')
const cors = require("cors");
const fs = require('fs');
const postRoute = require('./src/router/postRoute.js')
const port = 3000;
const app = express();
const posts = require('./src/data/messages.js');

const CERT_DIR = './cert'

app.use(cors());

app.set('view engine', 'pug');
app.set('views', './src/views');

app.use('/', postRoute);

app.get('/stream', async (req, res) => {
    console.log("data requested.")
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();
    console.log("posting data")
    res.write(`data: ${JSON.stringify(await posts.get())} \n\n`);
    req.on('close', () => {
        res.end();
    })
})


/*
const server = spdy.createServer({
    key: fs.readFileSync(`${CERT_DIR}/server.key`),
    cert: fs.readFileSync(`${CERT_DIR}/server.cert`),
}, app);
*/
app.listen(port, ()=>{
    console.log(`listening on http://localhost:${port}`)
});