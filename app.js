const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

window.onscroll = function() {scrollShrinkFunction()};

function scrollShrinkFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementByClassName("navbar").style.padding = "30px 10px";
        document.getElementById("navbar__logo").style.fontSize = "25px";
      } else {
        document.getElementByClassName("navbar").style.padding = "80px 10px";
        document.getElementById("navbar__logo").style.fontSize = "35px";
      }
    }
