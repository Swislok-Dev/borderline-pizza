export const isObject = function (val) {
  if (val === null) {
    return false;
  }
  return typeof val === "object";
};

export function menuItem(props) {
  const { title } = props;
  return (
    <h3 key={title} className="text-left text-xl font-semibold">
      {title}
    </h3>
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
      <h4 className=" text-left">{key[0].toUpperCase() + key.slice(1)}</h4>
      <p className=" text-right text-xl font-bold">{"$" + value.toFixed(2)}</p>
    </div>
  );
};

const showOptionFields = (currentValue) => {
  return (
    <div key={currentValue} id="options" className="flex justify-between">
      <h4 className="text-left italic">{currentValue[0]}</h4>

      <p className="text-right ">
        {typeof currentValue[1] === "number"
          ? "$" + currentValue[1].toFixed(2)
          : currentValue[1]}
      </p>
    </div>
  );
};

export const showOptions = ({ options }) => {
  if (!Object.keys(options).length > 0) {
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
      <h4>Availble Choices</h4>
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

function isEven(number) {
  return number % 2 == 0 ? true : false;
}

const twoLists = (value, index, array) => {
  function makeEven(num) {
    while (isEven(num)) {
      return num;
    }
  }
  function makeOdd(num) {
    while (isEven(num)) {
      return num + 1;
    }
  }

  let evenValue = array[makeEven(index)];
  let oddValue = array[makeOdd(index)];

  return (
    <>
      <p>{evenValue}</p>
      <p>{oddValue}</p>
    </>
  );
};

export const showCategoryDescription = ({ category }) => {
  if (itemDescription.includes(category)) {
    switch (category) {
      case "pizza":
        return (
          <>
            <h3>Thin or pan style crust available</h3>
            <h2 className="text-xl underline">Availble Toppings</h2>
            {pizzaToppings.map((value, index) => {
              return (
                <div key={pizzaToppings[index]} className="grid grid-cols-2">
                  {twoLists(value, index, pizzaToppings)}
                </div>
              );
            })}
            <p>
              *These toppings are not included automatically but are available
              by request at no additional charge.
            </p>
            <br />
            <p>Like Supreme Pizza? Try our &quot;Borderline 9&quot;</p>
          </>
        );
      case "appetizers":
        return <p>One cup of Pizza or Nacho Cheese Sauce included</p>;
      case "beverages":
        console.log(category);
        return;
      case "specialty pizza":
        return (
          <div className="m-2">
            <p className="font-semibold">
              BBQ | 5 Meat* | Beef Taco | Chicken Taco | Chicken Fajita** |
              Triple Pepperoni | Borderline 9 | &quot;The Everything&quot;
            </p>
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
