const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    image_url: { type: String, required: true },
    fuel_type: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    posted_at: { type: Date, required: true }
});

module.exports = mongoose.model('Car', carSchema);
