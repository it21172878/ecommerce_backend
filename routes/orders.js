const router = require('express').Router();
const orderController = require('../controllers/ordersControllers');
const { verifyToken } = require('../middleware/verifyToken.js');

router.get('/', verifyToken, orderController.getUserOrders);

module.exports = router;
