import Cart from "../Model/cartSchema.js";
import Product from "../Model/productSchema.js";

export async function addToCart(req, res) {
  try {
    const { productId, quantity } = req.body;
    const userId = req.userId;

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    const itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId.toString()
    );

    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }

    await cart.save();
    return res.status(cart.isNew ? 201 : 200).json(cart);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

// {
//   "productId":"67951c235b63650c423801f8",
//   "quantity": 5
//   }
