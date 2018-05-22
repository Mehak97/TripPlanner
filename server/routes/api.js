const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require('../models/video');
const Booking = require('../models/booking-model');

const db = "mongodb://MehakGoyal:MehakGoyal@ds227740.mlab.com:27740/videoplayer"
const db1 = "mongodb://MehakGoyal:MehakGoyal@ds227740.mlab.com:27740/videoplayer";
const Schema = mongoose.Schema;



mongoose.Promise = global.Promise;  //avid any warning
mongoose.connect(db, function (err) {
    if (err) {
        console.log("Error!" + err);
    }
});

mongoose.Promise = global.Promise;  //avid any warning
mongoose.connect(db1, function (err) {
    if (err) {
        console.log("Error!" + err);
    }
});

router.get('/billing', function (req, res) {
    console.log("ho gyi finally");
})


// for all videos
router.get('/videos', function (req, res) {
    //res.send('api works');
    console.log("Get request for all videos");
    Video.find({}).exec(function (err, videos) {
        if (err) {
            console.log("Error retring viedos" + err);
        }
        else {
            console.log("ho gyi finally");
            res.json(videos);
        }
    });
});


// for single video
router.get('/videos/:id', function (req, res) {
    //res.send('api works');
    console.log("Get request for single video");
    Video.findById(req.params.id)
        .exec(function (err, video) {
            if (err) {
                console.log("Error retring video" + err);
            }
            else {
                console.log("shukr hai ho gyi ");
                res.json(video);
            }
        });
});
/*router.get('/', function (req, res, next) {
    res.render('billing', { user: req.user });
});*/

router.post('/billing', (req, res) => {
    console.log("success ");
    var myData = new Booking(req.body);
    myData.save()
        .then(item => {
            res.render('success', { data: req.body });
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

module.exports = router;

