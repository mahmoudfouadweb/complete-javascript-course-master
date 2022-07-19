'use strict';
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};
const account5 = {
  owner: 'Mahmoud Fouad',
  movements: [7950, 25000, -1500, -200, -1024, -2600],
  interestRate: 18,
  pin: 5555,
};
const account6 = {
  owner: 'Asmaa Gamal',
  movements: [4000, 2000, -3000, -2000],
  interestRate: 12,
  pin: 6666,
};

const accounts = [account1, account2, account3, account4, account5, account6];

// const movementsArr = function (arr) {
//   arr.forEach(function (acc) {
//     console.log(acc.movements);
//   });
// };
// movementsArr(accounts);
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
  ['EGP', 'Egypt Pound'],
]);

// Creating UserName in account object
const creatUserName = function (accs) {
  accs.forEach(
    acc =>
      (acc.userName = acc.owner
        .toLowerCase()
        .split(' ')
        .map(name => name[0])
        .join(''))
  );
};
creatUserName(accounts);
// console.log(accounts);

const movy = [200, -200, 340, -300, -20, 50, 400, -460];

// Movements display [Deposit , Withdrawals]
// Display Movements

const display = function (arr) {
  containerMovements.innerHTML = '';
  arr.movements.forEach((mov, i) => {
    const condition = mov > 0 ? 'deposit' : 'withdrawal';
    containerMovements.insertAdjacentHTML(
      'afterbegin',
      ` 
    <div class="movements__row">
        <div class="movements__type movements__type--${condition}">
        ${i + 1} ${condition}</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">${Math.abs(mov)} EGP</div>
    </div>
    `
    );
  });
};
// display(account5.movements);
const movements = [200, 450, -400, 1300, -650, -130, 70, 1200];
// Balance
function calcDisplayBalance(acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EGP`;
  // console.log('balance is: ', balance);
  console.log(acc.balance);
}
// calcDisplayBalance(account5);

const calcDisplaySummary = function (arr) {
  const incomes = arr.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} EGP`;
  return incomes;
};
// calcDisplaySummary(account5);
// Sammary out
console.log(account5);
const calcSummaryOut = function (arr) {
  const summary = arr.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(summary)} EGP`;
  return Math.abs(summary);
};
// console.log('calc :', calcSummaryOut(account1));
// calcSummaryOut(account5);

// interest

const interest = function (arr) {
  const interestRate = arr.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * arr.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(int);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interestRate} EGP`;
  // const interestRate = arr. (arr.interestRate * calcDisplaySummary(account1)) / 100;
  // calcDisplaySummary(account1) > 1
  //   ? (labelSumInterest.textContent = `${interestRate} EGP`)
  //   : (labelSumInterest.textContent = `suffitiont fund`);
  // console.log(interestRate);
};

const uodateUi = function (acc) {
  // Display Movement
  display(acc);
  // Display balance
  calcDisplayBalance(acc);
  // Display Summary
  calcDisplaySummary(acc);
  calcSummaryOut(acc);
  // interest
  interest(acc);
};

let currentAccount;
// event handler
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );
  // console.log(currentAccount.pin);login__input--user
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Wellcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // clear user name fild and pin
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    // Update ui
    uodateUi(currentAccount);
  }

  // else console.log('err');
});
// transfer money
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.userName !== currentAccount.userName
  ) {
    receiverAcc.movements.push(amount);
    currentAccount.movements.push(-amount);
    uodateUi(currentAccount);
    inputTransferTo.value = inputTransferAmount.value = '';
    console.log('Valid ');
  } else {
    console.log('Not Valid');
  }
  // const balance = calcDisplayBalance(currentAccount);
  // if(amount > 0 && ) {
  // }
});

// Request Loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && amount < 100000) {
    currentAccount.movements.push(amount);
    currentAccount.balance += amount;
    uodateUi(currentAccount);
  } else {
    console.log('loan error');
  }
  inputLoanAmount.value = '';
});
console.log(account5);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
// console.log(max);
// for (let i = 0; i < movements.length; i++) {
//   console.log(movements[i]);
// }
// console.log('=======================');
// movements.forEach(mov => console.log(mov));
// console.log(`=======================`);
// function mov(arr) {
//   arr.map(mov => console.log(mov));
// }
// mov(movements);
/////////////////////////////////////////////////
// map Examples :-
// Example 1
// const arr = [2, 5, 100];
// const doubleNumbers = arr => arr.map(el => el * 2);
// console.log(doubleNumbers(arr));

// // Example 2
// const stringItUp = arr => arr.map(el => el.toString());
// console.log(stringItUp(arr));

// // Example 3
// const arr1 = ['john', 'JACOB', 'jinGleHeimer', 'schmidt'];
// const capitalizeNames = arr => arr.map(el => el.toUpperCase());
// console.log(capitalizeNames(arr1));

// // Example 4
// const names = [
//   {
//     name: 'Angelina Jolie',
//     age: 80,
//   },
//   {
//     name: 'Eric Jones',
//     age: 2,
//   },
//   {
//     name: 'Paris Hilton',
//     age: 5,
//   },
//   {
//     name: 'Kayne West',
//     age: 16,
//   },
//   {
//     name: 'Bob Ziroll',
//     age: 100,
//   },
// ];
// console.dir(names);
// const namesOnly = arr => arr.map((user, i) => user.name);
// console.log(namesOnly(names));

// // Example 5
// const checkAge = arr =>
//   arr.map(function (el) {
//     if (el.age > 16) {
//       return `${el.name} can go to The Matrix`;
//     } else {
//       return `${el.name} is under age!!`;
//     }
//   });
// console.log(checkAge(names));

// // Example 6
// const title = arr => {
//   const array = [];
//   arr.map(el => array.push(`<h1>${el.name}</h1><h2>${el.age}</h2>`));
//   return array;
// };
// console.log(title(names));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposit = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(deposit);
// const withdrawal = movements.filter(function (mov) {
//   return mov < 0;
// });
// console.log(withdrawal);

// //filter Example
// const move = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];
// const posi = move.filter(num => num > 0);
// const withdraw = move.filter(num => num < 0);
// console.log('deposit ', posi);
// console.log('withdrawal ', withdraw);

// const depoo = [];
// const withdr = [];
// for (const move of movements) {
//   move > 0 ? depoo.push(move) : withdr.push(move);
// }
// console.dir(depoo);
// console.dir(withdr);

// Closure function ( a function inside a function and can access in the outer function)
// const closuer = function () {
//   const mess = 'hi there Hola';
//   function seco(message) {
//     return message + mess;
//   }
//   return seco;
// };

// const third = closuer();

// console.log(third('zobr '));

// const arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr);
// console.log(arr2.reverse());

// const currenciess = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currenciess.forEach(function (value, i, map) {
//   console.log(`${i}: ${value}`);
// });
// console.log(`========================`);
// Challenge #2
// const calcAverageHumanAge = function (dogsAges) {
//   const humanAge = dogsAges.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
//   const adults = humanAge.filter(age => age >= 18);
//   const averages = adults.reduce((acc, age) => acc + age, 0) / adults.length;
// console.log('humanAge :', humanAge);
// console.log("adult's :", adults);
// console.log('averages :', averages);
//   return Math.round(averages);
// };
// const avrg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avrg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(avrg1);
// console.log(avrg2);

// const calcAverageHumanAgeArrw = dogsAges => {
//   const ages = dogsAges
//     .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
//   return Math.round(ages);
// };
// // challenge #3 arrow  function transforming
// calcAverageHumanAgeArrw([5, 2, 4, 1, 15, 8, 3]);
// const arr1 = calcAverageHumanAgeArrw([5, 2, 4, 1, 15, 8, 3]);
// const arr2 = calcAverageHumanAgeArrw([16, 6, 10, 5, 6, 1, 4]);
// console.log(arr1);
// console.log(arr2);

// // Array method FIND() Examble
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// const pass = accounts.find(account => account.pin === 3333);
// console.log(pass);
// console.log(account1);
// const userName2 = accounts.find(account => account.userName === 'js');
// console.log(userName2);

// create array from Array method

const x = new Array(7);
console.log(x);

const z = Array.from({ length: 7 }, (curr, i) => i + 1); // (curr, i) or (_,i)
console.log(z);
