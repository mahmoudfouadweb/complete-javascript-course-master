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
console.log(raval, yousef);

console.log(mahmoud instanceof Person);
Person.prototype.ageReach = function () {
  
  console.log(2030 -this.twentyThree );
};
// 1. new {} is created
//  2. function is called,thi = {}
// 3. {} linked to prototype
// 4. function automatically return {}

//  Prototypes
Person.prototype.calcAge = function () {
  console.log(2030 - this.year);
};

mahmoud.calcAge();
mahmoud.ageReach();
raval.calcAge();
yousef.calcAge();
asmaa.calcAge();
raval.ageReach();
