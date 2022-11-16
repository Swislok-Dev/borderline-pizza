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
  ],
};

export default data;
