// import _ from 'lodash';

// console.log(_.concat([10, 15, 20], [40, 21]));

$(document).ready(function () {
  $('.c-header__burger').click(function (event) {
    $('.c-header__burger,.c-header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
