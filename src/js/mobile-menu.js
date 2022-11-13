import $ from 'jquery';

$(document).ready(function () {
  $('.c-header__burger').click(function () {
    $('.c-header__burger,.c-header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
