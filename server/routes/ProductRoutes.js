const express =require('express')
const router = express.Router()
const {
  getProducts
} =require('../Controller/ProductController.js')
router.route('/').get(getProducts)


module.exports = router