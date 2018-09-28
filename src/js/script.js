// Share Sidebar
function osidenav() {
  document.getElementById("s-sidenav").style.width = "50vw";
}
function csidenav() {
  document.getElementById("s-sidenav").style.width = "0";
}

$( document ).ready(function() {

// BOLLYWOOD YEAROOK SLIDER
$('.jm-slider-by').slick({
  centerMode: true,
  autoplaySpeed: 3000,
  autoplay:true,
  centerPadding: '50px',
  loop:true,
  slidesToShow: 7,
  responsive: [
  {
    breakpoint: 982,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 3
    }
  },
  {
    breakpoint: 480,
    settings: {
      arrows: false,
        // centerMode: true,
        centerPadding: '-5px',
        slidesToShow: 3
      }
    }
    ]
  }); 

// DESIGNER YEARBOOK SLIDER 
$('.jm-slider-dy').slick({
  centerMode: true,
  autoplay:true,
  loop:true,
  arrows:false,
  autoplaySpeed: 3000,
  centerPadding: '70px',
  slidesToShow: 3,
  responsive: [
  {
    breakpoint: 767,
    settings: {
      arrows: false,
      centerPadding: '40px',
      slidesToShow: 3
    }
  },
  {
    breakpoint: 480,
    settings: {
      arrows: false,
        // centerMode: false,
        centerPadding: '-5px',
        slidesToShow: 3
      }
    }
    ]
  });

// QUOTES BOX SLIDER
$('.jm-slider-qb').slick({
  dots: true,
  autoplay:true,
  infinite: true,
  slidesToShow: 1,
  arrows:false
});

// HOROSCOPE SLIDER
$('.jm-slider-hs').slick({
  infinite: true,
  autoplay:true,
  autoplaySpeed: 5000,
  arrows:false,
  dots:true
});

// SLIDER SMALL EXPLORE MORE
$('.slider-sm-expmore').slick({
  infinite: true,
  slidesToShow: 3,
  arrows:false,
  slidesToScroll: 2,
  responsive: [
  {
    breakpoint: 767,
    settings: {
      arrows: false,
      slidesToShow: 4,
         // slidesToScroll: 1,
       }
     },
     {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 3,
        // slidesToScroll: 1
      }
    }
    ]
  });

// Slider related stories 
$('.slider-rs').slick({
    infinite: false,
    slidesToShow: 4,
    autoplay:true,
    arrows:false,
    slidesToScroll: 2,
    responsive: [
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 3,
         // slidesToScroll: 1,
       }
     },
     {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 2,
        // slidesToScroll: 1
      }
    }
    ]
  });




 // Slider Tredning Today

 $('.slider-tt').slick({
    infinite: false,
    arrows: false,
    slidesToShow: 2,
    // autoplay:true,
    slidesToScroll: 1
  });


});





