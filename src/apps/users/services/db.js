import { addressModel } from "../model/addressModel.js";
import { userModel } from "../model/userModel.js";

export async function createUserDB(data) {
  const user = new userModel(data);
  await user.save();
  return user;
}

export async function findUserDB(userId) {
  const user = await userModel.findById(userId).select({ password: 0 });
  return user;
}

export async function addAddressDB(data) {
  const address = new addressModel(data);
  await address.save();
  return address;
}

export async function findAddressesDB(filters) {
  const addresses = await addressModel.find(filters || {});
  return addresses;
}
