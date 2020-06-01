// import '@babel/polyfill';
import express from 'express';
import http from 'http';
import path from 'path';
import run from 'app-node';
import cors from 'cors';
import bodyParser from 'body-parser';
import authExpress from './express';
import { init as dbinit } from './db';

const port = process.env.PORT || 4003;
const app = express();
app.use(cors());

app.use((req, res, next) => {
  if (!req.secure && req.hostname === 'sawarikinbech.com' && req.get('X-Forwarded-Proto') === 'http') {
    res.redirect(301, `https://${req.get('Host')}${req.url}`);
  } else {
    next();
  }
});

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(bodyParser.json({ limit: '10mb', extended: true }));
const server = http.createServer(app);
run(async () => {
  await dbinit();
  authExpress(app);
  console.log(`server started at port ${port}`);
  server.listen(port);
});
