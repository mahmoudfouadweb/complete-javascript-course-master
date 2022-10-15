'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const egyptFly = {
  airline: 'egypt fly',
  iataCode: 'EH',
  bookings: [],
};

const egyptFlayBook = lufthansa.book.call(egyptFly, 33, 'Mahmoud fouad');
console.log(lufthansa);
const egyptBBook = lufthansa.book.bind(egyptFly);
egyptBBook(31, 'dev mahmoud');

console.log(egyptFly);
lufthansa.plans = 300;
lufthansa.buy = function clicking() {
  this.plans++;
  console.log(this.plans);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buy.bind(lufthansa));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.14, 50));

const addVat = addTax.bind(null, 0.14);
console.log(addVat(50));

const returnF = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const value = returnF(0.14);
console.log(value(50));
