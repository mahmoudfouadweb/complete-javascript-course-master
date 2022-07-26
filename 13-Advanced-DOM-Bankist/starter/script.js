'use strict';

///////////////////////////////////////////////////
// DOM variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const h1 = document.querySelector('h1');
const header = document.querySelector('.header');
const operation = document.querySelector('.operations');
const tabContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab ');
const tabsContent = document.querySelectorAll('.operations__content ');
const nav = document.querySelector('.nav');

///////////////////////////////////////////////////
// Fade Nave Bar
nav.addEventListener('mouseover', e => {
  mouseOver(e, 0.5);
});

nav.addEventListener('mouseout', e => {
  mouseOver(e, 1);
});

function mouseOver(e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const sibling = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    sibling.forEach(el => {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
}

//
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
// tap toggle

// BAD Practice
// tabs.forEach(function (t) {
//   t.addEventListener('click', e => {
//     console.log('TAP');
//   });
// });

// Event Delegation (Best Practice)

tabContainer.addEventListener('click', e => {
  const clicked = e.target.closest('.operations__tab');
  const tabContainer = document.querySelector('.operations__tab-container');
  console.log('Tap DELEGATION', clicked);

  // active button mode-off
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  // Guard Clause
  if (!clicked) return;
  // hide content
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // active button mode-on
  clicked.classList.add('operations__tab--active');

  // activate content area
  // show content
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');

  //click Sound
  const clickSound = new Audio('./click.wav').play();
});

///////////////////////////////////////////////////
// Modal window

// open modal
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// close modal

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
// instead
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////////////////
// Scroll Sections
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching Strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');

    // Guard Clause
    if (id === '#') return;
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// create element
// const message = document.createElement('div');
// message.classList.add('cookie-message');
///////////////////////////////////////////////////
//scroll
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = e.target.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// Event Delegation
//1. add event listener to common parent element
//2. determine what element originated the event

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   e.preventDefault();

//   // Matching Strategy
//   if (e.target.classList.contains('nav__link')) {
//     const id = e.target.getAttribute('href');

//     // Guard Clause
//     if (id === '#') return;
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   }
// });

// DOM Traversing

// Going Downward: Child
// console.log(h1.querySelector('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// Going Upward: Parent
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going Sideways: Sibling
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// just for fun and  practice
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.25)';
// });
///////////////////////////////////////////////////
// create content

// message.textContent = `we use cookies for improved functionality and analytics. <button class='btn btn--close-cookie`
// message.innerHTML = `we use cookies for improved functionality and analytics. <button class='btn btn--close-cookie'>Got it!</button>`;
// header.append(message);
// header.prepend(message);
// header.before(message);
// header.after(message);
// header.insertAdjacentElement('beforeend', message);
// delete element
// document.querySelector('.btn--close-cookie').addEventListener('click', () => {
// message.remove();
// });

// styles (inline style)
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';
// message.style.height =
// Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
// document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes

// const logo = document.querySelector('.nav__logo');
// console.log(logo.src);
// console.log(logo.alt);

// // non-standard
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
// console.log(logo.setAttribute('company', 'mine'));
// console.log(logo.getAttribute('src'));

// // data-attribute
// console.log(logo.dataset.versionNumber);

// classes
// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains();

///////////////////////////////////////////////////

// scroll

// btnScrollTo.addEventListener('click', function (e) {
//   const s1coords = section1.getBoundingClientRect();
//   const xcoords = document
//     .querySelector('.operations__tab--1')
//     .getBoundingClientRect();
//   console.log(xcoords);
//   console.log('scroll x/y', window.pageXOffset, window.pageYOffset);
//   window.scrollTo({
//     left: xcoords.left + window.pageXOffset,
//     top: xcoords.top + window.pageYOffset,
//     behavior: 'smooth',
//   });
// scrollTo(xcoords.left + window.pageXOffset, xcoords.top + window.pageYOffset);
// console.log(s1coords);
// console.log(e.target.getBoundingClientRect());
// console.log('current scroll (x,y)', window.pageXOffset, window.pageYOffset);
// console.log(
//   'height/width view port',
//   document.documentElement.clientHeight,
//   document.documentElement.clientWidth
// );
// window.scrollTo(
//   s1coords.left + window.pageXOffset,
//   s1coords.top + window.pageYOffset
// );
// s1coords relevant to view port not the very top of the document
// console.log('left top', s1coords.left, s1coords.top);
// });

///////////////////////////////////////////////////
// EventListener (Example)

// const randomInd = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInd(0, 255)},${randomInd(0, 255)},${randomInd(0, 255)})`;

// document.querySelector('.nav').addEventListener('click', function (e) {
//   console.log('nav');
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   console.log('nav');
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   e.preventDefault();
//   console.log('nav');
//   this.style.backgroundColor = randomColor();
// });
