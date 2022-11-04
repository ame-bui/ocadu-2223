
$(function(){
  var $myDiv = $('#book-container');
  var $navDiv = $('.index-box');
  $myDiv.hide();
  console.log($myDiv.attr("id"));

  $('.close').on('click', function() {
    $myDiv.show('slow');
    $navDiv.hide('slow');
  });

  $("#sticky-nav-button").on('click', function (){
    $navDiv.toggle();
  })
});

$("#start-button").click(function() {
  $('.container').animate({
      scrollTop: $("#the-book").offset().top},
      'slow');
});






// https://css-tricks.com/an-explanation-of-how-the-intersection-observer-watches/

