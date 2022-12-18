const hamburger = document.querySelector('.haburger-btr');
const list = document.querySelector('.list');
const ul = document.querySelectorAll('.list-item');

hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('opened');
      hamburger.setAttribute('aria-expanded', hamburger.classList.contains('opened'))
      list.classList.toggle('active');
})

ul.forEach((item) => {
      item.addEventListener('click', () => {
            hamburger.classList.toggle('opened');
            list.classList.toggle('active');
      })
})


