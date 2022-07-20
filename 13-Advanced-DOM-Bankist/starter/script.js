'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

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
const header = document.querySelector('.header');
// create element
const message = document.createElement('div');
message.classList.add('cookie-message');
// create content
// message.textContent = `we use cookies for improved funcunality and analytics. <button class='btn btn--close-cookie`
message.innerHTML = `we use cookies for improved funcunality and analytics. <button class='btn btn--close-cookie'>Got it!</button>`;
// header.append(message);
// header.prepend(message);
// header.before(message);
// header.after(message);
header.insertAdjacentElement('beforeend', message);
// delete element
document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove();
});

// styles (inline style)
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');
