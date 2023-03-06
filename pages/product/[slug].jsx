import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Link from "next/link";
import clientPromise from "../../lib/mongodb";
import ProductItem from "../../components/ProductItem";

export default function ProductScreen({ products }) {
  const { query } = useRouter();
  const { slug } = query;

  const product = products.find((x) => x.slug == slug);

  const backToMenuLink = () => (
    <div className="back-to-menu-link py-2 text-left text-blue-500">
      <Link href="/menu">back to menu</Link>
    </div>
  );

  if (!product) {
    return (
      <Layout title="Product Not Found">
        {backToMenuLink()}
        Product Not Found
      </Layout>
    );
  }

  return (
    <Layout title={`Editting ${product.title}`}>
      {backToMenuLink()}

      <div className="m-auto flex max-w-3xl flex-auto flex-col justify-between">
        <div><ProductItem product={product} /></div>
      </div>
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

ProductScreen.auth = true;
