// 'use strict';

// // Selecting Element
// let modal = document.querySelector('.modal');
// let overlay = document.querySelector('.overlay');
// let btnCloseModal = document.querySelector('.btn--close-modal');
// let btnsOpenModal = document.querySelectorAll('.btn--show-modal');
// let btnScrollto = document.querySelector('.btn--scroll-to');
// let section1 = document.querySelector('#section--1')
// let tabs = document.querySelectorAll('.operations__tab');
// let tabsContainer = document.querySelector('.operations__tab-container');
// let tabsContent = document.querySelectorAll('.operations__content')
// let  nav = document.querySelector('.nav');


// // Modal window
// const openModal = function () {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// btnsOpenModal.forEach((btn) => {
//   btn.addEventListener('click', openModal);
// })

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });


// // Button scrolling
// btnScrollto.addEventListener('click' , function(){
//   section1.scrollIntoView({ behavior: 'smooth' })
// })

// document.querySelector('.nav__links').addEventListener('click' , function(e){
//   e.preventDefault()

//   // Matching strategy
//   if (e.target.classList.contains('nav__link')) {
//     let id = e.target.getAttribute('href');
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'})
//   }
// })


// // Tabbbed component
// tabsContainer.addEventListener('click', function (e) {
//   const clicked = e.target.closest('.operations__tab');

//   // Guard clause
//   if (!clicked) return;

//   // Remove active classes
//   tabs.forEach(t => t.classList.remove('operations__tab--active'));
//   tabsContent.forEach(c => c.classList.remove('operations__content--active'));

//   // Activate tab
//   clicked.classList.add('operations__tab--active');

//   // Activate content area
//   document
//     .querySelector(`.operations__content--${clicked.dataset.tab}`)
//     .classList.add('operations__content--active');
// });


// // Menu fade animation
// const handleHover = function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');

//     siblings.forEach(el => {
//       if (el !== link) el.style.opacity = this;
//     });
//     logo.style.opacity = this;
//   }
// };

// // Passing "argument" into handler
// nav.addEventListener('mouseover', handleHover.bind(0.5));
// nav.addEventListener('mouseout', handleHover.bind(1));



// // Implementing the sticky Navigation
// let header = document.querySelector('.header')
// let navHeight = nav.getBoundingClientRect().height;

// let stickyNav = function (entries) {
//   const [entry] = entries

//   if (!entry.isIntersecting) nav.classList.add('sticky')
//   else nav.classList.remove('sticky')
// }

// let headerObserver = new IntersectionObserver (stickyNav , {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${navHeight}px`,
// });
 
// headerObserver.observe(header);


// // Revealing the sections
// let Allsections = document.querySelectorAll('.section')
// console.log(Allsections);

// let revealSection = function (entries, observer) {
//   let [entry] = entries
//   console.log(entry);

//   if (!entry.isIntersecting) return;

//   entry.target.classList.remove('section--hidden')
//   observer.unobserve(entry.target)
// }

// let sectionObserver = new IntersectionObserver (revealSection , {
//   root: null,
//   threshold: 0.15,
// });

// Allsections.forEach(function (section){
//   sectionObserver.observe(section)
//   section.classList.add('section--hidden')
// }) 

// // Lazy loading images
// const imgTargets = document.querySelectorAll('img[data-src]');

// const loadImg = function (entries, observer) {
//   const [entry] = entries;

//   if (!entry.isIntersecting) return;

//   // Replace src with data-src
//   entry.target.src = entry.target.dataset.src;

//   entry.target.addEventListener('load', function () {
//     entry.target.classList.remove('lazy-img');
//   });

//   observer.unobserve(entry.target);
// };


// const imgObserver = new IntersectionObserver(loadImg, {
//   root: null,
//   threshold: 0,
//   rootMargin: '200px',
// });
// imgTargets.forEach(img => imgObserver.observe(img));


// Slider
let slides = document.querySelectorAll('.slide') 
let slider = document.querySelector('.slider')
let btnLeft = document.querySelector('.slider__btn--left')
let btnRight = document.querySelector('.slider__btn--right')
let curSlide = 0;
const maxSlide = slides.length;

for ( [bayo , i] of slides.entries())
console.log(bayo , i);

slider.style.transform = 'scale(0.2) translateX(-800px)'
slider.style.overflow = 'visible'

console.log(slides);
let goToSlide = function(slide) {
  slides.forEach((s,i) => {
    console.log(slide);
    s.style.transform = `translateX(${100 * (i - slide)}%)`
    // 0% , 100%, 200%, 300%
  }) 
}
goToSlide(0)

// Next slide
let nextslide = function(){
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++
  } 
  console.log(curSlide);
  goToSlide(curSlide);
  // -100%, 0%, 100%, 200%
}
btnRight.addEventListener('click' , nextslide)
