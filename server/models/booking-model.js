const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    username: String,
    price: Number
});

const Booking = mongoose.model('booking', bookingSchema,'booking');
module.exports = Booking;
