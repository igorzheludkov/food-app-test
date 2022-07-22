const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  shop: { type: String, required: true },
  shop_id: { type: String, required: true },
  name: { type: String, required: true },
  stock: { type: Boolean, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  img_link: { type: String, required: true },
})


module.exports = model('ItemFood', schema)
