let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');

let carousel = document.querySelector('.carousel');
let slideList = document.querySelector('.carousel .list');
let thumbList = document.querySelector('.carousel .thumbnail');
let timeBar = document.querySelector('.carousel .time');

let thumbs = thumbList.querySelectorAll('.item');
thumbList.appendChild(thumbs[0]);

nextBtn.onclick = function () 
{
    changeSlide('next');
}

prevBtn.onclick = function () 
{
    changeSlide('prev');
}

let resetTimeout;
let autoSlide = setTimeout(() => 
{
    nextBtn.click();
}, 7000);

function changeSlide(direction) 
{
    let slides = slideList.querySelectorAll('.item');
    let thumbs = thumbList.querySelectorAll('.item');

    if (direction === 'next') 
    {
        slideList.appendChild(slides[0]);
        thumbList.appendChild(thumbs[0]);
        carousel.classList.add('next');
    } else 
    {
        slideList.prepend(slides[slides.length - 1]);
        thumbList.prepend(thumbs[thumbs.length - 1]);
        carousel.classList.add('prev');
    }

    clearTimeout(resetTimeout);
    resetTimeout = setTimeout(() => 
    {
        carousel.classList.remove('next');
        carousel.classList.remove('prev');
    }, 3000);

    clearTimeout(autoSlide);
    autoSlide = setTimeout(() => 
    {
        nextBtn.click();
    }, 7000);
}
