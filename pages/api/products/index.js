import {
  getProducts,
  postProduct,
  putProduct,
  deleteProduct,
} from "../../../utils/controller";
import db from "../../../utils/db";

export default async function handler(req, res) {
  db.connect().catch(() =>
    res.status(405).json({ error: "Error in the connection" })
  );

  const { method } = req;

  switch (method) {
    case "GET":
      getProducts(req, res);
      break;
    case "POST":
      postProduct(req, res);
      break;
    case "PUT":
      putProduct(req, res);
      break;
    case "DELETE":
      deleteProduct(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`${method} method not allowed`);
      break;
  }
  db.disconnect();
}
