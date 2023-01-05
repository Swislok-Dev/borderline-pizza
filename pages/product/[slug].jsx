import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Link from "next/link";
import clientPromise from "../../lib/mongdb";
import { showCategoryDescription } from "../../components/products/functions";

export default function ProductScreen({ products }) {
  const { query } = useRouter();
  const { slug } = query;

  const product = products.find((x) => x.slug == slug);

  if (!product) {
    return (
      <Layout title="Product Not Found">
        <div className="py-2 text-left text-blue-500">
          <Link href="/menu">back to menu</Link>
        </div>
        Product Not Found
      </Layout>
    );
  }

  return (
    <Layout title={product.title}>
      <div className="py-2 text-left text-blue-500">
        <Link href="/menu">back to menu</Link>
      </div>

      <div className="flex flex-auto flex-col justify-between">
        <div className="m-auto my-4 max-w-screen-lg rounded-md bg-blue-300 p-2 hover:bg-blue-600 hover:text-gray-200 active:text-red-300">
          <h2>{product.title}</h2>
        </div>
      </div>
      {showCategoryDescription({ category: product.category })}
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
