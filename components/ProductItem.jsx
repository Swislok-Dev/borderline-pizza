import React from 'react';
import Link from 'next/link';

export default function ProductItem({ product }) {
  return (
    <div>
      <Link href={`/product/${product.slug}`}>
        <a>{product.title}</a>
      </Link>
    </div>
  );
}
