'use strict';

// const me = 'jonas'

// if ( me === 'jonas') {
//     console.log(`${me} is a ${job}`);
//     // const job = 'police man'
//     console.log(x);
// }
//===============================================================
// variables
// console.log(me);
// console.log(job);
// console.log(birthyear);

// var me = 'mahmoud';
// let job = 'officer';
// const birthyear = 1991;

// // functions
// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// // this keyword

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const mahmoud = {
//   year: 1991,
//   age: function () {
//     console.log(2037 - this.year);
//   },
// };
// mahmoud.age(1991);

// const asmaa = {
//   year: 2017,
// };
// asmaa.age = mahmoud.age;
// asmaa.age();
console.log(
  '======================================================================'
);

const jonas = {
  firstName: 'jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
    const that = this;
    const isMalillenal = function () {
      console.log(that);
      console.log(that.year >= 1981 && that.year <= 1996);
    };
    isMalillenal();
  },
  greet: function () {
    return `hi ${this.firstName} 🥰`;
  },
};
jonas.calcAge();
jonas.greet();

const h1 = document.querySelector('h1');
console.log(h1);
h1.addEventListener('click', function (e) {
  h1.textContent = jonas.greet();
});

let lastName = 'williams';
let oldLastName = lastName;
lastName = 'mahmoud';
console.log(lastName); // mahmoud
console.log(oldLastName); // williams

const jessica = {
  firstName: 'jessica',
  lastName: 'williams',
  age: 27,
};

const marriedJassica = jessica;
marriedJassica.age = 37;
console.log(jessica.age, marriedJassica.age);

const koko = {
  year: 2015,
  calcAge: function () {
    console.log(2030 - this.year);
    // console.log(this);
  },
};
koko.calcAge();

const raval = {
  year: 2010,
};
raval.calcAge = koko.calcAge;
raval.calcAge();

const mahmoud = {
  year: 1991,
  firstName: 'mahmoud',
  calcAge: function () {
    console.log(`your age is:- ${2022 - this.year} years 🎂`);
  },
  greet: function () {
    const greet = `Holla, ${this.firstName} 💞 `;
    console.log(greet);
    return greet;
  },
};
mahmoud.calcAge();
mahmoud.greet();

document.querySelector('h1').addEventListener('click', function () {
  document.querySelector('h1').textContent = mahmoud.greet();
});
