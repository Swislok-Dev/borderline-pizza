import React from "react";
import { showMenuItem, showItemDescription } from "./products/functions";
import { BsChevronDown } from "react-icons/bs";
import { useSession } from "next-auth/react";
import EditProduct from "./EditProduct";
import { useRouter } from "next/router";

export default function ProductItem({ product }) {
  const { title, category, description, prices, options, selection, slug } =
    product;
  const [isMoreShown, setIsMoreShown] = React.useState(false);

  const { data: session } = useSession();
  const router = useRouter();

  const showMore = () => {
    setIsMoreShown(!isMoreShown);
  };
  const showFields = ({ prices, title, options }) => {
    const showAdditionalFields = ({ category }) => {
      return <>{showItemDescription(category, description)}</>;
    };

    return (
      <div key={{ title } && prices} className="flex  flex-col justify-between">
        {session?.user.isAdmin && router.pathname == "/menu" ? (
          <EditProduct slug={product.slug} />
        ) : null}
        {showMenuItem({ prices, title, options, category })}

        {isMoreShown ? (
          <div>{showAdditionalFields({ category, selection })}</div>
        ) : null}
      </div>
    );
  };

  return (
    <>
      <div key={slug} className="menu-item">
        {showFields({ prices, title, options, slug })}
      </div>
      {description !== undefined ? (
        <div className="show-more-button-container">
          <button
            onClick={showMore}
            aria-label="show-more"
            className={`show-more-button ${isMoreShown}`}
          >
            <BsChevronDown />
          </button>
        </div>
      ) : null}
    </>
  );
}
