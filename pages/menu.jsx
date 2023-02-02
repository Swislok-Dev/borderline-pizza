import React from "react";
import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";
import clientPromise from "../lib/mongodb.ts";

function MenuScreen({ products }) {
  const productCategories = [
    "Specialty Pizza",
    "Pizza",
    "Appetizers",
    "Nachos",
    "Salads",
    "Tacos",
    "Burritos",
    "Enchiladas",
  ];

  return (
    <Layout title="Menu">
      <div key="menu">
        {productCategories.map((step, index) => (
          <section key={step}>
            <h2 className="category-heading">{step}</h2>
            <article key={step[index]}>
              {products.map((product) =>
                product.category === step.toLowerCase() ? (
                  <ProductItem
                    product={product}
                    key={product.slug}
                  ></ProductItem>
                ) : null
              )}
            </article>
          </section>
        ))}
      </div>
    </Layout>
  );
}

export default MenuScreen;

export async function getStaticProps() {
  const client = await clientPromise;
  const db = client.db("borderline-pizza");

  const products = await db.collection("products").find({}).toArray();

  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
}
