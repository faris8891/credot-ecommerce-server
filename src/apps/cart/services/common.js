import { getProductsDB } from "../../products/services/db.js";
import {
  createCartItemDB,
  getCartCountDB,
  getCartItemsDB,
  updateCartItemQtyDB,
} from "./db.js";

export async function createCart(userId, cartItem) {

  const filter = {
    _id: cartItem.productId ||cartItem._id,
  };

  const product = await getProductsDB(filter);
  const isExist = await getCartCountDB({
    productId: cartItem.productId,
    isDeleted: false,
    isOrdered: false,
  });
  if (isExist === 0) {
    const item = {
      userId: userId,
      sellerId: product.sellerId,
      productId: cartItem.productId || cartItem._id,
      quantity: cartItem.quantity || 1,
    };
    await createCartItemDB(item);
  } else {
    const filter = {
      userId: userId,
      sellerId: product.sellerId,
      productId: cartItem.productId,
    };
    const update = { $inc: { quantity: 1 } };
    await updateCartItemQtyDB(filter, update);
  }

  return;
}

export async function getCartItems(userId) {
  const filter = {
    userId: userId,
    isDeleted: false,
    isOrdered: false,
  };
  const cart = await getCartItemsDB(filter);
  return cart;
}
