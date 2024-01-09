const navElement = document.querySelector('nav')
const navBarLinks = document.querySelectorAll('a')

const navPosition = navElement.getBoundingClientRect().top

window.addEventListener('scroll', ()=>{
  const scrollPosition = window.scrollY;
  navElement.style.top = scrollPosition + 'px'

  

  
})