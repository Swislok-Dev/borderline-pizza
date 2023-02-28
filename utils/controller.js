import Product from "../models/Product";

// GET http://localhost:3000/api/products
export async function getProducts(req, res) {
  try {
    const product = await Product.find();

    console.log(product);

    if (!product) return res.status(404).json({ error: "Data not found" });

    return res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching data" });
  }
}

// GET http://localhost:3000/api/products/?id
export async function getProduct(req, res) {
  try {
    const { id } = req.query;
    const product = await Product.findById(id);

    console.log(product);

    if (!product) return res.status(404).json({ error: "Data not found" });

    return res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching data" });
  }
}

// POST http://localhost:3000/api/products
export async function postProduct(req, res) {
  try {
    const formData = req.body;
    console.log(formData);
    if (!formData)
      return res.status(404).json({ error: "Form data not provided" });

    Product.create(formData, function (err, data) {
      console.log(data);
      return res.status(200).json(data);
    });
  } catch (error) {
    return res.status(404).json({ error });
  }
}

// PUT http://localhost:3000/api/products/?slug
export async function putProduct(req, res) {
  try {
    const { id } = req.query;
    const formData = req.body;
    if (id && formData) {
      const product = await Product.findByIdAndUpdate(id, formData);
      return res.status(200).json(product);
    }
    res.status(404).json({ error: "putting product not found" });
    if (!formData)
      return res.status(404).json({ error: "Form data not provided" });
  } catch (error) {
    return res.status(404).json({ error });
  }
}

// PUT http://localhost:3000/api/products/?slug
export async function deleteProduct(req, res) {
  try {
    const { id } = req.query;

    if (id) {
      const product = await Product.findByIdAndDelete(id);
      return res.status(200).json({ deleted: product });
    }

    res.status(404).json({ error: "Product not selected" });

    res.status(404).json({ error: "putting product not found" });
  } catch (error) {
    return res.status(404).json({ error });
  }
}
