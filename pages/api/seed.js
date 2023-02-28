import db from "../../utils/db";
import Product from "../../models/Product";
import data from "../../utils/data";
import Categories from "../../models/Categories";
import AdminSettings from '../../models/AdminSettings';


const handler = async (req, res) => {
  await db.connect();
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await Categories.deleteMany();
  await Categories.insertMany(data.categories);
  await AdminSettings.deleteMany();
  await AdminSettings.insertMany(data.adminSettings)

  await db.disconnect();
  await res.send({
    message: "Products and Categories seeded successfuly",
    data,
  });
};

export default handler;
