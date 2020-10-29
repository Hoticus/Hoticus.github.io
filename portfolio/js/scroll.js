$(document).ready(function(){
  $("#about-me").css({'opacity' : '0'});
  $("#trust").css({'opacity' : '0'});
  $("#why-me").css({'opacity' : '0'});
});
$(window).on("scroll", function() {
  $("header").toggleClass("header_scrolled", $(this).scrollTop() >= 1);
  $("#preview__button").toggleClass("preview__button_scrolled", $(this).scrollTop() >= 1);
  if ( $(this).scrollTop() > 200 ) $("#about-me").animate({'opacity':'1'},500);
  if ( $(this).scrollTop() > 500 ) $("#trust").animate({'opacity':'1'},500);
  if ( $(this).scrollTop() > 800 ) $("#why-me").animate({'opacity':'1'},500);
});
