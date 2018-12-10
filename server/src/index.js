import '@babel/polyfill';
import { join } from 'path';
import express from 'express';
import morgan from 'morgan';
import routes from './routes';
import stateRouting from './middleware/routing.mw';
import socketIo from 'socket.io';
import http from 'http';

import configurePassport from './config/passport';
const CLIENT_PATH = join(__dirname, '../../client');

let app = express();

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', socket => {
    console.log('something');
})

app.use(morgan('dev'));
app.use(express.static(CLIENT_PATH));
app.use(express.json());

configurePassport(app);

app.use('/api', routes);

app.use(stateRouting);

let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
