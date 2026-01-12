$(document).ready(function() {    
    $('.header-search-wrapper .search-main').click(function(){
        $('.search-form-main').toggleClass('active-search');
        $('.search-form-main .search-field').focus();
    });

    window.onscroll = function() {myFunction()};

    var header = document.getElementById("headeFixed");
    var sticky = header.offsetTop;

    function myFunction() {
      $('.feature_slider').owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1500,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            768:{
                items:5
            },
            1000:{
                items:7
            }
        }
    })
    
      $('#testimonial_slider').owlCarousel({
        loop:true,
        margin: 30,
        nav:true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1500,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1200:{
                items:3
            }
        }
    })
  }
});
