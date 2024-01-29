const slider = document.getElementById('news-wrapper');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let screenWidth = window.innerWidth;
let touchstartX = 0;
let touchendX = 0;

function showSlide(n) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[n].style.display = 'block';
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function handleSwipe(elem){
    if (touchendX < touchstartX) {
        nextSlide();
    }
    
    if (touchendX > touchstartX) {
        prevSlide();
    }
}

function initSlider() {
    if (screenWidth <= 1000) {
        
        slider.addEventListener('touchstart', e => {
            touchstartX = e.changedTouches[0].screenX;
        });

        slider.addEventListener('touchend', e => {
            touchendX = e.changedTouches[0].screenX;
            handleSwipe(slider);
        });
        showSlide(currentSlide);
    }
    else{
        slides.forEach(slide => slide.style.display = "block");
    }
}

window.addEventListener("resize", ()=>{
    initSlider();
});

initSlider();

//

const burgerBtn = document.getElementById('burger-btn');
const navMenu = document.getElementById('nav-Menu');
const mainInfo = document.getElementById('main-info');
const icon = document.getElementById('burger-btn');

burgerBtn.addEventListener('click', ()=>{
    navMenu.classList.toggle('active')
    mainInfo.classList.toggle('hiden')
    icon.classList.toggle('open')
})