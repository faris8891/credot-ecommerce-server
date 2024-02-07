import { cartModel } from "../model/cartModel.js";

export async function getCartCountDB(filters) {
  const cartCount = await cartModel.countDocuments(filters);
  return cartCount;
}
export async function createCartItemDB(cartItems) {
  const products = new cartModel(cartItems);
  await products.save();
  return products;
}
export async function updateCartItemQtyDB(filter, update) {
  await cartModel.findOneAndUpdate(filter, update);
  return;
}

export async function getCartItemsDB(filter) {
  const cart = await cartModel.find(filter).populate("productId");
  return cart;
}

export async function updateCartDB(cartId, value) {
  const cartItem = cartModel.findByIdAndUpdate(cartId, {
    $set: { quantity: value },
  });
  return cartItem;
}
