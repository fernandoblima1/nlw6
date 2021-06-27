const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    1200: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 900,
  reset: true
})

ScrollReveal().reveal(
  `
  #home .image, #home .text, 
  #about .image, about .text,
  #services header, #services .cards #card,
  #testimonials header, #testimonials .swiper-wrapper,
  #contact header, #contact .button, #contact .contatos,
  footer .logo, footer .brand, footer .links
  `,
  { interval: 100 }
)

const backToTop = document.querySelector('.back-to-top')

function colorize() {
  if (window.scrollY >= 4150) {
    backToTop.classList.add('color')
  } else {
    backToTop.classList.remove('color')
  }
}

function backTop() {
  if (window.scrollY >= 600) {
    backToTop.classList.add('show')
  } else {
    backToTop.classList.remove('show')
  }
}

function headerShadow() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

const sections = document.querySelector('main section[id]')

function menu() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

window.addEventListener('scroll', function () {
  headerShadow()
  backTop()
  colorize()
})
