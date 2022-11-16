import React from "react";
import Layout from "../components/Layout";
import data from "../utils/data";
import ProductItem from "../components/ProductItem";

function MenuScreen() {
  const products = data.products;

  return (
    <Layout title="Menu">
      <div key="menu">
        {["Appetizers", "Nachos", "Salads", "Tacos"].map((step, index) => (
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
