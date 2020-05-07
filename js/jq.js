let divWidth = $("#style-switcher").outerWidth();
$("#style-switcher").css("left", "-" + divWidth);

$(".fa-cog").click(function() {
  if ($("#style-switcher").css("left") == "0px") {
    $("#style-switcher").animate({ left: "-" + divWidth }, 700);
  } else {
    $("#style-switcher").animate({ left: "0px" }, 700);
  }
});

let profileOf = $(".how-work").offset().top;

$(window).scroll(function() {
  let wsCr = $(window).scrollTop();
  if (wsCr > 1200) {
    $("#back-to-top").fadeIn(400);
  } else {
    $("#back-to-top").fadeOut(400);
  }
});

$("#back-to-top").click(function() {
  $("body,html").animate({ scrollTop: "0" }, 1000);
});

let lis = $(".pattern li");

for (let i = 0; i < lis.length; i++) {
  let x = Math.round(Math.random() * 254);
  let y = Math.round(Math.random() * 254);
  let z = Math.round(Math.random() * 254);

  lis.eq(i).css("backgroundColor", "rgba(" + x + "," + y + "," + z + ")");
}

lis.click(function() {
  let color = $(this).css("backgroundColor");
  $("h1 ,h2 ,h3 ,h4 ,h5 h6,a, p").css("color", color);
});
$(".dark-version").click(function() {
  $("body").css("backgroundColor", "black");
  $("header .navbar")
    .removeClass("bg-light")
    .addClass("bg-dark");
  $(".navbar-light .navbar-nav .nav-link").css("color", "#fff");
  $(".section")
    .removeClass("bg-light")
    .addClass("bg-dark");
  $(".mobile-section").addClass("bg-dark");
  $("body").css("color", "white");
});
$(".light-version").click(function() {
  $("body").css("backgroundColor", "white");
  $("header .navbar")
    .removeClass("bg-dark")
    .addClass("bg-light");
  $(".navbar-light .navbar-nav .nav-link").css("color", "#333");
  $(".section")
    .removeClass("bg-dark")
    .addClass("bg-light");
  $(".mobile-section").removeClass("bg-dark");
  $("body").css("color", "white");
});

$(document).ready(function() {
  $("#spinner").fadeOut(2000, function() {
    $("body").css("overflow", "auto");
  });
});
