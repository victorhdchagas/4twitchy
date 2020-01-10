import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
// import socketio from 'socket.io';
import cors from 'cors';



const app = express();

app.use(bodyParser.json());
app.use(cors());
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

const config = require('./config/index');
import bot from "./src/bot.js";
const webserver = require("./src/webserver")




const server = app.listen(config.server.defaultPort, () => { console.log(`\tServer Started at port ${config.server.defaultPort}`) });
const sio = require("socket.io")(server);
sio.origins(['*:*', '*']);


bot(sio);