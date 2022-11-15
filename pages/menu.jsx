import React from 'react';
import Layout from '../components/Layout';
import data from '../utils/data';
import ProductItem from '../components/ProductItem';

function MenuScreen() {
  const products = data.products;

  return (
    <Layout title="Menu">
      <div className="grid grid-cols-1 ">
        {['Appetizers', 'Nachos', 'Salads'].map((step) => (
          <section key={step}>
            <h2 className="font-bold mt-5 text-2xl">{step}</h2>
            <article className=" m-4">
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
