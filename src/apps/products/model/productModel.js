import mongoose, { Schema } from "mongoose";

const productsSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
    },
    sellerId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "users",
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories",
    },
    stock: {
      type: Number,
      default: 0,
    },
    defaultImage: {
      type: String,
    },
    productImages: {
      type: Array,
    },
    description: {
      type: String,
      trim: true,
      lowercase: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: Number,
      default: 0,
    },
    reviews: {
      type: String,
      trim: true,
      lowercase: true,
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

export const productsModel = mongoose.model("products", productsSchema);
