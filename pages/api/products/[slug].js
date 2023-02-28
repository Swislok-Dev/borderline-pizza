import db from "../../../utils/db";
import { getProduct } from "../../../utils/controller";

export default async function handler(req, res) {
  db.connect();

  const { method } = req;

  switch (method) {
    case "GET":
      getProduct(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`${method} method not allowed`);
      break;
  }

  db.disconnect();
}
