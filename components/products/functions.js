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
      <h3 className=" text-left">{key[0].toUpperCase() + key.slice(1)}</h3>
      <p className=" text-right text-xl font-bold">{"$" + value.toFixed(2)}</p>
    </div>
  );
};

export const showFields = ({ prices, title }) => {
  const show = (prices) => {
    let result = [];

    for (let val in prices) {
      if (val === "standard") {
        return;
      } else if (isObject(prices[val])) {
        result.push(
          <div key={val} className="">
            <p className="text-left font-semibold text-gray-100">
              {val[0].toUpperCase() + val.slice(1)}
            </p>
            {show(prices[val])}
          </div>
        );
      } else {
        result.push(splitPrices({ key: val, value: prices[val] }));
      }
    }
    return result;
  };
  return (
    <div
      key={menuItem({ title }) && prices}
      className="flex flex-auto flex-col justify-between"
    >
      {prices.standard ? showMenuItem({ prices, title }) : menuItem({ title })}
      {show(prices)}
    </div>
  );
};

const showOptionFields = (currentValue) => {
  return (
    <div key={currentValue} className="flex justify-between">
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
  if (!options) {
    return;
  }
  return (
    <div key={options[0]}>
      {Object.entries(options).map((currentValue) => {
        return showOptionFields(currentValue);
      })}
    </div>
  );
};
