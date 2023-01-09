import React from "react";
import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";
import clientPromise from "../lib/mongdb.ts";

function MenuScreen({products}) {
  return (
    <Layout title="Menu">
      <div key="menu">
        {[
          "Specialty Pizza",
          "Pizza",
          "Appetizers",
          "Nachos",
          "Salads",
          "Tacos",
          "Burritos",
          "Enchiladas",
        ].map((step, index) => (
          <section key={step} className="">
            <h2 className="m-5 text-2xl font-bold ">{step}</h2>
            <article key={step[index]} className="max-w-3/5 ">
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
