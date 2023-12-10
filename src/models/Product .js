const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    name: { type: String, required: true},
    description: {type: String},
    price: {type: Number, required: true, min:[0, "Only Positive Number"]},
    stock: {type: Number, required: true, min:[0, "Only Positive Number"]},
    category: {type: String, required: true},
    imageURL: {type: String}
},
{
    timestamps: true, 
    versionKey: false
});

const Product = mongoose.model('Products', DataSchema);
module.exports = Product;