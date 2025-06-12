document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carouselTrack');
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
  updateSlide();
});
