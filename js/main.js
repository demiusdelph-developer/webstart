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
      closeBtn = $('.modal__close');

  modalBtn.on('click', function() {
    modal.toggleClass('modal--visible');
  });
  modal.on('click', function(e) {
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
});

