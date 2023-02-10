export const specialtyPizzas = [
  "BBQ",
  "5 Meat*",
  "Beef Taco",
  "Chicken Taco",
  "Chicken Fajita**",
  "Triple Pepperoni",
  "Borderline 9",
  "The Everything",
];

export const specialtyPizzaAddOns = {
  "Add Bacon": {
    Small: 1,
    Medium: 2,
    Large: 3,
  },
};

export const pizzaToppings = [
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

const menuItems = {
  _descriptions: [
    {
      title: "Pizza",
      description: ["Thin or Pan crust available"],
    },

    {
      title: "Pizza",

      descriptions: {
        description1: "Thin or Pan or huge ass crust available",
        description2: "This is the 2nd description for pizza",
      },
    },

    {
      title: "Appetizers",
      description: "One cup of Ranch, Pizza, or Nacho Cheese sauce included",
    },
    {
      title: "Specialty Pizza",
      description: "Thin or Pan crust available",
    },
  ],

  get descriptions() {
    return this._descriptions;
  },
  set descriptions(value) {
    this._descriptions = value;
  },
};

export default menuItems;
