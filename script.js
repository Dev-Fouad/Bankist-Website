'use strict';

// Selecting Element
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let btnCloseModal = document.querySelector('.btn--close-modal');
let btnsOpenModal = document.querySelectorAll('.btn--show-modal');
let btnScrollto = document.querySelector('.btn--scroll-to');
let section1 = document.querySelector('#section--1')



// Modal window
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => {
  btn.addEventListener('click', openModal);
})

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// Screen 