import { mongoose } from "mongoose";

const categoriesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const Categories =
  mongoose.models.Categories || mongoose.model("Categories", categoriesSchema);

export default Categories;
