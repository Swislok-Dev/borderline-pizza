import Link from "next/link";
import React from "react";
import { BsGear } from "react-icons/bs";

function EditProduct({slug}) {
  return (
    <>
      <button>
        <Link href={`/product/${slug}`}>
          <BsGear />
        </Link>
      </button>
    </>
  );
}

export default EditProduct;
