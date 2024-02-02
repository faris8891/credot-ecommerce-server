import mongoose, { Schema } from "mongoose";

const addressSchema = new Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "users",
      required: true,
    },
    state: {
      type: String,
      trim: true,
      lowercase: true,
    },
    district: {
      type: String,
      trim: true,
      lowercase: true,
    },
    city: {
      type: String,
      trim: true,
      lowercase: true,
    },
    street: {
      type: String,
      trim: true,
      lowercase: true,
    },
    landmark: {
      type: String,
      trim: true,
      lowercase: true,
    },
    pinCode: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
    },
    flatNo: {
      type: String,
      trim: true,
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

export const addressModel = mongoose.model("addresses", addressSchema);
