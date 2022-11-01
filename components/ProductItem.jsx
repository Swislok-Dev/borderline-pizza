import React from 'react';
import Link from 'next/link';

export default function ProductItem({ product }) {
  return (
    <Link className="" href={`/product/${product.slug}`}>
      <a className=" hover:bg-gray-300 active:bg-gray-500 active:text-red-200    ">
        <div className="grid grid-cols-2 text-center   transition  p-4 lg:max-w-4xl m-auto">
          <h3 className="text-left font-semibold col-span-2 ">
            {product.title}
          </h3>
          {/* Setting for Options present */}
          <h4 className="italic col-span-2 py-1 text-left text-orange-600 ">
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
          </div>

          {/* Setting for no options */}
          <div className="text-left mt-2 pl-6 border-b">
            <p>Small</p>
            <p>Large</p>
          </div>
          <div className="text-right mt-2 pr-6 border-b">
            <p>$1.50</p>
            <p>$2.50</p>
          </div>
        </div>
      </a>
    </Link>
  );
}
