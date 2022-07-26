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
    const items = await ItemFood.find()
    res.json(items)
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong...' })
  }
})
router.get('/api/orders', async (req, res) => {
  try {
    const items = await UserOrder.find({ phone: req.query.q })
    res.json(items)
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong...' })
  }
})
router.post('/api/orders', (req, res) => {
  try {
    const order = new UserOrder(req.body)
    console.log(req.body)
    order.save()
    res.json('Received')
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong...' })
  }
})

module.exports = router
