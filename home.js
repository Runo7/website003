  // JavaScript für den Slider
  const slider = document.querySelector('.slider');
  const images = slider.querySelectorAll('img');
  let currentIndex = 0;

  function showImage(index) {
    images.forEach((image, i) => {
      if (i === index) {
        image.classList.add('active');
      } else {
        image.classList.remove('active');
      }
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  setInterval(nextImage, 5000); // Wechsel alle 3 Sekunden

  // Erstes Bild anzeigen
  showImage(currentIndex);