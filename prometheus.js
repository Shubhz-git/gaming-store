const express = require('express');
const client = require('prom-client');

const router = express.Router();
const collectDefaultMetrics = client.collectDefaultMetrics;

collectDefaultMetrics();

const requestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests'
});

router.use((req, res, next) => {
  requestCounter.inc();
  next();
});

router.get('/', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

module.exports = router;
