var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TrollSchema = new Schema({ name: String, message: String });

var Troll = mongoose.model('troll', TrollSchema, 'trolls');

router.post('/', function (req, res) {
    console.log(req.body);
    var trollToAdd = new Troll(req.body);

    trollToAdd.save(function (err, data) {
        if(err){
        console.log('trolls are not having a great time in here:', err);
        }else{
            res.sendStatus(200);
        }
    });//end of trollToAdd
    
});//end of post

router.get('/', function (req, res) {
    Troll.find({}, function (err, foundTrolls) {
        if (err) {
            console.log('Oh, No!:', err);
            res.sentStatus(501);
        } else {
            console.log(foundTrolls);
            res.send(foundTrolls);

        }//end of if/else
    });//

});//end of router.get

router.delete('/:id', function (req, res) {
    console.log(req.params);
    var TrollId = req.params.id;

    Troll.findByIdAndRemove({ "_id": TrollId }, function (err, data) {

        if (err) {
            console.log('Oh, No! We got issues in the delete route:', err);
            res.sentStatus(501);
        } else {
            res.send(200);

        }//end of if/else
    });//end of findByIdAndRemove

});//end of router.delete

module.exports = router;