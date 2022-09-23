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

console.log('--------- BMW -----------');
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

console.log('--------//-----------');
console.log(ford.speed);
console.log(ford.speedUS);
console.log('--------//-----------');

const PersonCon = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

PersonCon.prototype.calcAge = function () {
  console.log(`My age is ${2030 - this.birthYear} years`);
};

const Student = function (firstName, birthYear, course) {
  PersonCon.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype.greeting = function () {
  console.log(`hello i am ${this.firstName} and i study ${this.course}`);
};

const mody = new Student('Mahmoud', 1991, 'Javascript');
mody.greeting()
console.log(mody);
