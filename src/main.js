document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.Browser-container');
    const body = document.querySelector('body');
  
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        header.classList.add('shrink');
      } else {
        header.classList.remove('shrink');
      }
    });

    // Reset scroll position to top on page load
    body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
