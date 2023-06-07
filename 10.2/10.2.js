const btn = document.querySelector('button');

btn.addEventListener('click', () => {
   internalScreenSize();
   clientScreenSize();
});

function internalScreenSize() {
   let widthInner = window.innerWidth;
   let heightInner = window.innerHeight;

   alert(`Размер экрана с учётом полосы прокрутки: ширина - ${widthInner} px, высота -  ${heightInner} px`);
};

function clientScreenSize() {
   let widthClient = document.documentElement.clientWidth;
   let heightClient = document.documentElement.clientHeight;

   alert(`Размер экрана без учёта полосы прокрутки: ширина - ${widthClient} px, высота -  ${heightClient} px`);
};