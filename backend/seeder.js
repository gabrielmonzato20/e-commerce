import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/user.js";
import products from "./data/products.js";
import User from "./domain/models/user.model.js";
import Order from "./domain/models/orders.model.js";
import Product from "./domain/models/products.model.js";
import connectDb from "./config/db.js";
import Oder from "./domain/models/orders.model.js";

dotenv.config();

connectDb();

const importData = async () => {
  try {
    await Oder.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    const usersCreate = await User.insertMany(users);
    const adminUser = usersCreate[0]._id;

    const sampleProduct = products.map((p) => {
      return { ...p, user: adminUser };
    });

    await Product.insertMany(sampleProduct);

    console.log(`Data import`.green.inverse);
    process.exit();
  } catch (err) {
    console.log(`${err}`.red.inverse);
  }
};

const deleteData = async () => {
  try {
    await Oder.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    console.log(`Data delete`.green.inverse);
    process.exit();
  } catch (err) {
    console.log(`${err}`.red.inverse);
  }
};

if (process.argv[2] == "-d") {
  deleteData();
} else {
  importData();
}
