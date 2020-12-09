// Implementation of animation
const animateName = document.querySelector('.my--name');
const strText = animateName.textContent.split('');
const nav = document.querySelector('.nav');

animateName.textContent = '';

// add span tag to each letter
for (let i = 0; i < strText.length; i++) {
  animateName.innerHTML += '<span>' + strText[i] + '</span>';
}

let char = 0;
let timer = setInterval(onTick, 50);
// Functions to animate name
function onTick() {
  const span = animateName.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++;
  if (char === strText.length) {
    complete();
    return;
  }
}
function complete() {
  clearInterval(timer);
  timer = null;
}

// smooth scrolling -->navbar

nav.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  }
});
