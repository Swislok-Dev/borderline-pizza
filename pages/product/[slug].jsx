import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Link from "next/link";
import data from "../../utils/data";

export default function ProductScreen() {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);

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
