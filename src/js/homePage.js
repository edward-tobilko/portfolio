// Home page
$(window).scroll(function () {
  let headerHeight = $("header").height();
  let yPosition = $(document).scrollTop();

  if (yPosition <= headerHeight) {
    let effectFactor = yPosition / headerHeight;
    let rotation =
      effectFactor *
      (Math.PI / 2 - Math.asin((headerHeight - yPosition) / headerHeight));

    $(".header__wrapper")
      .css({
        transform: "rotateX(" + rotation + "rad)",
      })
      .find(".overlay")
      .css("opacity", effectFactor);
  }

  if (yPosition <= headerHeight) {
    $(".header__nav").removeClass("fixed");
  } else {
    $(".header__nav").addClass("fixed");
  }
});
