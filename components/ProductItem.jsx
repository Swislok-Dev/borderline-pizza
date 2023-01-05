import React from "react";
import Link from "next/link";
import { showFields, showOptions } from "./products/functions";

export default function ProductItem({ product }) {
  const { title, prices, options, slug } = product;

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
          {showFields({ prices, title })}
          {showOptions({ options })}
        </div>
      </a>
    </Link>
  );
}
