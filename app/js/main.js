document.addEventListener("DOMContentLoaded", function(event) {

    const body = document.querySelector('body');
    const burger = document.querySelector('.burger');
    
    burger.addEventListener('click', (e) => {
        e.preventDefault();
        body.classList.toggle('menu-active');
    
    });

    $('.slider').slick({
        dots:true,
        adeptiveHeight:true,
        appendDots:$('.slider-dots'),
        appendArrows:$('.slider-dots'),
    });
});

