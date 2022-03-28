// Adding active class to nav-link :
$(".nav-link").hover(
  function () {
    $(this).addClass("active");
  },
  function () {
    $(this).removeClass("active");
  }
);
// Dropdown show
  $(".li.nav-item.dropdown").hover(function () {
    var dropdownMenu = $(this).children(".dropdown-menu");
    if (dropdownMenu.is(":visible")) {
      dropdownMenu.parent().toggleClass("open");
    }
  });
// Slick slider
  $(".slick-slider").slick({
    autoplay: true,
    autoplaySpeed: 500,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
