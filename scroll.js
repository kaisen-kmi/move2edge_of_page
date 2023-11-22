window.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 'ArrowLeft') {
    window.scrollTo(0, window.scrollY);
  }
  if (event.ctrlKey && event.key === 'ArrowRight') {
    window.scrollTo(document.body.scrollWidth - window.innerWidth, window.scrollY);
  }
});
