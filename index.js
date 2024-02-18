const express = require('express');
const cors = require("cors");
const postRoute = require('./src/router/postRoute.js')
const port = 3000;
const app = express();
app.use(cors());

app.set('view engine', 'pug');
app.set('views', './src/views');



app.use('/', postRoute);

app.listen(port, ()=>{
    console.log(`listening on http://localhost:${port}`)
});