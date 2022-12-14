import { mongoose } from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    prices: { type: Object, required: false },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    options: { type: Object, required: false },
    description: {type: String, required: false}
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
