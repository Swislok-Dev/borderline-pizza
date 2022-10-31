import React from 'react';
import Layout from '../components/Layout';
import data from '../utils/data';
import ProductItem from '../components/ProductItem';

function MenuScreen() {
  const products = data.products;

  return (
    <Layout title="Menu">
      {/* <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 "> */}
      <div className="grid grid-cols-1 ">
        {['Appetizers', 'Nachos', 'Salads'].map((step) => (
          <section key={step}>
            <h2 className="font-bold">{step}</h2>
            <article className="grid grid-cols-1 m-4">
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
        {/* {products.map((category, index) => (
          <div key={`${category}-${index}`}>
            {Object.keys(category).map((el) => {
              // Object.keys(category).includes('nachos') ? console.log(el) : null;
              return (
                <>
                  <h3 key={el} className="p-5">
                    {el.toUpperCase()}
                  </h3>
                  {category[el].map((product) => (
                    <ProductItem
                      product={product}
                      key={product.slug}
                    ></ProductItem>
                  ))}
                </>
              );
            })}
          </div>
        ))} */}

        {/* {Object.keys(data).map((product) => {
          console.log(product);
        })} */}
      </div>
    </Layout>
  );
}

export default MenuScreen;
