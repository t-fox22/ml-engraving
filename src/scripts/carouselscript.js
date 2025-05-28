const carousel = document.getElementById('carousel');

let scrollAmount = 0;

function autoScroll() {
  scrollAmount += 0.3; // adjust speed here (lower is slower)
  
  if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
    scrollAmount = 0; // reset scroll to start
  }
  
  carousel.style.transform = `translateX(${-scrollAmount}px)`;
  
  requestAnimationFrame(autoScroll);
}

autoScroll();