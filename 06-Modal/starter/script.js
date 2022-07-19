'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnOpenModal.length; i++)
  //Open Modal Event
  btnOpenModal[i].addEventListener('click', openModal);
// Close modal Event
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
// Escape BTN Event
document.addEventListener('keydown', esc);

//open modal
function openModal() {
  console.log('btn CLICKED');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
//Close modal
function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
function esc(e) {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
}
