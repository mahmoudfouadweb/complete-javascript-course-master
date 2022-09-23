// 'use strict';

// const year = new Date().getFullYear();
// const Person = function (firstName, birthYear, currentYear) {
//   // Instance Properties
//   this.userName = firstName;
//   this.year = birthYear;
//   this.twentyThree = currentYear;
//   // never do this
//   // this.calcAge = function () {
//   //   console.log(2037 - this.year);
//   // };
// };
// const mahmoud = new Person('mahmoud', 1991, year);
// const asmaa = new Person('Asmaa', 1991, year);
// const raval = new Person('Raval', 2015, year);
// const yousef = new Person('Yousef', 2018, year);
// // console.log(raval, yousef);

// // console.log(mahmoud instanceof Person);
// Person.prototype.ageReach = function () {
//   // console.log(2030 - this.twentyThree);
// };
// // 1. new {} is created
// //  2. function is called,thi = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}

// //  Prototypes
// Person.prototype.calcAge = function () {
//   // console.log(2030 - this.year);
// };

// mahmoud.calcAge();
// mahmoud.ageReach();
// raval.calcAge();
// yousef.calcAge();
// asmaa.calcAge();
// raval.ageReach();

// // console.log(Object.getPrototypeOf(mahmoud));
// // console.log(mahmoud.__proto__ === Person.prototype);
// // console.log(Object.getPrototypeOf(Person.prototype));

// Person.prototype.strength = 'strong';

// // console.log(mahmoud.strength);
// // console.log(mahmoud.hasOwnProperty('userName'));
// // console.log(Person.hasOwnProperty('strength'));
// // do {0
// //   Object.getPrototypeOf(object);
// // console.log(object);
// // } while (object);

// // console.log(mahmoud.__proto__.__proto__);

// const Car = function (make, speed) {
//   // console.log(this);
//   this.speed = speed;
//   this.make = make;
// };

// const bmw = new Car('BMW', 120);
// Car.prototype.accelerate = function (acc) {
//   const speedUp = (this.speed += acc);
//   // console.log(speedUp);
// };

// Car.prototype.brake = function (acc) {
//   const speedDown = (this.speed -= acc);
//   // console.log(speedDown);
// };

// bmw.accelerate(5);
// bmw.accelerate(5);
// bmw.brake(5);
// bmw.accelerate(30);
// bmw.brake(5);

// // console.log(Car.prototype);

// // console.log(bmw);
// // =========================== * Classes * =========================== //

// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   //  method will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greatGreet() {
//     console.log(`very welcome ${this.firstName}`);
//   }

//   set firstName(name) {
//     if (name.includes(' ')) {
//       this._firstName = name;
//     } else {
//       console.log('Error');
//     }
//   }

//   get firstName() {
//     return this._firstName;
//   }

//   get age() {
//     return 2030 - this.birthYear;
//   }

//   static hey() {
//     console.log(`hey there 👋`);
//     console.log(new this('mas sm', 2000));
//   }
// }

// Person.hey = function () {
//   console.log(`hi there 👋`);
//   console.dir(this);
// };

// const rafal = new PersonCl('Rafal', 2015);
// const yossef = new PersonCl('Yossef', 2018);

// console.log('__________ YOSSEF _______________');
// console.log(yossef);
// yossef.firstName = 'Yossef Mahmoud';
// console.log(yossef);

// console.log(rafal);
// rafal.firstName = 'Rafal Mahmoud';
// rafal.calcAge();

// Person.hey();
// PersonCl.hey();
// console.log(Person.prototype);

// // Array.from(document.querySelectorAll('h1')).forEach(
// //   h => (h.textContent = `${rafal._firstName} ${yossef._firstName}`)
// //   );
// console.log(rafal.firstName);

// console.log(rafal.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

// rafal.greet();
// rafal.greatGreet();

// ///////////////////////////////////////////////////////////////////////////

// const account = {
//   name: 'Mahmoud',
//   fullName: 'Mahmoud Fouad',
//   birthYear: 1991,
//   movement: [200, 312, 400, 50],

//   get calcAge() {
//     console.log(2030 - this.birthYear);
//   },

//   set calcAge(year) {
//     console.log(year - this.birthYear);
//   },

//   set fullName(name) {
//     if (name.includes(' ')) this.fullName = name;
//     else {
//       console.log('please check your correct full name');
//     }
//   },
// };

// account.calcAge;
// account.calcAge = 2025;

// account.check = 'mahmoud f';
// console.log(account.theFullName);

// ////////////////////////////////////////////////////////////
// console.log('---------------------- OBJECT.CREATE -----------------------');

// const personProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
// };

// console.log(personProto);

// const rasha = Object.create(personProto);

// console.log(rasha);

// rasha.name = 'Rasha ahmed'
// rasha.birthYear = 1990;
// rasha.calcAge()
// console.log(rasha.__proto__);

///////////////////////////////////////////////////

// const PersonCon = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// PersonCon.prototype.calcAge = function (from) {
//   console.log(`My age is ${2030 - this.birthYear} years from ${from}`);
// };

// const Student = function (firstName, birthYear, course) {
//   PersonCon.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(PersonCon.prototype);

// Student.prototype.greeting = function () {
//   console.log(`hello i am ${this.firstName} and i study ${this.course}`);
// };

// const mody = new Student('Mahmoud', 1991, 'Javascript');
// mody.greeting();
// mody.calcAge('mody');

// console.log(mody.__proto__);
// console.log(PersonCon.prototype === Student.prototype);
// console.log(Student.prototype === mody.__proto__);
// console.log(mody.__proto__);
// console.log(mody.__proto__.__proto__.__proto__.__proto__);
// console.dir(Student.prototype.constructor);

// const Lady = function (boobs, pussy) {
//   this.pussy = pussy;
//   this.boobs = boobs;
// };

// const lena = new Lady('big', 'tight');
// console.log(lena);
// console.dir(lena.__proto__.constructor);

// const Transform = function (ass, dick, boobs, pussy) {
//   Lady.call(this, boobs, pussy);
//   this.ass = ass;
//   this.dick = dick;
// };

// Transform.prototype = Object.create(Lady.prototype);

// const nadaSteety = new Transform('soft', 'small', 'nice', 'none');
// console.log(nadaSteety);

// console.dir(Transform.prototype);

// console.log(nadaSteety instanceof Transform);
// console.log(nadaSteety instanceof Lady);

// class inheritance

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //  method will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greatGreet() {
    console.log(`very welcome ${this.fullName}`);
  }

  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      console.log('Error');
    }
  }

  get fullName() {
    return this._fullName;
  }

  get age() {
    return 2030 - this.birthYear;
  }

  static hey() {
    console.log(`hey there 👋`);
    console.log(new this('mas sm', 2000));
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(2030 - this.birthYear);
  }
}

const maha = new StudentCl('maha ahmed', 1991, 'Javascript');
console.log(maha);
/////////////////////////////////////////////////////////////////////////
console.log('********************* +18 *************************');

class LadyCl {
  constructor(name, boobs, pussy, ass) {
    this.name = name;
    this.boobs = boobs;
    this.pussy = pussy;
    this.ass = ass;
  }

  statusPussy(status) {
    console.log(
      `My name is ${this.name} I am a horny Pitch have a wet ${this.pussy} pussy i wanna a ${status}`
    );
  }

  statusBoobs(status) {
    console.log(
      `My name is ${this.name} I am a horny Pitch have a big ${this.boobs} tits i wanna a ${status}`
    );
  }

  statusAss(status) {
    console.log(
      `My name is ${this.name} Come to fuck me I a horny lady come fuck my ${this.ass} ass now i wanna a ${status}`
    );
  }
}

const mia = new LadyCl('Mia Khalifa', 'rounded', 'tight black', 'big');
mia.statusPussy('big');
mia.statusBoobs('big');
mia.statusAss('big');
class LadyBoyCl extends LadyCl {
  constructor(name, boobs, ass, dick, pussy) {
    super(name, boobs, pussy, ass);
    this.dick = dick;
  }

  statusDick(status) {
    console.log(`i have a ${this.dick} dick i want a ${status} dick inside me`);
  }
}

const gaylyne = new LadyBoyCl('gege mtnak', 'flat', 'nice', 'small', 'no');
console.log(gaylyne);

gaylyne.statusAss('any');
gaylyne.statusPussy('no need')
gaylyne.statusBoobs('any')
gaylyne.statusDick('any')
