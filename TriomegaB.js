const toTop = document.querySelector('.to-top');

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

const bg = document.querySelector('.top');
bg.style.backgroundImage = "url('D:\media\fran.jpg)";

document.getElementById("myDiv").style.backgroundImage = "url('D:\IMG-20230305-WA0060.jpg')";