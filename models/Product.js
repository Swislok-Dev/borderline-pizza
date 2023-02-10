import { mongoose } from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: false },
    prices: { type: Object || String, required: false },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    options: { type: Object || String, required: false },
    description: {
      type: Object || String,
      required: false,
      _toppings: { type: Object, required: false },
    },
    selection: { type: Object, required: false },
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
