import db from "../../utils/db";
import Product from "../../models/Product";
import data from "../../utils/data";
import Categories from "../../models/Categories";

const handler = async (req, res) => {
  await db.connect();
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await Categories.deleteMany();
  await Categories.insertMany(data.categories);

  await db.disconnect();
  await res.send({
    message: "Products and Categories seeded successfuly",
    data,
  });
};

export default handler;
