import mongoose, { Schema } from "mongoose";

const productsSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true,
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
