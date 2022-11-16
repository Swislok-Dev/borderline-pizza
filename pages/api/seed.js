import db from "../../utils/db";
import Product from "../../models/Product";
import data from "../../utils/data";

const handler = async (req, res) => {
  await db.connect();
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await db.disconnect();
  res.send({ message: "Products seeded successfully" });
};

export default handler;
