// import { itemDescription } from "../../utils/data";

export const isObject = function (val) {
  if (val === null) {
    return false;
  }
  return typeof val === "object";
};

export function productTitle(props) {
  const { title } = props;
  return (
    <h4 key={title} className="product-title">
      {title}
    </h4>
  );
}

function formatSize(size) {
  function upperCase(size) {
    return size[0].toUpperCase() + size.slice(1);
  }
  if (size.toLowerCase().includes("extra")) {
    return <h4 className="menu-size-name extra-size">{upperCase(size)}</h4>;
  }
  return <h4 className="menu-size-name">{upperCase(size)}</h4>;
}

function formatPrice(price, size = "") {
  const extras = !size.toLowerCase().includes("extra")
    ? "price"
    : "extra-price";
  return <p className={extras}>{`$${price.toFixed(2)}`}</p>;
}

export const showMenuItem = ({ prices, title, options, category }) => {
  const isProductTitle = category == "specialty pizza" ? "product-title" : null;
  let result = [];
  result.push(
    typeof prices == "number" ? (
      <div className="flex justify-between">
        {productTitle({ title })}
        <p className="text-right text-xl font-bold">{formatPrice(prices)}</p>
      </div>
    ) : (
      <div>
        {productTitle({ title })}
        {Object.entries(prices).map((value) => {
          if (typeof value[1] == "number") {
            return (
              <div key={value} className="flex justify-between">
                <p className={isProductTitle}>{formatSize(value[0])}</p>
                <p>{formatPrice(value[1])}</p>
              </div>
            );
          } else if (value[1].title) {
            return (
              <div
                key={value[1].title}
                className="flex flex-col justify-between"
              >
                <h4 className="product-title">{value[1].title}</h4>
                {Object.entries(value[1]).map((el) => {
                  if (el[0] != "title") {
                    return (
                      <div key={el} className="flex justify-between">
                        <p>{formatSize(el[0])}</p>
                        <p>{formatPrice(el[1], el[0])}</p>
                      </div>
                    );
                  }
                })}
              </div>
            );
          } else {
            return Object.entries(value[1]).map((el) => {
              return (
                <div key={el} className="flex justify-between">
                  <p>{formatSize(el[0])}</p>
                  <p>{formatPrice(el[1], el[0])}</p>
                </div>
              );
            });
          }
        })}
      </div>
    )
  );
  result.push(showOptions(options));
  return result;
};

export const splitPrices = ({ key, value }) => {
  return (
    <div key={key} className="flex justify-between">
      {key == "Extras" ? (
        <>
          <h4 className="pl-4 italic">{key[0].toUpperCase() + key.slice(1)}</h4>
          <p className="text-right text-lg">{"$" + value.toFixed(2)}</p>
        </>
      ) : (
        <>
          <h4 className=" text-left">{key[0].toUpperCase() + key.slice(1)}</h4>
          <p className=" text-right text-xl font-bold">
            {"$" + value.toFixed(2)}
          </p>
        </>
      )}
    </div>
  );
};

const showOptionFields = (currentValue) => {
  return (
    <div key={currentValue} className="flex justify-between">
      <h4 className="pl-4 italic">{currentValue[0]}</h4>

      <p className="options-price">
        {typeof currentValue[1] === "number"
          ? "$" + currentValue[1].toFixed(2)
          : currentValue[1]}
      </p>
    </div>
  );
};

export const showOptions = (options) => {
  if (options == undefined) {
    return;
  }

  {
    return Object.entries(options).map((currentValue) => {
      return showOptionFields(currentValue);
    });
  }
};

export const showSelection = ({ selection }) => {
  if (selection == undefined) {
    return;
  }

  return (
    <div key={selection}>
      <h3 className="additional-fields-heading">Available Choices</h3>
      {/* <p>{selection.choices.map((item) => item)}</p> */}
    </div>
  );
};

export const showItemDescription = (category, description) => {
  if (description && isObject(description)) {
    return (
      <>
        <section className="additional-fields">
          <h3 className="additional-fields-heading">{description._heading}</h3>
          <div className="description-list ">
            {description._toppings.map((el) => {
              return (
                <p className="font-semibold" key={el}>
                  {el}
                </p>
              );
            })}
          </div>
        </section>
        <aside className="descriptions">
          <p>{description._1}</p>
          <p>{description._2}</p>
        </aside>
      </>
    );
  } else {
    return (
      <section className="additional-fields">
        <aside className="descriptions">
          <p>{description}</p>
        </aside>
      </section>
    );
  }
};

export const showCategoryDescription = ({ category }) => {
  console.log(category);
  // if (itemDescription.includes(category)) {
  //   switch (category) {
  //     case "pizza":
  //       return (
  //         <>
  //           <section className="additional-fields">
  //             <h3 className="additional-fields-heading">Available Toppings</h3>
  //             <div className="grid grid-cols-2">
  //               {/* {pizzaToppings.map((el) => {
  //                 return (
  //                   <p className="font-semibold" key={el}>
  //                     {el}
  //                   </p>
  //                 );
  //               })} */}
  //             </div>
  //           </section>

  //           <p className="m-2">
  //             *These toppings are not included automatically but are available
  //             by request at no additional charge.
  //           </p>
  //           <br />
  //           <p className="font-medium">
  //             Like Supreme Pizza? Try our &quot;Borderline 9&quot;
  //           </p>
  //         </>
  //       );

  //     case "specialty pizza":
  //       return (
  //         <div className="m-2">
  //           <section className="additional-fields">
  //             <h3 className="additional-fields-heading">Available Choices</h3>

  //             <div className="grid grid-cols-2">
  //               {/* {specialtyPizzas.map((el) => {
  //                 return (
  //                   <p className="font-semibold" key={el}>
  //                     {el}
  //                   </p>
  //                 );
  //               })} */}
  //             </div>
  //           </section>

  //           <p>
  //             *includes canadian bacon, pepperoni, hamburger, sausage and bacon
  //           </p>
  //           <p>**includes onion and green pepper</p>
  //         </div>
  //       );
  //     case "pizza-toppings":
  //       return (
  //         <div>
  //           <p>
  //             *These toppings are not included automatically but are available
  //             by request at no additional charge.
  //           </p>
  //           <br />
  //           <p>Like Supreme Pizza? Try our &quot;Borderline 9&quot;</p>
  //         </div>
  //       );
  //   }
  // }
};
