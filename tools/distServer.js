import express from 'express';
import path from 'path';
import compression from 'compression';
import helmet from 'helmet';
import logger from 'winston';

const port = process.env.PORT || 8081;
const app = express();

app.use(helmet({
  noCache: true
}));
app.use(compression());
app.use('/healthcheck', require('express-healthcheck')());
app.get('/version', require('version-healthcheck'));

app.use(express.static('dist'));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function (err) {
  if (err) {
    logger.info(err);
  } else {
    logger.info(`Server is Running with port ${port}`);
  }
});
