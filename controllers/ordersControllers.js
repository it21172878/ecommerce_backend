const Orders = require('../models/Orders');

module.exports = {
  getUserOrders: async (req, res) => {
    const userId = req.user.id;
    try {
      const userOrders = await Orders.find({ userId })
        .populate({
          path: 'productId',
          select: '-sizes -oldPrice -description -category',
        })
        .exec();
    } catch (error) {}
  },
};
