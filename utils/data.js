// title: '',
// description: '',
// category: '',
// price: ,
// options: {},

const data = {
  products: [
    {
      nachos: [
        {
          title: 'Nachos or Chips and Salsa',
          description: '',
          category: 'Nachos',
          price: {
            small: 2.5,
            large: 3.75,
          },
          options: {},
        },
        {
          title: 'Meaty Nachos',
          description: '',
          category: 'Nachos',
          price: {
            small: 3.5,
            large: 6.25,
          },
          options: {},
        },
        {
          title: 'Super Nachos',
          description: '',
          category: 'Nachos',
          price: {
            small: 5.0,
            large: 8.0,
          },
          options: {},
        },
        {
          title: 'Super Duper Nachos',
          description: '',
          category: 'Nachos',
          price: {
            small: 6.0,
            large: 9.0,
          },
          options: {},
        },
      ],
    },
    {
      salads: [
        {
          title: 'Garden Salad',
          description: '',
          category: 'Salads',
          price: 2.75,
          options: {
            addChicken: 1.25, //should equal $4.00
          },
        },
        {
          title: 'Taco Salad',
          description: '',
          category: 'Salads',
          price: {
            small: 5.0,
            large: 8.0,
          },
          options: {
            chicken: 0.5,
          },
        },
      ],
    },
    {
      tacos: [
        {
          title: 'Hard Taco',
          description: '',
          category: 'Tacos',
          price: 1.5,
          options: 'Beef, Chicken BBQ',
        },
        {
          title: 'Baby Soft Taco',
          description: '',
          category: 'Tacos',
          price: 1.5,
          options: 'Beef, Chicken or BBQ',
        },
        {
          title: 'Soft Taco',
          description: '',
          price: {
            beef: 4.5,
            chicken: 5.0,
          },
          options: {},
        },
        {
          title: 'Super Taco:',
          description: '',
          price: {
            beef: 4.5,
            chicken: 5,
          },
          options: {},
        },
        {
          title: 'Soft Taco Dinner',
          description: '',
          price: {
            beef: 6.0,
            chicken: 6.5,
          },
          options: {},
        },
      ],
    },
    {
      extras: [
        {
          title: 'Tomatoes, black olives, jalapenos',
          description: 'added directly to your food',
          price: 0.25,
        },
        {
          title: 'Small cup of',
          description:
            'tomatoes, black olives, onions, jalapenos, sour cream, hot salsa, mild salsa, nacho cheese or taco sauce',
          price: 0.5,
        },
        {
          title: 'Large cup of',
          description:
            'tomatoes, black olives, onions, jalapenos, sour cream, hot salsa, mild salsa, nacho cheese or taco sauce',
          price: 1.0,
        },
      ],
    },
  ],
};

export default data;
