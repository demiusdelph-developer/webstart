window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const modal = document.querySelector('.modal'),
        modalBtn = document.querySelectorAll('[data-toggle=modal]'),
        closeBtn = document.querySelector('.modal__close'),
        switchModal = () => {
          modal.classList.toggle('modal--visible')
        }
  modalBtn.forEach(i => {
    i.addEventListener('click', switchModal);
  });
  closeBtn.addEventListener('click', switchModal);
});

