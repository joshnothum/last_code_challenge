var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var port = process.env.PORT || 7000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('server/public'));

/** ---------- EXPRESS ROUTES ---------- **/

/** ---------- MONGOOSE ------------ **/
var mongoose = require('mongoose');

var databaseUrl = 'mongodb://localhost:27017/lastchallenge';

mongoose.connection.on('connected', function () {
    console.log('mongoose is connected!', databaseUrl);
});

mongoose.connection.on('error', function () {
    console.log('mongoose connection failed', err);
});
mongoose.connect(databaseUrl);
// Eventually, the mongoose code should be in a module



/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('We are rocking out on port: ', port);
});