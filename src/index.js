let scrolled = false

document.addEventListener("DOMContentLoaded", () => {
  handleNavbar()
})

function handleNavbar(){
  const navbar = document.getElementById('navbar')
  window.onscroll = function(){
    if(window.pageYOffset > 100){
      navbar.classList.remove('top')
      if(!scrolled){
        navbar.style.transform = 'translateY(-70px)'
      }
      setTimeout(function(){
        navbar.style.transform = 'translateY(0)'
        scrolled = true
      }, 200)
    } else {
      navbar.classList.add('top')
      scrolled = false
    }
  }
}