import db from "../../utils/db";
import Product from "../../models/Product";
import data from "../../utils/data";

const handler = async (req, res) => {
  await db.connect();
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await db.disconnect();
  await res.send({ message: "Products seeded successfuly", products: data.products });
  
};

export default handler;
