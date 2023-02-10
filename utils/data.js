// title: '',
// category: '',
// prices: ,
// slug: "some-product-name",
// import menuItems as description from "./productDescriptions.js"
import menuItems, {
  pizzaToppings,
  specialtyPizzas,
} from "./productDescriptions";

const { _descriptions } = menuItems;
const data = {
  products: [
    // appetizers

    {
      title: "Bread Sticks",
      category: "appetizers",
      prices: {
        standard: 5,
      },
      options: {},
      slug: "bread-sticks",
    },
    {
      title: "Cheese Sticks",
      category: "appetizers",
      prices: {
        standard: 7,
      },
      options: {},
      slug: "cheese-sticks",
    },
    {
      title: "Bacon Cheddar Cheese Sticks",
      category: "appetizers",
      prices: { standard: 9 },

      options: {
        "Extra Sauce": 1,
      },
      slug: "bacon-cheddar-cheese-sticks",
    },
    {
      title: "Cheese Bread or Garlic Cheese Bread",
      category: "appetizers",
      prices: {
        small: 7,
        medium: 9,
        large: 12,
      },
      options: {
        "Extra Sauce": 1,
      },
      slug: "cheese-bread-or-garlic-cheese-bread",
    },

    // nachos

    {
      title: "Nachos or Chips and Salsa",
      category: "nachos",
      prices: {
        small: 2.5,
        large: 4,
      },
      options: {},
      slug: "nachos-or-chips-and-salsa",
    },
    {
      title: "Meaty Nachos",
      category: "nachos",
      prices: {
        small: 4,
        large: 7,
      },
      options: {},
      slug: "meaty-nachos",
    },
    {
      title: "Super Nachos",
      category: "nachos",
      prices: {
        small: 6,
        large: 9,
      },
      options: {},
      description:
        "Chips covered with our taco meat, refried beans, nacho cheese, tomatoes and black olives. Includes your choice of one side (sour cream, hot salsa, mild salsa, jalapenos or onions)",
      slug: "super-nachos",
    },
    {
      title: "Super Duper Nachos",
      category: "nachos",
      prices: {
        small: 7,
        large: 10,
      },
      options: {},
      description:
        "Same as Super Nacho plus lettuce, jalapenos, onions and two sides instead of one.",
      slug: "super-duper-nachos",
    },

    // salads

    {
      title: "Garden Salad",
      category: "salads",
      prices: {
        "Ranch or French Dressing": 4,
      },
      options: {
        "Add Chicken": 2,
      },
      description:
        "Lettuce topped with tomatoes, black olives, cheddar cheese, croutons and your choice of Ranch or French Dressing.",
      slug: "garden-salad",
    },
    {
      title: "Taco Salad",
      category: "salads",
      prices: {
        small: 6,
        large: 9,
      },
      options: {},
      description:
        "Lettuce on our taco meat, cheddar cheese, tomatoes, black olives and seasoned chips. Includes your choice of one side of sour cream, hot salsa, mild salsa, jalapenos, or onions).",
      slug: "taco-salad",
    },

    // tacos

    {
      title: "Hard Taco",
      category: "tacos",
      prices: {
        "Beef, Chicken or BBQ": 1.75,
      },
      options: {},
      description:
        "A crisp corn tortilla loaded with meat, lettuce, tomato and cheddar cheese.",
      slug: "hard-taco",
    },
    {
      title: "Baby Soft Taco",
      category: "tacos",
      prices: {
        "Beef, Chicken or BBQ": 1.75,
      },
      options: {},
      description:
        "A mini soft flour tortilla with meat, lettuce, tomato and cheddar cheese.",
      slug: "baby-soft-taco",
    },
    {
      title: "Soft Taco",
      category: "tacos",
      prices: {
        beef: 4,
        "Chicken, Chicken Ranch or BBQ": 4,
      },
      options: {},
      description:
        "A soft flour tortilla with meat, lettuce, tomato, and cheddar cheese.",
      slug: "soft-taco",
    },
    {
      title: "Super Taco",
      category: "tacos",
      prices: {
        beef: 5,
        "Chicken, Chicken Ranch or BBQ": 5,
      },
      options: {},
      description:
        "Our big soft taco with onions, black olives, jalapenos and sour cream inside.",
      slug: "super-taco",
    },
    {
      title: "Soft Taco Dinner",
      category: "tacos",
      prices: {
        beef: 8,
        "Chicken, Chicken Ranch or BBQ": 8,
      },
      options: {},
      description:
        "A Soft Taco served with refried beans and seasoned chips. Includes your choice of one side (sour cream, hot salsa, mild salsa, jalapenos or onions).",
      slug: "soft-taco-dinner",
    },

    // burritos

    {
      title: "Baby Burrito",
      category: "burritos",
      prices: {
        "Beef, Bean, Chickon or BBQ": 1.75,
      },
      options: {},
      description: "A mini soft flour tortilla with meat and cheddar cheese.",
      slug: "baby-burrito",
    },
    {
      title: "Burrito",
      category: "burritos",
      prices: {
        "Beef, Bean, Beef & Bean": 4,
        "Chicken, Chicken Ranch or BBQ": 4,
      },
      options: {},
      description:
        "A soft flour tortilla with meat and loaded with cheddar cheese.",
      slug: "burrito",
    },
    {
      title: "Super Burrito",
      category: "burritos",
      prices: {
        "Beef, Bean, Beef & Bean": 6,
        "Chicken, Chicken Ranch or BBQ": 6,
      },
      options: {},
      description:
        "A soft flour tortilla with extra meat and loaded with extra cheddar cheese.",
      slug: "super-burrito",
    },
    {
      title: "Burrito Dinner",
      category: "burritos",
      prices: {
        "Beef, Bean, Beef & Bean": 8,
        "Chicken, Chicken Ranch or BBQ": 8,
      },
      options: {},
      description:
        "A Burrito served with a small garden salad and seasoned chips. Includes your choice of one side(sour cream, hot salsa, mild salsa, jalapenos or onions).",
      slug: "burrito-dinner",
    },

    // enchiladas

    {
      title: "Enchilada",
      category: "enchiladas",
      prices: {
        "Beef or Chicken": 5,
      },
      options: {},
      description: "Served on a bed of lettuce and covered in cheddar cheese.",
      slug: "enchilada",
    },
    {
      title: "Super Enchilada",
      category: "enchiladas",
      prices: {
        "Beef or Chicken": 6,
      },
      options: {},
      description:
        "Served on a bed of lettuce, covered with cheddar cheese, tomatoes, black olives, jalapenos and onions. Includes your choice of one side (sour cream, hot salsa or mild salsa).",
      slug: "super-enchilada",
    },
    {
      title: "Enchilada Dinner",
      category: "enchiladas",
      prices: {
        "Beef or Chicken": 8,
      },
      options: {},
      description:
        "An Enchilada covered with cheddar cheese and served with a small garden salad and seasoned chips. Includes your choice of one side (sour cream, hot salsa, mild salsa, jalapenos or onions).",
      slug: "enchilada-dinner",
    },

    // specialty-pizza
    {
      title: "Specialty Pizzas",
      category: "specialty pizza",
      prices: {
        'Small 9"': 10,
        'Medium 13"': 19,
        'Large 15"': 23,
      },
      description: {
        _heading: "Available Choices",
        _toppings: specialtyPizzas,
        _1: "*includes canadian bacon, pepperoni, hamburger, sausage, and bacon",
        _2: "**includes onion and green pepper",
      },
      slug: "specialty-pizza",
    },

    // pizza

    {
      title: "",
      category: "pizza",
      prices: {
        'Small 9"': {
          Cheese: 7,
          "1-14 Toppings": 9,
          Extras: 1,
        },
        'Medium 13"': {
          Cheese: 13,
          "1-14 Toppings": 16,
          Extras: 1.5,
        },

        'Large 15"': {
          Cheese: 16,
          "1-14 Toppings": 20.0,
          Extras: 2,
        },
      },
      options: {},

      description: {
        _heading: "Available Toppings",
        _toppings: pizzaToppings,
        _1: "*These toppings are not included automatically, but are available by request at no additional charge.",
        _2: 'Like Supreme Pizza? Try our "Borderline 9"',
      },
      slug: "pizzas",
    },

    // {
    //   title: 'Small 9"',
    //   category: "pizza",
    //   prices: {
    //     Cheese: 7,
    //     "1-14 Toppings": 9,
    //   },
    //   options: {
    //     Extras: 1,
    //   },
    //   slug: "small-pizza",
    // },
    // {
    //   title: 'Medium 13"',
    //   category: "pizza",
    //   prices: {
    //     Cheese: 13,
    //     "1-14 Toppings": 16,
    //   },
    //   options: {
    //     Extras: 1.5,
    //   },
    //   slug: "medium-pizza",
    // },
    // {
    //   title: 'Large 15"',
    //   category: "pizza",
    //   prices: {
    //     Cheese: 16,
    //     "1-14 Toppings": 20.0,
    //   },
    //   options: {
    //     Extras: 2,
    //   },
    //   slug: "large-pizza",
    // },
  ],
  categories: [
    {
      title: "Pizza",
      description: "This or Pan crust available",
    },
    {
      title: "Appetizers",
      description: "One cup of Ranch, Pizza, or Nacho Cheese sauce included",
    },
    {
      title: "Specialty Pizza",
      description: "Thin or Pan crust available",
    },
    {
      title: "Salads",
      description: "This is a generic description for salads",
    },
  ],
};

export const categories = [
  {
    title: "Pizza",
    description: _descriptions[1].descriptions.description1,
  },
  {
    title: "Appetizers",
    description: "One cup of Ranch, Pizza, or Nacho Cheese sauce included",
  },
  {
    title: "Specialty Pizza",
    description: "Thin or Pan crust available",
  },
  {
    title: "Salads",
    description: "This is a generic description for salads",
  },
];

export const itemDescription = [
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

// export const specialtyPizzas = [
//   "BBQ",
//   "5 Meat*",
//   "Beef Taco",
//   "Chicken Taco",
//   "Chicken Fajita**",
//   "Triple Pepperoni",
//   "Borderline 9",
//   "The Everything",
// ];

// export const pizzaToppings = [
//   "Canadian Bacon",
//   "Pepperoni",
//   "Hamburger",
//   "Sausage",
//   "Jalapeno*",
//   "Diced Tomato*",
//   "Green Olives",
//   "Black Olives",
//   "Onion",
//   "Mixed Peppers",
//   "Mushroom",
//   "Pineapple",
//   "Sauerkraut",
// ]

export default data;
