const count = document.querySelectorAll('.annotate');
const sections = document.querySelectorAll('.highlight');
var height = $(window).height();
var sp = document.getElementById('#space-left');

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

  $('#marker-button').click(function(){
    $('.myCanvas').toggle();
  })
  // console.log(pwidth);
  let px = 100 + Math.random()* 400 ;
  console.log(px);

});



if(!!window.IntersectionObserver){
  let n = 0 // Number of annotations
  
  // const sectionOne = document.querySelector('.section1');
  console.log(sections);
  
  console.log(count);
  
  const options = {
    root: document.querySelector('.container'), // it is the view port;
    threshold: 0.8,
    rootMargin: " -100px 0px -400px 0px"
  };
  
  const appearOnScroll = new IntersectionObserver
    (function(entries,appearOnScroll)
    {
      entries.forEach(entry => {
        const item = entry.target;

        if(entry.isIntersecting){
          for (let box of count){
            if(item.id){
              if (box.matches('#'+ item.id)){
                // box.style.opacity = "1";
                box.classList.add('fade-out');
                box.classList.add('appear');
           

              } else {
              }
            } 
            
          }

          // .classList.add('appear');
          console.log(item.id);
          entry.target.classList.add('underline');
          // entry.target.classList.add('invoke');
          console.log(entry.target.className);
          // appearOnScroll.unobserve(entry.target);


        } 
        
        else {
          for (const box of count){
              box.classList.remove('appear');
            }
          

          // item.classList.remove('invoke');
          // item.classList.remove('underline');

          // for (const box of count){
          //   if (box.matches("#"+item.id)){
          //     box.classList.add('appear');
          //     console.log(box);
          //   }
          // }
          console.log(item.className + " IS OUT");

          return;
        }
      });
  
    },
  options);
  
  sections.forEach(item => {
    appearOnScroll.observe(item);
  })
}



// Work log:
// Check https://www.smashingmagazine.com/2018/01/deferring-lazy-loading-intersection-observer-api/
// Add individual id for each pair of invoke - annotate 
// Add all the highlight and annotation
// 








// https://css-tricks.com/an-explanation-of-how-the-intersection-observer-watches/

