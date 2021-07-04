$("a.blue-button").click(function() {
    $('html,body').animate({
        scrollTop: $("#portfolio").offset().top},
        'slow');
});

$("a.home").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

$("a.about").click(function() {
    $('html,body').animate({
        scrollTop: $("#about").offset().top},
        'slow');
});

$("a.portfolio").click(function() {
    $('html,body').animate({
        scrollTop: $("#portfolio").offset().top},
        'slow');
});

$("a.contact").click(function() {
    $('html,body').animate({
        scrollTop: $("#contact").offset().top},
        'slow');
});

$("a.services").click(function() {
    $('html,body').animate({
        scrollTop: $("#services").offset().top},
        'slow');
});

$("div.bottom").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

$("a.copyright-line").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

$("span span").click(function() {
    $('html,body').animate({
        scrollTop: $("#contact").offset().top},
        'slow');
});
