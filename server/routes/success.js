var express = require('express');
var Booking = require('../models/booking-model');
var router = express.Router();
/* GET home page. *//*
router.get('/', function (req, res, next) {
    res.render('success', { user: req.user });
});*/

router.post("/", (req, res) => {
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
