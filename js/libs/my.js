// My jQuery Click fucntion

$(".button1, .nav-button-2").click(function() {
    $('html, body').animate({
        scrollTop: $(".sec2").offset().top
    }, 2000);
});

$(".button2, .nav-button-3").click(function() {
    $('html, body').animate({
        scrollTop: $(".sec3").offset().top
    }, 2000);
});

$(".button3, .nav-button-4").click(function() {
    $('html, body').animate({
        scrollTop: $(".sec4").offset().top
    }, 2000);
});

$(".button4, .nav-button-1").click(function() {
    $('html, body').animate({
        scrollTop: $(".sec1").offset().top
    }, 2000);
});