import Cart from "../Model/cartSchema.js";

export async function updateCartItem(req, res) {
  const { quantity } = req.body;

  const userId = req.userId;
  const cart = await Cart.findOne({ userId });
  console.log(cart);

  if (quantity > 0) {
    cart.items[0].quantity = quantity;
  }

  await cart.save();
  res.status(200).json(cart);
}
