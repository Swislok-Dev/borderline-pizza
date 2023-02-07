import React from "react";
import {
  isObject,
  splitPrices,
  menuItem,
  showOptions,
  showMenuItem,
  showCategoryDescription,
} from "./products/functions";
import { BsChevronDown } from "react-icons/bs";

export default function ProductItem({ product }) {
  const { title, category, prices, options, selection, slug } = product;
  const [isMoreShown, setIsMoreShown] = React.useState(false);

  const showMore = () => {
    setIsMoreShown(!isMoreShown);
  };
  const showFields = ({ prices, title, options }) => {
    const show = (prices) => {
      let result = [];

      for (let val in prices) {
        if (val === "standard") {
          return;
        } else if (isObject(prices[val])) {
          result.push(
            <div key={val}>
              <h4 className="text-left font-semibold text-xl text-gray-700">
                {val[0].toUpperCase() + val.slice(1)}
              </h4>
              {show(prices[val])}
            </div>
          );
        } else {
          result.push(splitPrices({ key: val, value: prices[val] }));
        }
      }
      result.push(showOptions({ options }));
      return result;
    };

    const showAdditionalFields = ({ category }) => {
      return (
        <>
          {showCategoryDescription({ category })}
        </>
      );
    };

    return (
      <div
        key={menuItem({ title }) && prices}
        className="flex flex-auto flex-col justify-between"
      >
        {prices.standard
          ? showMenuItem({ prices, title })
          : menuItem({ title })}
        {show(prices)}
        {isMoreShown ? (
          <div>{showAdditionalFields({ category, selection })}</div>
        ) : null}

        <div className="show-more-button-container">
          <button onClick={showMore}  aria-label="show-more" className="show-more-button">
            <BsChevronDown />
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <div key={slug} className="menu-item">
        {showFields({ prices, title, options, slug })}
      </div>
    </>
  );
}
