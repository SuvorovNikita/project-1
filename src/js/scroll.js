let mybutton = document.getElementById('scroll-top');

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'flex';
  } else {
    mybutton.style.display = 'none';
  }
}
