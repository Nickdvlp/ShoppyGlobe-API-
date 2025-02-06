import Cart from "../Model/cartSchema.js";

export async function deleteCartItem(req, res) {
  const userId = req.userId;

  const cart = await Cart.findOne({ userId });

  cart.items = cart.items.filter(
    (item) => item.productId.toString() !== req.params.product_id
  );
  await cart.save();
  res.status(200).json(cart);
}
