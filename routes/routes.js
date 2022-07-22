const { Router } = require('express')
const router = Router()
const config = require('config')
const ItemFood = require('../models/ItemFood')
const UserOrder = require('../models/UserOrder')
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

router.get('/api/shops', async (req, res) => {
  try {
    res.setHeader('Access-Control-Allow-Origin', '*')
    const items = await ItemFood.find()
    res.json(items)
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong...' })
  }
})
router.get('/api/orders', async (req, res) => {
  try {
    res.setHeader('Access-Control-Allow-Origin', '*')
    const items = await UserOrder.find({ phone: req.query.q })
    res.json(items)
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong...' })
  }
})
router.post('/api/orders', (req, res) => {
  try {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    const order = new UserOrder(req.body)
    console.log(order)
    order.save()
    res.json('Received')
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong...' })
  }
})

module.exports = router
