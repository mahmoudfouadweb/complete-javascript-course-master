'use strict';

const year = new Date().getFullYear();
const Person = function (firstName, birthYear, currentYear) {
  // Instance Properties
  this.userName = firstName;
  this.year = birthYear;
  this.twentyThree = currentYear;
  // never do this
  // this.calcAge = function () {
  //   console.log(2037 - this.year);
  // };
};
const mahmoud = new Person('mahmoud', 1991, year);
const asmaa = new Person('Asmaa', 1991, year);
const raval = new Person('Raval', 2015, year);
const yousef = new Person('Yousef', 2018, year);
// console.log(raval, yousef);

// console.log(mahmoud instanceof Person);
Person.prototype.ageReach = function () {
  // console.log(2030 - this.twentyThree);
};
// 1. new {} is created
//  2. function is called,thi = {}
// 3. {} linked to prototype
// 4. function automatically return {}

//  Prototypes
Person.prototype.calcAge = function () {
  // console.log(2030 - this.year);
};

mahmoud.calcAge();
mahmoud.ageReach();
raval.calcAge();
yousef.calcAge();
asmaa.calcAge();
raval.ageReach();

// console.log(Object.getPrototypeOf(mahmoud));
// console.log(mahmoud.__proto__ === Person.prototype);
// console.log(Object.getPrototypeOf(Person.prototype));

Person.prototype.strength = 'strong';

// console.log(mahmoud.strength);
// console.log(mahmoud.hasOwnProperty('userName'));
// console.log(Person.hasOwnProperty('strength'));
// do {0
//   Object.getPrototypeOf(object);
// console.log(object);
// } while (object);

// console.log(mahmoud.__proto__.__proto__);

const Car = function (make, speed) {
  // console.log(this);
  this.speed = speed;
  this.make = make;
};

const bmw = new Car('BMW', 120);
Car.prototype.accelerate = function (acc) {
  const speedUp = (this.speed += acc);
  // console.log(speedUp);
};

Car.prototype.brake = function (acc) {
  const speedDown = (this.speed -= acc);
  // console.log(speedDown);
};

bmw.accelerate(5);
bmw.accelerate(5);
bmw.brake(5);
bmw.accelerate(30);
bmw.brake(5);

// console.log(Car.prototype);

// console.log(bmw);
// =========================== * Classes * =========================== //

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  //  method will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greatGreet() {
    console.log(`very welcome ${this.firstName}`);
  }

  set firstName(name) {
    if (name.includes(' ')) {
      this._firstName = name;
    } else {
      console.log('Error');
    }
  }

  get firstName() {
    return this._firstName;
  }

  get age() {
    return 2030 - this.birthYear;
  }
}

Person.hey = function () {
  console.log(`hi there 👋`);
}

const rafal = new PersonCl('Rafal', 2015);
const yossef = new PersonCl('Yossef', 2018);

console.log('__________ YOSSEF _______________');
console.log(yossef);
yossef.firstName = 'Yossef Mahmoud';
console.log(yossef);

console.log(rafal);
rafal.firstName = 'Rafal Mahmoud';
rafal.calcAge();


Person.hey();

console.log(Person.prototype.name);



// Array.from(document.querySelectorAll('h1')).forEach(
//   h => (h.textContent = `${rafal._firstName} ${yossef._firstName}`)
//   );
console.log(rafal.firstName);

console.log(rafal.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

rafal.greet();
rafal.greatGreet();

///////////////////////////////////////////////////////////////////////////

const account = {
  name: 'Mahmoud',
  fullName: 'Mahmoud Fouad',
  birthYear: 1991,
  movement: [200, 312, 400, 50],

  get calcAge() {
    console.log(2030 - this.birthYear);
  },

  set calcAge(year) {
    console.log(year - this.birthYear);
  },

  set fullName(name) {
    if (name.includes(' ')) this.fullName = name;
    else {
      console.log('please check your correct full name');
    }
  },
};

account.calcAge;
account.calcAge = 2025;

account.check = 'mahmoud f';
console.log(account.theFullName);
