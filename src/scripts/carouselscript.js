    const container = document.getElementById('carousel-container');
    let scrollPosition = 0;
    const scrollSpeed = 0.47; // lower is slower

    function scrollCarousel() {
        if(!container) return; // Ensure container exists
      scrollPosition += scrollSpeed;
      if(scrollPosition >= container.scrollWidth / 2) {
        scrollPosition = 0;
      }
      container.scrollLeft = scrollPosition;
      requestAnimationFrame(scrollCarousel);
    }

    // Start scrolling once the page loads
    window.onload = () => {
      scrollCarousel();
    };