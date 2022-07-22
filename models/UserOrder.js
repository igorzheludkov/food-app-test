const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    adress: {type: String, required: true},
    orders: [{
        _id: { type: String, required: true },
        shop: { type: String, required: true },
        shop_id: { type: String, required: true },
        name: { type: String, required: true },
        stock: { type: Boolean, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        img_link: { type: String, required: true },
      }] 
})

module.exports = model('UserOrder', schema)