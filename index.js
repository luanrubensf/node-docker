const express = require('express');
const redis = require('redis');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

const redisClient = redis.createClient({
    host: 'localhost',
    port: 6379
});

redisClient.set('visits', 0);

app.get('/', (req, res) => {
    redisClient.get('visits', (err, visits) => {
        res.send('Number of visits is: ' + visits);
        redisClient.set('visits', parseInt(visits) + 1);
    });
});

app.listen(PORT, HOST, () => {
    console.log('Listening on port 3000...');
});
