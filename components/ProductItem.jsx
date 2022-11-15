import React from 'react';
import Link from 'next/link';

export default function ProductItem({ product }) {
  const { title, prices, options } = product;

  const isObject = function (val) {
    if (val === null) {
      return false;
    }
    return typeof val === 'object';
  };
  const orderTitle = (
    <h3 className=" text-left text-xl font-semibold">{title}</h3>
  );

  const showTitleAndPrice = (price) => (
    <div className="flex flex-col ">
      <h3 className="p-2 text-left">{orderTitle}</h3>
      <p className="text-right text-xl font-bold my-2">{'$' + price}</p>
    </div>
  );
  const showSizesAndPrices = (name, price) => (
    <div className="flex flex-auto justify-between">
      <h4 className="italic p-2 text-left text-orange-400">{name}</h4>
      <p className="text-right text-xl font-bold my-2">
        {'$' + price.toFixed(2)}
      </p>
    </div>
  );

  const showProteinAndPrices = (prices, name) => {
    // console.log(prices, name);
    return (
      <div className="flex flex-col justify-between">
        <h4 className="col-span-2 p-2 text-left text-red-400">{name}</h4>
        {console.log(prices)}
        <div className="">
          {Object.entries(prices).map((val) =>
            showSizesAndPrices(val[0], val[1])
          )}
        </div>
      </div>
    );
  };

  const showPriceFields = (fields) => {
    let priceName =
      // fields[0] === 'standard'
      //   ? null
      //   :
      fields[0][0].toUpperCase() + fields[0].slice(1);
    let price = fields[1];
    // typeof fields[1] === 'number' ? '$' + fields[1].toFixed(2) : fields[1];

    return isObject(priceName)
      ? showTitleAndPrice(price)
      : isObject(price)
      ? showProteinAndPrices(price, priceName)
      : showSizesAndPrices(priceName, price);

    // return typeof price == 'object' ? (
    //   showPriceFields(price)
    // ) : priceName == null ? (
    //   <div className="flex flex-auto justify-between">
    //     <h4 className="italic p-2 text-left text-orange-400">{orderTitle}</h4>
    //     <p className="text-right text-xl font-bold my-2">{price}</p>
    //   </div>
    // ) : typeof priceName == 'string' ? (
    //   <div className="flex flex-auto justify-between">
    //     <h3 className=" p-2 text-left ">{priceName}</h3>
    //     <p className=" text-right text-xl font-bold my-2">{price}</p>
    //   </div>
    // ) : (
    //   <div>hello</div>
    // );
  };

  const showFields = (fields) => {
    if (fields.standard) {
      console.log(fields.standard);
    }
    return (
      <div key={fields[0]} className="mb-2">
        {
          Object.entries(fields).map((currentValue) => {
            return showPriceFields(currentValue);
          })

          // if (currentValue[0] === 'standard') {
          //   return (
          //     <div key={currentValue} className="flex justify-between ">
          //       {showPriceFields(currentValue)}
          //     </div>
          //   );
          // } else {
          //   return (
          //     <div key={currentValue} className="flex justify-between">
          //       {showPriceFields(currentValue)}
          //     </div>
          //   );
          // }
        }
      </div>
    );
  };

  const showOptionFields = (currentValue) => {
    return (
      <div className="flex justify-between">
        <h4 className="italic p-2  text-left">{currentValue[0]}</h4>

        <p className="text-right my-2">
          {typeof currentValue[1] === 'number'
            ? '$' + currentValue[1].toFixed(2)
            : currentValue[1]}
        </p>
      </div>
    );
  };

  const showOptions = (options) => {
    return (
      <div key={options[0]} className="justify-between mb-2 border-b">
        {Object.entries(options).map((currentValue) => {
          return showOptionFields(currentValue);
        })}
      </div>
    );
  };

  return (
    <Link className="" href={`/product/${product.slug}`}>
      <a className=" hover:bg-gray-300 active:bg-gray-500 active:text-red-200    ">
        {/* <h3 className="text-left font-semibold text-xl ">{title}</h3> */}
        {/* <div className="grid  text-center   transition  p-4 lg:max-w-4xl m-auto"> */}
        {orderTitle}
        {showFields(prices)}
        {showOptions(options)}

        {/* Setting for Options present */}
        {/* <h4 className="italic col-span-2 py-1 text-left text-orange-600 ">
            Beef
          </h4>
          <div className=" text-left pl-2 border-b">
            <div className="pl-4">
              <p>Small</p>
              <p>Large</p>
            </div>
          </div>
          <div className="text-right pr-2 border-b">
            <div className="pr-4">
              <p>$1.00</p>
              <p>$2.00</p>
            </div>
          </div>
          <h4 className="italic col-span-2 py-2 text-left text-orange-600 ">
            Chicken
          </h4>
          <div className="text-left pl-2 border-b">
            <div className="pl-4">
              <p>Small</p>
              <p>Medium</p>
              <p>Large</p>
            </div>
          </div>
          <div className="text-right pr-2 border-b">
            <div className="pr-4">
              <p>$3.00</p>
              <p>$4.00</p>
              <p>$5.00</p>
            </div>
          </div>
          <h4 className="italic col-span-2 py-2 text-left text-orange-600">
            Options
          </h4>
          <div className="text-left pl-2 border-b">
            <div className="pl-4">
              <p>Add Shrimp</p>
            </div>
          </div>
          <div className="text-right pr-2 border-b">
            <div className="pr-4">
              <p>$15.00</p>
            </div>
          </div> */}

        {/* Setting for no options */}
        {/* <div className="text-left mt-2 pl-6 border-b">
            <p>Small</p>
            <p>Large</p>
          </div>
          <div className="text-right mt-2 pr-6 border-b">
            <p>$1.50</p>
            <p>$2.50</p>
          </div> */}
        {/* </div> */}
      </a>
    </Link>
  );
}
