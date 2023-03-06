const ope = document.getElementById('ope');
const slide = document.querySelector('.slide');
const clo = document.getElementById('clo');

ope.addEventListener('click', function(){
    slide.style.width = '300px';
    clo.style.display = 'block';
});
clo.addEventListener('click', function(){
    slide.style.width = '0', display = 'none';
});