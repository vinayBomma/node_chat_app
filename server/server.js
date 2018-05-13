const path = require('path');
const http = require('http')
const express = require('express');
const socket = require('socket.io');

const publicPath = path.join(__dirname , '../public');
const port = process.env.PORT || 3000;

let app = express();
let server = http.createServer(app);
let io = socket(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New User Connected');

    socket.on('disconnect', (socket) => {
        console.log('New User Disconnected');
    })
});

server.listen(port, () => {
    console.log(`Server is up on ${port}`)
});