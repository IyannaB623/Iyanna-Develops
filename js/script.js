document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextBtn = document.querySelector('.carousel-btn.right');
  const prevBtn = document.querySelector('.carousel-btn.left');

  let currentSlide = 0;

  function updateSlide() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${slideWidth * currentSlide}px)`;

    // Hide left arrow on first slide
    if (currentSlide === 0) {
      prevBtn.style.display = 'none';
    } else {
      prevBtn.style.display = 'block';
    }

    // Hide right arrow on last slide
    if (currentSlide === slides.length - 1) {
      nextBtn.style.display = 'none';
    } else {
      nextBtn.style.display = 'block';
    }
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
  updateSlide(); // initial update
});

document.addEventListener('DOMContentLoaded', () => {
  const githubIcon = document.querySelector('.github-icon-static');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        githubIcon.classList.add('animate');
        observer.unobserve(githubIcon); // run only once
      }
    });
  }, {
    threshold: 0.5 // 50% in view
  });

  if (githubIcon) {
    observer.observe(githubIcon);
  }
});
