import React from "react";
import { showFields } from "./products/functions";

export default function ProductItem({ product }) {
  const { title, prices, options, slug } = product;

  return (
    <>
      <div
        key={slug}
        className="menu-item max-w-screen-lg rounded-md bg-blue-300 p-2"
      >
        {showFields({ prices, title, options, slug })}
      </div>
    </>
  );
}
