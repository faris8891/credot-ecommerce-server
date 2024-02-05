import { status } from "../../constant/status.js";
import { createCart, getCartItems } from "./services/common.js";

export async function addToCart(req, res) {
  const cartItem = req.body;
  const userId = req.userId;
  const cart = await createCart(userId, cartItem);
  return res.status(201).json({
    status: status.SUCCESS,
    message: "Add to cart successful.",
  });
}

export async function getCart(req, res) {
  const userId = req.userId;
  const cart = await getCartItems(userId);
  return res.status(200).json({
    status: status.SUCCESS,
    message: "Fetch cart successful.",
    data: {
      cart: cart,
    },
  });
}
