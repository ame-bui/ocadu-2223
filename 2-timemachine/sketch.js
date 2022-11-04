
$(function(){
  var $myDiv = $('#book-container');
  var $navDiv = $('.index-box');
  $myDiv.hide();
  console.log($myDiv.attr("id"));

  $('.close').on('click', function() {
    $myDiv.show('slow');
    $navDiv.hide('slow');
  });
});

$("button").click(function() {
  $('.container').animate({
      scrollTop: $("#the-book").offset().top},
      'slow');
});

