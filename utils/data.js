// title: '',
// category: '',
// prices: ,
// slug: "some-product-name",

const data = {
  products: [
    // appetizers

    {
      title: 'Bread Sticks',
      category: 'appetizers',
      prices: {
        standard: 4.5,
      },
      slug: 'bread-sticks',
    },
    {
      title: 'Cheese Sticks',
      category: 'appetizers',
      prices: {
        standard: 6.5,
      },
      slug: 'cheese-sticks',
    },
    {
      title: 'Bacon Cheddar Cheese Sticks',
      category: 'appetizers',
      prices: {
        standard: 9.0,
        extraSauce: 1,
      },
      slug: 'bacon-cheddar-cheese-sticks',
    },
    {
      title: 'Cheese Bread or Garlic Cheese Bread',
      category: 'appetizers',
      prices: {
        small: 6.5,
        medium: 9.0,
        large: 12.0,
        extraSauce: 1.0,
      },
      slug: 'cheese-bread-or-garlic-cheese-bread',
    },

    // beverages

    // {
    //   beverages: [
    //     {
    //       title: 'Dine In',
    //       prices: {
    //         adult: 1.75,
    //         child: 0.5,
    //       },
    //     },

    //     {
    //       title: 'Carry Out',
    //       description: 'No Refills on carry out or a shared glass',
    //       prices: {
    //         large: 1.75,
    //       },
    //     },
    //     {
    //       title: '12 Oz Can',
    //       prices: 1.0,
    //     },
    //     {
    //       title: '2 Liter Bottle',
    //       prices: 3.0,
    //     },
    //   ],
    // },

    // nachos

    {
      title: 'Nachos or Chips and Salsa',
      category: 'nachos',
      prices: {
        small: 2.5,
        large: 3.75,
      },
      slug: 'nachos-or-chips-and-salsa',
    },
    {
      title: 'Meaty Nachos',
      category: 'nachos',
      prices: {
        small: 3.5,
        large: 6.25,
      },
      slug: 'meaty-nachos',
    },
    {
      title: 'Super Nachos',
      category: 'nachos',
      prices: {
        small: 5.0,
        large: 8.0,
      },
      slug: 'super-nachos',
    },
    {
      title: 'Super Duper Nachos',
      category: 'nachos',
      prices: {
        small: 6.0,
        large: 9.0,
      },
      slug: 'super-duper-nachos',
    },

    // salads

    {
      title: 'Garden Salad',
      category: 'salads',
      prices: {
        'Ranch or French Dressing': 2.75,
        'Add Chicken': 4.0,
      },
      slug: 'garden-salad',
    },
    {
      title: 'Taco Salad',
      category: 'salads',
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
      slug: 'taco-salad',
    },

    // {
    //   nachos: [
    //     {
    //       title: 'Nachos or Chips and Salsa',
    //       description: '',
    //       category: 'Nachos',
    //       prices: {
    //         small: 2.5,
    //         large: 3.75,
    //       },
    //       options: {},
    //     },
    //     {
    //       title: 'Meaty Nachos',
    //       description: '',
    //       category: 'Nachos',
    //       prices: {
    //         small: 3.5,
    //         large: 6.25,
    //       },
    //       options: {},
    //     },
    //     {
    //       title: 'Super Nachos',
    //       description: '',
    //       category: 'Nachos',
    //       prices: {
    //         small: 5.0,
    //         large: 8.0,
    //       },
    //       options: {},
    //     },
    //     {
    //       title: 'Super Duper Nachos',
    //       description: '',
    //       category: 'Nachos',
    //       prices: {
    //         small: 6.0,
    //         large: 9.0,
    //       },
    //       options: {},
    //     },
    //   ],
    // },
    // {
    //   salads: [
    //     {
    //       title: 'Garden Salad',
    //       description: '',
    //       category: 'Salads',
    //       prices: 2.75,
    //       options: {
    //         addChicken: 1.25, //should equal $4.00
    //       },
    //     },
    //     {
    //       title: 'Taco Salad',
    //       description: '',
    //       category: 'Salads',
    //       prices: {
    //         small: 5.0,
    //         large: 8.0,
    //       },
    //       options: {
    //         chicken: 0.5,
    //       },
    //     },
    //   ],
    // },
    // {
    //   tacos: [
    //     {
    //       title: 'Hard Taco',
    //       description: '',
    //       category: 'Tacos',
    //       prices: 1.5,
    //       options: 'Beef, Chicken BBQ',
    //     },
    //     {
    //       title: 'Baby Soft Taco',
    //       description: '',
    //       category: 'Tacos',
    //       prices: 1.5,
    //       options: 'Beef, Chicken or BBQ',
    //     },
    //     {
    //       title: 'Soft Taco',
    //       description: '',
    //       prices: {
    //         beef: 4.5,
    //         chicken: 5.0,
    //       },
    //       options: {},
    //     },
    //     {
    //       title: 'Super Taco:',
    //       description: '',
    //       prices: {
    //         beef: 4.5,
    //         chicken: 5,
    //       },
    //       options: {},
    //     },
    //     {
    //       title: 'Soft Taco Dinner',
    //       description: '',
    //       prices: {
    //         beef: 6.0,
    //         chicken: 6.5,
    //       },
    //       options: {},
    //     },
    //   ],
    // },
    // {
    //   extras: [
    //     {
    //       title: 'Tomatoes, black olives, jalapenos',
    //       description: 'added directly to your food',
    //       prices: 0.25,
    //     },
    //     {
    //       title: 'Small cup of',
    //       description:
    //         'tomatoes, black olives, onions, jalapenos, sour cream, hot salsa, mild salsa, nacho cheese or taco sauce',
    //       prices: 0.5,
    //     },
    //     {
    //       title: 'Large cup of',
    //       description:
    //         'tomatoes, black olives, onions, jalapenos, sour cream, hot salsa, mild salsa, nacho cheese or taco sauce',
    //       prices: 1.0,
    //     },
    //   ],
    // },
  ],
};

export default data;
