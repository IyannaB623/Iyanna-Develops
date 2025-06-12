function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += "responsive";
    } else {
      x.className = "topnav";
    }
  }

const options = {method: 'GET', headers: {accept: 'application/json'}};

let votd = document.getElementById('votd')
let ref = document.getElementById('reference')

fetch('https://beta.ourmanna.com/api/v1/get?format=json&order=daily', options)
  .then(data => data.json())
  .then(data => {
  console.log(data.verse.details);
  votd.innerText = data.verse.details.text;
  ref.innerText = data.verse.details.reference
}) 
  .catch(err => console.error(err));

document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextBtn = document.querySelector('.carousel-btn.right');
  const prevBtn = document.querySelector('.carousel-btn.left');

  let currentSlide = 0;

  function updateSlide() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
  }

  nextBtn.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
      updateSlide();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateSlide();
    }
  });

  window.addEventListener('resize', updateSlide);

  // Initial position
  updateSlide();
});
