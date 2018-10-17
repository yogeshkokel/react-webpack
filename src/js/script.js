// Share Sidebar
function osidenav() {
  document.getElementById("s-sidenav").style.width = "50vw";
}
function csidenav() {
  document.getElementById("s-sidenav").style.width = "0";
}
// Main Side Navigation 
// $("#sidebar").mCustomScrollbar({
//   theme: "minimal"
// });

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-desktop").style.top = "0";
  } else {
    document.getElementById("nav-desktop").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

$('#dismiss, .overlay').on('click', function () {
  $('#sidebar').removeClass('active');
  $('.overlay').removeClass('active');
});

$('#sidebarCollapse').on('click', function () {
  $('#sidebar').addClass('active');
  $('.overlay').addClass('active');
  $('.collapse.in').toggleClass('in');
  $('a[aria-expanded=true]').attr('aria-expanded', 'false');
});

// All Slider JS


$( document ).ready(function() {
  
  // Explore More Category Block Final
  $('.slider-exp-category').slick({
    infinite: false,
    slidesToShow: 5,
    arrows:false,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 4 
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        slidesToShow: 2 
      }
    }
    ]
  });

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
      centerMode: true,
      centerPadding: '50px',
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

 // CATEGORY PAGE SLIDER
 $('.category-slider-showbiz').slick({
      dots: false,
      infinite: true,
      arrows:true,
      speed: 1000,
      autoplay:true,
      autoplaySpeed: 3000,
      slidesToShow: 3,
      // slidesToScroll: 1,
      responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

      ]
    });


});





