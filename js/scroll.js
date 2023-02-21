const scrollUpButton = document.querySelector("#scrollUp");
scrollUpButton.style.display = "none";
let scrollCounter = 0;
window.addEventListener("scroll", function() {
  scrollCounter++;
  if (scrollCounter > 2) {
    scrollUpButton.style.display = "block";
  }
  if (window.pageYOffset === 0) {
    scrollUpButton.style.display = "none";
  }
});
scrollUpButton.addEventListener("click", function() {
  const duration = 500;
  const distanceToTop = window.pageYOffset;
  const startTime = performance.now();
  function animateScroll(currentTime) {
    const elapsedTime = currentTime - startTime;
    const percentageComplete = elapsedTime / duration;
    const distanceToScroll = distanceToTop * percentageComplete;
    window.scrollTo(0, distanceToTop - distanceToScroll);
    if (window.pageYOffset > 0) {
      requestAnimationFrame(animateScroll);
    }
  }
  requestAnimationFrame(animateScroll);
});
