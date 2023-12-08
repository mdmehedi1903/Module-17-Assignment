const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    name: { type: String, required: true},
    description: {type: String},
    price: {type: String, required: true},
    stock: {type: String, required: true},
    category: {type: String, required: true},
    imageURL: {type: String}
},
{
    timestamps: true, 
    versionKey: false
});

const Product = mongoose.model('Products', DataSchema);
module.exports = Product;

// price: Number, required, positive value.
// stock: Number, required, non-negative integer.