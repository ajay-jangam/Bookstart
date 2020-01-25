// slick-slider-1

$(document).ready(function(){
    $('.single-item').slick({
        slidesToShow: 1,
        infinite: true,
        speed: 1000,
        dots: true,
        nextArrow: ('.next'),
        prevArrow: ('.prev'),
    });
  });

// slick-slider-1


// slick-slider-2

$(document).ready(function(){
  $('.single-item-1').slick({
      slidesToShow: 1,
      infinite: true,
      speed: 1000,
      dots: false,
      nextArrow: ('.event-next'),
      prevArrow: ('.event-prev'),
  });
});

// slick-slider-2


// srcoll to top

//Get the button:

$(document).ready(function(){

  $(window).scroll(function(){
    if($(this).scrollTop() > 40){
      $('#topBtn').fadeIn();
    } else{
      $('#topBtn').fadeOut();
    }
  });

  $("#topBtn").click(function(){
    $('html ,body').animate({scrollTop : 0},1500);
  });
});

// scroll to top

