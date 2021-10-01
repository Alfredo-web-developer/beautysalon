// DOM Document Object Element

// TOGGLE
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
};

/* close menu and redirect */
const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
  link.addEventListener('click', function() {
    nav.classList.remove('show')
  })
};

/* mudar o header da pagina quando dar scroll */
const header = document.querySelector('#header')
const navheight = header.offsetHeight

window.addEventListener('scroll', function() {
  if(window.scrollY >= navheight){
    // maior que a altura do header
    header.classList.add('scroll')
  } else {
    //menor que a altura do header
    header.classList.remove('scroll')
  }
});

// Testimonials slider swiper
const swiper = new Swiper('.swiper', {
  sliderPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewhee: true,
  keyboard: true,
});

//ScrollReveal
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)