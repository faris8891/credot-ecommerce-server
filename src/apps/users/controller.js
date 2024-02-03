import { status } from "../../constant/status.js";
import { hashPassword } from "./services/common.js";
import {
  addAddressDB,
  createUserDB,
  findAddressesDB,
  findUserDB,
} from "./services/db.js";

export async function registerUser(req, res) {
  const { password } = req.body;
  const hashedPassword = await hashPassword(password);
  const newUser = await createUserDB({ ...req.body, password: hashedPassword });
  return res.status(201).json({
    status: status.SUCCESS,
    message: "user registration successful.",
    data: {
      user: newUser,
    },
  });
}

export async function getUser(req, res) {
  const { userId } = req.body;
  const filters = {
    _id: userId,
  };

  const select = { password: 0 };
  const user = await findUserDB(filters, select);
  return res.status(200).json({
    status: status.SUCCESS,
    message: "user fetch successful.",
    data: {
      user: user,
    },
  });
}

export async function addAddress(req, res) {
  const address = req.body;
  const newAddress = await addAddressDB(address);

  return res.status(201).json({
    status: status.SUCCESS,
    message: "add address successful.",
    data: {
      address: newAddress,
    },
  });
}

export async function getAllAddress(req, res) {
  const { userId } = req.body;
  const filters = { user: userId };
  const newAddress = await findAddressesDB(filters);

  return res.status(200).json({
    status: status.SUCCESS,
    message: "add address successful.",
    data: {
      address: newAddress,
    },
  });
}
