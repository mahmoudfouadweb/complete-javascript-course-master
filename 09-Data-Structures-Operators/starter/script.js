'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [[this.starterMenu[starterIndex]], [this.mainMenu[mainIndex]]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
///////////////////////////////////////////////////
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { magor = [] } = restaurant;
console.log(magor);

const {
  fri: { open: o, close: c },
} = hours;
console.log(o, c);

// const result = restaurant.order(2, 0);
// console.log(result);

// const [starter, main1] = restaurant.order(2, 0);
// console.log(starter, main1);

// const arr = [1, 2, 3];
// console.log(arr);
// const [a, b, c] = arr;
// console.log(a, b, c);

// let [first, , , second] = restaurant.categories;
// console.log(first, second);
// [first, second] = [second, first];
// console.log(first, second);

const nested = [2, 4, [5]];
const [i, j, [x, y = 'default']] = nested;
console.log(x, y, i, j);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
for (const item of menu) console.log(item);
for (const [i, item] of menu.entries()) {
  console.log(`${i + 1} ${item}`);
}