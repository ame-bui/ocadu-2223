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

  $("#start-button").click(function() {
    $("#the-book").show(); 
    $('.container').animate({
        scrollTop: $("#the-book").offset().top},
        'slow');
  });
});



const sectionOne = document.querySelector('.section1');
// const sections = document.querySelectorAll('')

const options = {
  root: null, // it is the view port;
  threshold: 1,
  rootMargin: "-150px"
};
const observer = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    console.log(entry);
  })
}, options);

observer.observe(sectionOne);







// https://css-tricks.com/an-explanation-of-how-the-intersection-observer-watches/

