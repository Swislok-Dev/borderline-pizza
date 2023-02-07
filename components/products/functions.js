export const isObject = function (val) {
  if (val === null) {
    return false;
  }
  return typeof val === "object";
};

export function menuItem(props) {
  const { title } = props;
  return (
    <h4 key={title} className="text-left font-semibold">
      {title}
    </h4>
  );
}

export const showMenuItem = ({ prices, title }) => {
  return (
    <div className="flex justify-between">
      {menuItem({ title })}
      <p className="text-right text-xl font-bold">
        {`$${prices.standard.toFixed(2)}`}
      </p>
    </div>
  );
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
    <div key={currentValue} id="options" className="flex justify-between">
      <h4 className="pl-4 italic">{currentValue[0]}</h4>

      <p className="">
        {typeof currentValue[1] === "number"
          ? "$" + currentValue[1].toFixed(2)
          : currentValue[1]}
      </p>
    </div>
  );
};

export const showOptions = ({ options }) => {
  if (options == undefined || !options) {
    return;
  }
  return (
    <div key={options}>
      {Object.entries(options).map((currentValue) => {
        return showOptionFields(currentValue);
      })}
    </div>
  );
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

const itemDescription = [
  "specialty pizza",
  "pizza",
  "pizza-toppings",
  "appetizers",
  "nachos",
  "salads",
  "tacos",
  "burritos",
  "enchiladas",
];

const pizzaToppings = [
  "Canadian Bacon",
  "Pepperoni",
  "Hamburger",
  "Sausage",
  "Jalapeno*",
  "Diced Tomato*",
  "Green Olives",
  "Black Olives",
  "Onion",
  "Mixed Peppers",
  "Mushroom",
  "Pineapple",
  "Sauerkraut",
];

const specialtyPizzas = [
  "BBQ",
  "5 Meat*",
  "Beef Taco",
  "Chicken Taco",
  "Chicken Fajita**",
  "Triple Pepperoni",
  "Borderline 9",
  "The Everything",
];

export const showCategoryDescription = ({ category }) => {
  if (itemDescription.includes(category)) {
    switch (category) {
      case "pizza":
        return (
          <>
            <section className="additional-fields">
              <h3 className="additional-fields-heading">Available Toppings</h3>
              <div className="grid grid-cols-2">
                {pizzaToppings.map((el) => {
                  return (
                    <p className="font-semibold" key={el}>
                      {el}
                    </p>
                  );
                })}
              </div>
            </section>

            <p className="m-2">
              *These toppings are not included automatically but are available
              by request at no additional charge.
            </p>
            <br />
            <p className="font-medium">
              Like Supreme Pizza? Try our &quot;Borderline 9&quot;
            </p>
          </>
        );
      case "appetizers":
        return (
          <p className="m-2 border-t border-black">
            One cup of Pizza or Nacho Cheese Sauce included
          </p>
        );
      case "beverages":
        console.log(category);
        return;
      case "specialty pizza":
        return (
          <div className="m-2">
            <section className="additional-fields">
              <h3 className="additional-fields-heading">Available Choices</h3>

              <div className="grid grid-cols-2">
                {specialtyPizzas.map((el) => {
                  return (
                    <p className="font-semibold" key={el}>
                      {el}
                    </p>
                  );
                })}
              </div>
            </section>

            <p>
              *includes canadian bacon, pepperoni, hamburger, sausage and bacon
            </p>
            <p>**includes onion and green pepper</p>
          </div>
        );
      case "pizza-toppings":
        return (
          <div>
            <p>
              *These toppings are not included automatically but are available
              by request at no additional charge.
            </p>
            <br />
            <p>Like Supreme Pizza? Try our &quot;Borderline 9&quot;</p>
          </div>
        );
    }
  }
};

export const showPizzaToppings = (props) => {
  console.log(props);
};
