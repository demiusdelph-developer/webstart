// window.addEventListener('DOMContentLoaded', () => {
//   'use strict';

//   const modal = document.querySelector('.modal'),
//         modalBtn = document.querySelectorAll('[data-toggle=modal]'),
//         closeBtn = document.querySelector('.modal__close'),
//         switchModal = () => {
//           modal.classList.toggle('modal--visible')
//         }
//   modalBtn.forEach(i => {
//     i.addEventListener('click', switchModal);
//   });
//   modal.addEventListener('click', (e) => {
//     if(!(e.target.closest('.modal__dialog'))) switchModal();
//   });
//   closeBtn.addEventListener('click', switchModal);
//   document.addEventListener('keydown', (e) => {
//     if(e.keyCode === 27) switchModal();
//   }); 
// });



$(document).ready(function () {
  var modal = $('.modal'),
      modalDialog = $('.modal__dialog'),
      modalBtn = $('[data-toggle="modal"]'),
      closeBtn = $('.modal__close'),
      srcollBtn = $('.scrollBtn');


  modalBtn.on('click', function(e) {
    e.preventDefault();
    modal.toggleClass('modal--visible');
  });
  modal.on('click', function(e) {
    e.preventDefault();
    if(!modalDialog.is(e.target) && modalDialog.has(e.target).length === 0) {
      modal.toggleClass('modal--visible');
    }
  });
  closeBtn.on('click', function() {
    modal.toggleClass('modal--visible');
  });
  $(document).keydown(function(e) {
    if(e.keyCode == 27) modal.toggleClass('modal--visible');
  });
  $(window).scroll(function() {
    if ($(window).scrollTop() > 350) {
      srcollBtn.addClass('scrollBtn__up');
      console.log('yes')
    } else {
      srcollBtn.removeClass('scrollBtn__up');
    }
  });
  
  srcollBtn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '200');
  });

  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });
  
});