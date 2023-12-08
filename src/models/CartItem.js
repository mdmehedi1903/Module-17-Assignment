const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    user: {type:mongoose.Schema.Types.ObjectId, required:true}, 
    product: {type:mongoose.Schema.Types.ObjectId, required:true}, 
    quantity: {type: Number, required: true}
},
{
    timestamps: true, 
    versionKey: false
});

const CartItem = mongoose.model('carts', DataSchema);
module.exports = CartItem;

// quantity: Number, required, positive integer.