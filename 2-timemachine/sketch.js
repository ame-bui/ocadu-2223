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

const count = document.querySelectorAll('.fade-in');
const sections = document.querySelectorAll('.highlight');

if(!!window.IntersectionObserver){
  let n = 0 // Number of annotations
  
  // const sectionOne = document.querySelector('.section1');
  console.log(sections);
  
  console.log(count);
  
  const options = {
    root: document.querySelector('.container'), // it is the view port;
    threshold: 0.9,
    rootMargin: " -150px 0px -450px 0px"
  };
  
  const appearOnScroll = new IntersectionObserver
    (function(entries,appearOnScroll)
    {
      entries.forEach(entry => {
        if(!entry.isIntersecting){
          entry.target.classList.remove('invoke');
          entry.target.classList.remove('underline');
          console.log(entry.target);

          return;
        } else {
          console.log(entry);
          entry.target.classList.add('underline');
          entry.target.classList.add('invoke');
          console.log(entry.target);
          // appearOnScroll.unobserve(entry.target);
        }
      });
  
    },
  options);
  
  sections.forEach(item => {
    appearOnScroll.observe(item);
  })
}

$("#book-page").on('scroll', function(){
  for(i = 0; i< sections.length; i++){

  }

});


// Work log:
// Check https://www.smashingmagazine.com/2018/01/deferring-lazy-loading-intersection-observer-api/
// Add individual id for each pair of invoke - annotate 
// Add all the highlight and annotation
// 








// https://css-tricks.com/an-explanation-of-how-the-intersection-observer-watches/

