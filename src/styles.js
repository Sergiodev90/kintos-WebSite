document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.Browser-container');
  const body = document.querySelector('body');

  function updateHeaderClass() {
    if (window.scrollY > 50) {
      header.classList.add('shrink');
    } else {
      header.classList.remove('shrink');
    }
  }

  window.addEventListener('scroll', function () {
    requestAnimationFrame(updateHeaderClass);
  });

  // Reset scroll position to top on page load
  body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});