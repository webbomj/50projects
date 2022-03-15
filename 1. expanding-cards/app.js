const blocks = document.querySelectorAll('.block');

blocks.forEach(block => {
  block.addEventListener('click', () => {
    removeActiveClass();
    block.classList.add('active')
  })
})


function removeActiveClass() {
  blocks.forEach(block => {
    block.classList.remove('active')
  })
}