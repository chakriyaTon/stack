$(document).ready(function () {
  // Main carousel (work showcase)
  $(".owl-carousel:not(.testimonial-carousel)").owlCarousel({
    loop: true,
    margin: 8,
    nav: true,
    dots: true,
    items: 1,
    center: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  });
  // Testimonial carousel (show only 1 at a time)
  $(".testimonial-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 },
    },
  });
});
//navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("mainNav");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

