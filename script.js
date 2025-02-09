$(".arrowup").on("click", function () {
  $("html, body").animate(
    {
      scrollTop: $("#home").offset().top,
    },
    "smooth",
    function () {
      $(".arrowup").hide();
    }
  );
});
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 100) {
    $(".arrowup").show();
  } else {
    $(".arrowup").hide();
  }
});

$(document).ready(function () {
  $(".hamburger").click(function () {
    $("#navbar").toggle(500);
  });
});
