const navElement = document.querySelector('nav')
const navBarLinks = document.querySelectorAll('a')



window.addEventListener('scroll', ()=>{
  const scrollPosition = window.scrollY;
  navElement.style.top = scrollPosition + 'px'

  navBarLinks.forEach((link,i) =>{
    const sectionElement =document.getElementById(`section${i}`)
    console.log(i)
    
    if(scrollPosition >= sectionElement.offsetTop && scrollPosition <  sectionElement.offsetTop + sectionElement.offsetHeight){
      link.classList.add('active')
    }
    else{
      link.classList.remove('active')
    }
})
  
})