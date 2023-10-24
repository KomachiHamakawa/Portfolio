
$(function () {

  $(".openbtn").click(function () {
    $(this).toggleClass("active");
    $(".sp").slideToggle(300);
  });

  $(window).on("load resize", function () {
    if ($(window).width() > 768) {
      $(".sp").hide();
    } else {
      $(".openbtn").removeClass("active");
    }
  })
  
});