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
