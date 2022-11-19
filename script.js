'use strict';

// Selecting Element
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let btnCloseModal = document.querySelector('.btn--close-modal');
let btnsOpenModal = document.querySelectorAll('.btn--show-modal');
let btnScrollto = document.querySelector('.btn--scroll-to');
let section1 = document.querySelector('#section--1')
let tabs = document.querySelectorAll('.operations__tab');
let tabsContainer = document.querySelector('.operations__tab-container');
let tabsContent = document.querySelectorAll('.operations__content')
let  nav = document.querySelector('.nav');


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


// Button scrolling
btnScrollto.addEventListener('click' , function(){
  section1.scrollIntoView({ behavior: 'smooth' })
})

document.querySelector('.nav__links').addEventListener('click' , function(e){
  e.preventDefault()

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    let id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
  }
})


// Tabbbed component
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});


// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

let header = document.querySelector('.header')
let navHeight = nav.getBoundingClientRect().height;

let stickyNav = function (entries) {
  const [entry] = entries

  if (!entry.isIntersecting) nav.classList.add('sticky')
  else nav.classList.remove('sticky')
}

let headerObserver = new IntersectionObserver (stickyNav , {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
 n
headerObserver.observe(header);