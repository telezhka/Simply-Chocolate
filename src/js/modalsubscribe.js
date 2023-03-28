var overlay = document.querySelector('#overlay-modal');
var modal = document.querySelector('#modal-subscribe');

$('.js-open-modal').click(function (event) {
  var modalName = $(this).attr('data-modal');

  var modal = $('.js-modal[data-modal="' + modalName + '"]');
  modal.addClass('is-shown');
  overlay.classList.add('active');
});
$('.js-modal-close').click(function () {
  $(this).parent('.js-modal').removeClass('is-shown');

  overlay.classList.remove('active');
  modal.classList.remove('is-shown');
});
