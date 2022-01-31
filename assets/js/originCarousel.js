$(function () {
  $(".how-to-made-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 2500,
    nav: false,
    dots: false,
  });

  var owl = $(".how-to-made-carousel");
  owl.trigger('refresh.owl.carousel');
});
