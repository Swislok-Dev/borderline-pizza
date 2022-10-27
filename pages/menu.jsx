import React from 'react';
import Layout from '../components/Layout';
import data from '../utils/data';
import ProductItem from '../components/ProductItem';

function MenuScreen() {
  const products = data.products;
  // console.log(data);

  return (
    <Layout title="Menu">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
        {products.map((category) => (
          <>
            <div>
              {Object.keys(category).map((el) => {
                {
                  Object.keys(category).includes('nachos')
                    ? console.log(el)
                    : null;
                }
                return (
                  <div key={el}>
                    <h3 className="p-5">{el.toUpperCase()}</h3>
                    {category[el].map((item) => (
                      <ProductItem
                        product={item}
                        key={item.title}
                      ></ProductItem>
                    ))}
                  </div>
                );
              })}
            </div>
          </>
        ))}

        {/* {Object.keys(data).map((product) => {
          console.log(product);
        })} */}
      </div>
    </Layout>
  );
}

export default MenuScreen;
