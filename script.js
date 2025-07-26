let slideIndex = 0;
const images = document.querySelectorAll(".img-container img");
const dotContainer = document.getElementById("dotContainer");

function showSlide(index) 
{
  images.forEach((img, i) => 
    {
    img.classList.remove("active");
    if (i === index) img.classList.add("active");
  });

  const dots = document.querySelectorAll(".dot");
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");

  slideIndex = index;
}

function changeSlide(n) 
{
  slideIndex =  slideIndex + n;
  if (slideIndex >= images.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = images.length - 1;
  showSlide(slideIndex);
}

function startAutoSlide() {
  interval = setInterval(() => changeSlide(1), 3000);
}

function stopAutoSlide() {
  clearInterval(interval);
}

function createDots() {
  for (let i = 0; i < images.length; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => showSlide(i));
    dotContainer.appendChild(dot);
  }
}

// Like & Share icon toggle
document.getElementById("likeIcon").addEventListener("click", function () {
  this.classList.toggle("liked");
});

document.getElementById("shareIcon").addEventListener("click", function () {
  this.classList.toggle("shared");
});

// Initialize
createDots();
showSlide(slideIndex);
startAutoSlide();

// Pause on hover
const sliderBox = document.getElementById("sliderBox");
sliderBox.addEventListener("mouseover", stopAutoSlide);
sliderBox.addEventListener("mouseout", startAutoSlide);
