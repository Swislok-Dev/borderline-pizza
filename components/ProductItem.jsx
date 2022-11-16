import React from "react";
import Link from "next/link";

export default function ProductItem({ product }) {
  const { title, prices, options, slug } = product;

  const isObject = function (val) {
    if (val === null) {
      return false;
    }
    return typeof val === "object";
  };
  const menuItem = (
    <h3 key={title} className="text-left text-xl font-semibold">
      {title}
    </h3>
  );
  const showMenuItem = (price) => {
    return (
      <div className="flex justify-between">
        {menuItem}
        <p className="text-right text-xl font-bold">
          {"$" + price.standard.toFixed(2)}
        </p>
      </div>
    );
  };

  const splitPrices = (key, value) => {
    return (
      <div key={key} className="flex justify-between">
        <h3 className=" text-left">{key[0].toUpperCase() + key.slice(1)}</h3>
        <p className=" text-right text-xl font-bold">
          {"$" + value.toFixed(2)}
        </p>
      </div>
    );
  };

  const showFields = (prices) => {
    const show = (prices) => {
      let result = [];

      for (let val in prices) {
        if (val === "standard") {
          return;
        } else if (isObject(prices[val])) {
          result.push(
            <div key={val} className="">
              <p className="text-left font-semibold text-gray-100">
                {val[0].toUpperCase() + val.slice(1)}
              </p>
              {show(prices[val])}
            </div>
          );
        } else {
          result.push(splitPrices(val, prices[val]));
        }
      }
      return result;
    };
    return (
      <div
        key={menuItem && prices}
        className="flex flex-auto flex-col justify-between"
      >
        {prices.standard ? showMenuItem(prices) : menuItem}
        {show(prices)}
      </div>
    );
  };

  const showOptionFields = (currentValue) => {
    return (
      <div key={currentValue} className="flex justify-between">
        <h4 className="text-left italic">{currentValue[0]}</h4>

        <p className="text-right ">
          {typeof currentValue[1] === "number"
            ? "$" + currentValue[1].toFixed(2)
            : currentValue[1]}
        </p>
      </div>
    );
  };

  const showOptions = (options) => {
    return (
      <div key={options[0]}>
        {Object.entries(options).map((currentValue) => {
          return showOptionFields(currentValue);
        })}
      </div>
    );
  };

  return (
    <Link href={`/product/${slug}`}>
      <a
        key={product}
        className=" hover:bg-gray-300 active:bg-gray-500 active:text-red-200    "
      >
        <div
          key={slug}
          className="m-auto my-4 max-w-screen-lg rounded-md bg-blue-300 p-2 hover:bg-blue-600 hover:text-gray-200 active:text-red-300"
        >
          {showFields(prices)}
          {showOptions(options)}
        </div>
      </a>
    </Link>
  );
}
