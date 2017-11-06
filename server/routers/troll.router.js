var express = require('express');
var router = express.Router();
// Make sure to Google mongoose when looking for resources
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TrollSchema = new Schema({ name: String, message: String });
// Mongoose gives us an object that has properties we
// can use to talk to the database.
var Troll = mongoose.model('troll', RentSchema, 'trolls');

router.post('/', function (req, res) {
    console.log(req.body);
    var trollToAdd = new Troll(req.body);

    trollToAdd.save(function (err, data) {
        if(err){
        console.log('trolls are not having a great time in here:', err);
        }else{
            res.sendStatus(500);
        }
    });//end of trollToAdd
    
});//end of post