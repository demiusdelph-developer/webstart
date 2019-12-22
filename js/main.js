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

new WOW().init();

var wow = new WOW(
  {
    boxClass: 'map',
    animateClass: 'animated',
    offset: 5000,
    mobile: true,
    live: true, 
    callback: function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, 
    resetAnimation: true,
  }
);
wow.init();

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
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


// Дождёмся загрузки API и готовности DOM.
ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [47.244729, 39.722810],
          zoom: 18
      }, {
          searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemarkWithContent = new ymaps.Placemark([47.244604, 39.723175], {
          hintContent: 'Собственный значок метки с контентом',
          balloonContent: 'А эта — новогодняя',
          iconContent: 'ТЦ "Декорум"'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: '../img/mapIcon.png',
          // Размеры метки.
          iconImageSize: [30, 36],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -58],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [35, 5],
          iconCaptionMaxWidth: [300],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout
      });
      myMap.behaviors.disable('scrollZoom');

  myMap.geoObjects
      //.add(myPlacemark)
      .add(myPlacemarkWithContent);
});
  
});