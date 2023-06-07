const btn = document.querySelector('.btn');
const btnSvg = document.querySelector('.btn__svg');
const svg = document.querySelector('.bi');

btn.addEventListener('click', () => {
   btnSvg.classList.toggle('btn__none');
});

