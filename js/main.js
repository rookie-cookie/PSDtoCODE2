
$(document).ready(function(){

  //for smooth page scroll
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  //burger nav icon
  $('.burger-container').on('click', function() {
    $('#navigation').addClass("open"),
      $('.burger-container').addClass('hide')
  });

  //close btn icon
  $('.close-btn').on('click', function() {
     $('#navigation').removeClass('open'),
     $('.burger-container').removeClass('hide')
  });

  //clicking on link will close the nav
  $('.menulinks').on('click', function() {
   $('#navigation').removeClass('open'),
   $('.burger-container').removeClass('hide')
  });

  //or clicking on content section will also close the nav
  $('#contents').on('click', function() {
    $('#navigation').removeClass('open'),
    $('.burger-container').removeClass('hide')
 });

 //typed
 $(function() {
  $("#typing").typed({
    strings: [" We make websites ", " 24/7 available for hire ", " Web design with difference "],
    typeSpeed: 100,
    loop: true,
    startDelay: 80,
    showCursor: false,
    backSpeed: 150
  });
});


$('.owl-carousel').owlCarousel({
  navigation : true, // Show next and prev buttons

   slideSpeed : 600,
   pagination: true,
   autoPlay: true,
   paginationSpeed : 1,

   items : 1,
   itemsDesktop : false,
   itemsDesktopSmall : false,
   itemsTablet: false,
   itemsMobile : false
})

});
