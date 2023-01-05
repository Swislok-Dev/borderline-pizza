import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Link from "next/link";
import clientPromise from '../../lib/mongdb';

export default function ProductScreen({products}) {
  const { query } = useRouter();
  const { slug } = query;

  const product = products.find((x) => x.slug == slug)

  if (!product) {
    return <Layout title="Product Not Found">
      <div className="py-2 text-left text-blue-500">
        <Link href="/menu">back to menu</Link>
      </div>Product Not Found</Layout>;
  }

  return (
    <Layout title={product.title}>
      <div className="py-2 text-left text-blue-500">
        <Link href="/menu">back to menu</Link>
      </div>

      <ul>
        <li>
          <h2 className="text-lg">{product.title}</h2>
        </li>
      </ul>
    </Layout>
  );
}

export async function getServerSideProps() {
  const client = await clientPromise;
  const db = client.db("borderline-pizza");

  const products = await db.collection("products").find({}).toArray();

  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
 
}
