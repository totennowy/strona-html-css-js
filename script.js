/* SLIDER */
$(".slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: true,
    speed: 800,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000,
  });
/* LAZY LOADING*/
function lazyLoad(){
    $('.lazy-img').each(function(){
        if ($(this).offset().top < window.innerHeight + window.pageYOffset + 300) { 
            $(this).attr('src', $(this).data('src'));
            $(this).removeClass('lazy-img');    
        } 
    })
};
var eventTimeout;
   var eventThrottler = function () {
      if ( !eventTimeout ) {
         eventTimeout = setTimeout(function() {
            eventTimeout = null;
            lazyLoad();
      }, 500);
   }
};
$(document).on('scroll', function() {       
    eventThrottler();
});

/* KARUZELA Z LOGAMI */
$(".carousel").slick({
    slidesToShow: 6,
    slidesToScroll: 2,
    dots: false,
    speed: 1200,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
          }
        },
    ]
  });