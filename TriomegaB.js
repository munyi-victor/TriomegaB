const ope = document.getElementById('ope');
const slide = document.querySelector('.slide');
const clo = document.getElementById('clo');
const toTop = document.querySelector('.to-top');


ope.addEventListener('click', function(){
    slide.style.width = '300px';
    clo.style.display = 'block';
});
clo.addEventListener('click', function(){
    slide.style.width = '0', display = 'none';
});

window.addEventListener('scroll', () =>{
    if(window.pageYOffset > 100){
        toTop.classList.add('active');
    }
    else{
        toTop.classList.remove('active');
    }
});

