const up = document.querySelector('.up')

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    up.style.display = "block"
  } else {
    up.style.display = "none"
  }
  
  up.addEventListener('click', () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})