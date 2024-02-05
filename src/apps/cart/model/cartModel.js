import mongoose, { Schema } from "mongoose";

const cartSchema = new Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "users",
      required: true,
    },
    sellerId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "users",
    },
    productId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "products",
    },
    quantity: {
      type: Number,
      required: true,
    },
    isOrdered: {
      type: Boolean,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const cartModel = mongoose.model("carts", cartSchema);
