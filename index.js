import express from 'express';
import bodyParser from 'body-parser';
import config from './config/index';
import datasource from './config/datasource';
import cors from 'cors';
import bot from "./src/bot.js";


const app = express();

app.config = config.database;

app.datasource = datasource(app);

app.use(bodyParser.json());
app.use(cors());
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});





const server = app.listen(config.server.defaultPort, () => { console.log(`\tServer Started at port ${config.server.defaultPort}`) });
const sio = require("socket.io")(server);
sio.origins(['*:*', '*']);


bot(app, sio);