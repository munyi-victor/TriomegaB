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

const pop = document.querySelector('.pop-up');
const pop_close = document.querySelector('#pop-up-close');
const donName = document.getElementById('nam');
const donAmt = document.getElementById('amt');

window.addEventListener('load', function(){
    pop.style.display = "block";
});

pop_close.addEventListener('click', function(){
    pop.style.display = "none";
});

if(donAmt <= 0){
    document.getElementById('msg2').innerHTML = "Your donation amount cannot be less than or equal to zero!";
}