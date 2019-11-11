const express = require('express');
const redis = require('redis');
const bodyParser = require('body-parser');
const uuidV4 = require('uuid/v4');
const async = require('async');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();
app.use(bodyParser.json());

const redisClient = redis.createClient({
    host: 'redis-server', //ou localhost ou 'redis-server'
    port: 6379
});

app.get('/', (req, res) => {
    redisClient.keys('*', function (err, keys) {
        if (err) { 
            return console.log(err);
        }
        if(keys){
            async.map(keys, function(key, cb) {
                redisClient.get(key, function (error, value) {
                    if (error) { 
                        return cb(error);
                    }
                    cb(null, JSON.parse(value));
                }); 
            }, function (error, results) {
               if (error) {
                   return console.log(error);
               }
               console.log(results);
               res.json({data:results});
            });
        }
    });
});

app.post('/', (req, res) => {
    const body = req.body;
    body.id = uuidV4();
    redisClient.set(body.id, JSON.stringify(body));
    res.send(body);    
});

app.listen(PORT, HOST, () => {
    console.log('Listening on port 3000...');
});
