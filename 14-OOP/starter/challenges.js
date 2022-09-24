'use strict';
//  Challenge one
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  const increase = (this.speed += 20);
  console.log(increase);
  return increase;
};

Car.prototype.brake = function () {
  console.log((this.speed -= 5));
};

console.log(Car.prototype);

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

console.log('--------- BMW Challenge 1 -----------');
// bmw.accelerate(10);
// bmw.brake(5);

console.log('------ Mercedes ---------');

// mercedes.accelerate(10);
// mercedes.brake(5);

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

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  return (this.charge = chargeTo);
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};
console.log('------ Tesla ---------');
// Tesla
const tesla = new EV('Tesla', 120, 23);

console.log(tesla);

// Methods
// tesla.chargeBattery();
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);

class EVCl extends CarCl {
  #charge;
  constructor(charge, make, speed) {
    super(make, speed);
    this.#charge = charge;

    console.log(`Welcome to ${this.make} car charge is ${this.#charge}`);
  }

  // up para count of speed
  accelerate(up) {
    this.speed += up;
    return this;
  }
  // down para count of brake
  brake(down) {
    console.log((this.speed -= down));
    this.speed -= down;
    this.#charge--
    return this;
  }
  
  
  // Charge in %
  chargeBattery(chargePre) {
    this.#charge += chargePre;
    return this;
  }
  
  get carStatus() {
    console.log(`Welcome to ${this.make} SUPER car charge is ${this.#charge} your speed now ${this.speed}KM/H`);
  }

  get chargeStatus() {
    console.log('chargeStatus', this.#charge);
    return this.#charge;
  }
}
console.log(`****************   I AM HERE 👋 **********************`);
const rivian = new EVCl(23, 'Rivian', 120);

console.log(rivian);
rivian.chargeStatus;
rivian.accelerate(20).accelerate(20).accelerate(20).brake(5).chargeBattery(50).accelerate(20).carStatus;

console.log(`****************   END HERE 👋 **********************`);
