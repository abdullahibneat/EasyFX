function easy_nav_toggle() {
  const navs = document.querySelectorAll('.easy_nav');
  for (var i = navs.length - 1; i >= 0; i--) {
    navs[i].classList.toggle('easy_nav-toggle-show');
  }
  document.getElementById('easy_nav-container').classList.toggle('easy_nav-mobile');
  document.getElementsByClassName('easy_nav-toggle')[0].classList.toggle('easy_nav-toggle-show');
  document.getElementById('easy_logo').classList.toggle('easy_logo-mobile');
}

function navScroll() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById('easy_nav-container').classList.add('easy_nav-scroll');
    document.getElementById('easy_logo').classList.add('easy_logo-scroll');
  } else {
    document.getElementById('easy_nav-container').classList.remove('easy_nav-scroll');
    document.getElementById('easy_logo').classList.remove('easy_logo-scroll');
  }
}

AOS.init({
  duration: 1000,
  once: true,
});

document.querySelector('.easy_nav-toggle').addEventListener('click', easy_nav_toggle);
window.onscroll = function() {navScroll()};