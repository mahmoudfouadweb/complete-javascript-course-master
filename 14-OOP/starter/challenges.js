'use strict';
//  Challenge one
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function (up) {
  console.log((this.speed += up));
};

Car.prototype.brake = function (down) {
  console.log((this.speed -= down));
};

console.log(Car.prototype);

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

console.log('--------- BMW Challenge 1 -----------');
bmw.accelerate(10);
bmw.brake(5);

console.log('------ Mercedes ---------');

mercedes.accelerate(10);
mercedes.brake(5);

//  Challenge two

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUS() {
    const convertToMi = this.speed / 1.6;
    console.log(`speed is ${convertToMi} mi`);
    return convertToMi;
  }

  set speedUS(speed) {
    console.log(`speed is ${speed * 1.6} km`);
    return (this.speed = speed * 1.6);
  }

  accelerate(up) {
    console.log((this.speed += up));
  }

  brake(down) {
    console.log((this.speed -= down));
  }
}

const ford = new CarCl('Ford', 120);

console.log(ford);

ford.speedUS;
ford.accelerate(10);
ford.brake(5);
ford.speedUS = 75;

console.log('--------// challenge 2 -----------');
console.log(ford.speed);
console.log(ford.speedUS);
console.log('--------//-----------');

// Challenge Three

