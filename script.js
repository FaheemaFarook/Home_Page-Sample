//Initialize the carousel
$(function() {
  
  $('.carousel').carousel({
    interval: 5000
  });
  
});

//Make the caption responsive to window width
$(document).ready(function() {
    $('.carousel .carousel-caption').css('zoom', $('.carousel').width()/1250);
  });

  $(window).resize(function() {
    $('.carousel .carousel-caption').css('zoom', $('.carousel').width()/1250);
  });