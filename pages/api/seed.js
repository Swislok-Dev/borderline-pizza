import db from "../../utils/db";
import Product from "../../models/Product";
import data from "../../utils/data";
import Categories from '../../models/Categories';
import User from "../../models/User";
import users from '../../utils/users';

const handler = async (req, res) => {
  await db.connect();
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await Categories.deleteMany();
  await Categories.insertMany(data.categories)
  await User.deleteMany();
  await User.insertMany(users.users)
  await db.disconnect();
  await res.send({ message: "Products and Categories seeded successfuly", data });
  
};

export default handler;
