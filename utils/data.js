// title: '',
// category: '',
// prices: ,
// slug: "some-product-name",

const data = {
  products: [
    // // appetizers

    {
      title: "Bread Sticks",
      category: "appetizers",
      prices: {
        standard: 4.5,
      },
      options: {},
      slug: "bread-sticks",
    },
    {
      title: "Cheese Sticks",
      category: "appetizers",
      prices: {
        standard: 6.5,
      },
      options: {},
      slug: "cheese-sticks",
    },
    {
      title: "Bacon Cheddar Cheese Sticks",
      category: "appetizers",
      prices: {
        standard: 9.0,
      },
      options: {
        "Extra Sauce": 1,
      },
      slug: "bacon-cheddar-cheese-sticks",
    },
    {
      title: "Cheese Bread or Garlic Cheese Bread",
      category: "appetizers",
      prices: {
        small: 6.5,
        medium: 9.0,
        large: 12.0,
      },
      options: {
        "Extra Sauce": 1.0,
      },
      slug: "cheese-bread-or-garlic-cheese-bread",
    },

    // nachos

    {
      title: "Nachos or Chips and Salsa",
      category: "nachos",
      prices: {
        small: 2.5,
        large: 3.75,
      },
      options: {},
      slug: "nachos-or-chips-and-salsa",
    },
    {
      title: "Meaty Nachos",
      category: "nachos",
      prices: {
        small: 3.5,
        large: 6.25,
      },
      options: {},
      slug: "meaty-nachos",
    },
    {
      title: "Super Nachos",
      category: "nachos",
      prices: {
        small: 5.0,
        large: 8.0,
      },
      options: {},
      slug: "super-nachos",
    },
    {
      title: "Super Duper Nachos",
      category: "nachos",
      prices: {
        small: 6.0,
        large: 9.0,
      },
      options: {},
      slug: "super-duper-nachos",
    },

    // salads

    {
      title: "Garden Salad",
      category: "salads",
      prices: {
        "Ranch or French Dressing": 2.75,
      },
      options: {
        "Add Chicken": 4.0,
      },
      slug: "garden-salad",
    },
    {
      title: "Taco Salad",
      category: "salads",
      prices: {
        beef: {
          small: 5.0,
          large: 8.0,
        },
        chicken: {
          small: 5.5,
          large: 8.5,
        },
      },
      options: {},
      slug: "taco-salad",
    },

    // tacos

    {
      title: "Hard Taco",
      category: "tacos",
      prices: {
        "Beef, Chicken or BBQ": 1.5,
      },
      options: {},
      slug: "hard-taco",
    },
    {
      title: "Baby Soft Taco",
      category: "tacos",
      prices: {
        "Beef, Chicken or BBQ": 1.5,
      },
      options: {},
      slug: "baby-soft-taco",
    },
    {
      title: "Soft Taco",
      category: "tacos",
      prices: {
        beef: 3.5,
        "Chicken, Chicken Ranch or BBQ": 4.0,
      },
      options: {},
      slug: "soft-taco",
    },
    {
      title: "Super Taco",
      category: "tacos",
      prices: {
        beef: 4.5,
        "Chicken, Chicken Ranch or BBQ": 5.0,
      },
      options: {},
      slug: "super-taco",
    },
    {
      title: "Soft Taco Dinner",
      category: "tacos",
      prices: {
        beef: 6,
        "Chicken, Chicken Ranch or BBQ": 6.5,
      },
      options: {},
      slug: "soft-taco-dinner",
    },

    // burritos

    {
      title: "Baby Burrito",
      category: "burritos",
      prices: {
        "Beef, Bean, Chickon or BBQ": 1.5,
      },
      options: {},
      slug: "baby-burrito",
    },
    {
      title: "Burrito",
      category: "burritos",
      prices: {
        "Beef, Bean, Beef & Bean": 3.5,
        "Chicken, Chicken Ranch or BBQ": 4.0,
      },
      options: {},
      slug: "burrito",
    },
    {
      title: "Super Burrito",
      category: "burritos",
      prices: {
        "Beef, Bean, Beef & Bean": 5.0,
        "Chicken, Chicken Ranch or BBQ": 6.0,
      },
      options: {},
      slug: "super-burrito",
    },
    {
      title: "Burrito Dinner",
      category: "burritos",
      prices: {
        "Beef, Bean, Beef & Bean": 6.0,
        "Chicken, Chicken Ranch or BBQ": 6.5,
      },
      options: {},
      slug: "burrito-dinner",
    },

    // enchiladas

    {
      title: "Enchilada",
      category: "enchiladas",
      prices: {
        "Beef or Chicken": 4.0,
      },
      options: {},
      slug: "enchilada",
    },
    {
      title: "Super Enchilada",
      category: "enchiladas",
      prices: {
        "Beef or Chicken": 5.0,
      },
      options: {},
      slug: "super-enchilada",
    },
    {
      title: "Enchilada Dinner",
      category: "enchiladas",
      prices: {
        Beef: 6.0,
        Chicken: 6.5,
      },
      options: {},
      slug: "enchilada-dinner",
    },

    // pizza

    {
      title: "Sizes",
      category: "pizza",
      prices: {
        Small: {
          Cheese: 7.0,
          "1-14 Toppings": 9.0,
          Extras: 1.0,
        },
        Medium: {
          Cheese: 12.0,
          "1-14 Toppings": 15.0,
          Extras: 1.5,
        },
        Large: {
          Cheese: 14.0,
          "1-14 Toppings": 18.0,
          Extras: 2.0,
        },
      },
      options: {},
      slug: "small-medium-large-pizza",
    },

    {
      title: 'Small 9"',
      category: "pizza",
      prices: {
        Cheese: 7.0,
        "1-14 Toppings": 9.0,
      },
      options: {
        Extras: 1.0,
      },
      slug: "small-pizza",
    },
    {
      title: 'Medium 13"',
      category: "pizza",
      prices: {
        Cheese: 12.0,
        "1-14 Toppings": 15.0,
      },
      options: {
        Extras: 1.5,
      },
      slug: "medium-pizza",
    },
    {
      title: 'Large 15"',
      category: "pizza",
      prices: {
        Cheese: 14.0,
        "1-14 Toppings": 18.0,
      },
      options: {
        Extras: 2.0,
      },
      slug: "large-pizza",
    },

    // toppings
    {
      title: "Toppings",
      category: "pizza-toppings",
      prices: { standard: 1 },
      options: ["Canadian Bacon"],
      slug: "toppings",
    },
  ],
  "pizza-toppings": {
    category: "pizza-toppings",
    selection: [
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
    ],
    options: {
      "Add Bacon": {
        Small: 1.0,
        Medium: 2.0,
        Large: 3.0,
      },
    },
  },
};

export default data;
