//PNG Fallback
if (!Modernizr.svg) {
  var images = $('img[data-png-fallback]');
  images.each(function(i) {
    $(this).attr('src', $(this).data('png-fallback'));
  });
}

//Toggle Boxes
$(document).ready(function() {
  $('body').addClass('js');
  var $activatelink = $('.activate-link');

  $activatelink.click(function() {
    var $this = $(this);
    $this.toggleClass('active').next('div').toggleClass('active');
    return false;
  });

});

//Responsive Navigation
$(document).ready(function() {
  $('body').addClass('js');
  var $menu = $('.site-nav-container'),
    $menulink = $('.menu-link'),
    $menuTrigger = $('.menu-item-has-children > a'),
    $searchLink = $('.search-link'),
    $siteSearch = $('.search-module'),
    $siteWrap = $('.site-wrap');

  $searchLink.click(function(e) {
    e.preventDefault();
    $searchLink.toggleClass('active');
    $siteSearch.toggleClass('active');
  });

  $menulink.click(function(e) {
    e.preventDefault();
    $menulink.toggleClass('active');
    $menu.toggleClass('active');
    $siteWrap.toggleClass('nav-active');
  });

  $('.menu-item-has-children').append("<span class='m-subnav-arrow'></span>");

  $('.m-subnav-arrow').click(function() {
    $(this).toggleClass('active');
    var $this = $(this).prev(".sn-level-2");
    $this.toggleClass('active').next('ul').toggleClass('active');
  });

});

//Magnific Popup
$(document).ready(function() {
  $('.lightbox').magnificPopup({
    type: 'image',
    removalDelay: 500, //Delaying the removal in order to fit in the animation of the popup
    mainClass: 'mfp-fade', //The actual animation
  });
});
$(document).ready(function() {
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 500,
    preloader: false,

    fixedContentPos: false
  });
});

//Delayed Popup with localstorage to show popup only once
// $(document).ready(function() {
//   if (!localStorage.getItem('popup_show')) {

//     setTimeout(function() {
//       $.magnificPopup.open({
//         items: {
//           src: '#delayed-popup' //ID of inline element
//         },
//         type: 'inline',
//         removalDelay: 500, //Delaying the removal in order to fit in the animation of the popup
//         mainClass: 'mfp-fade', //The actual animation

//       });
//     }, 5000); //Initial popup delay, 5 seconds

//     localStorage.setItem('popup_show', 'true'); // Set the flag in localStorage
//   }
// });

//Show More
$(document).ready(function() {
  $(".showmore").after("<p><a href='#' class='show-more-link'>More</a></p>");
  var $showmorelink = $('.showmore-link');
  $showmorelink.click(function() {
    var $this = $(this);
    var $showmorecontent = $('.showmore');
    $this.toggleClass('active');
    $showmorecontent.toggleClass('active');
    return false;
  });
});

//Click to Expand
$(document).ready(function() {
  var $expandlink = $('.ce-header');
  $expandlink.click(function() {
    var $this = $(this);
    var $showmorecontent = $('.showmore');


    $this.parent().toggleClass('active'); 
    $showmorecontent.toggleClass('active');
    return false;
  });
});


// Accordion Tabs

$(document).ready(function () {
  $('.accordion-tabs').each(function(index) {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });
  $('.accordion-tabs').on('click', 'li > a.tab-link', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs');
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });
});


//Flexslider    
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    animationLoop: true,
    controlNav: false
  });
});


//Sticky Nav
$(function() {
    //Set the height of the sticky container to the height of the nav
    //var navheight = $('.site-nav-container').height();
    // grab the initial top offset of the navigation 
    var sticky_navigation_offset_top = $('.sh-sticky-wrap').offset().top;
     
    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var sticky_navigation = function(){
        var scroll_top = $(window).scrollTop(); // our current vertical position from the top
         
        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scroll_top > sticky_navigation_offset_top) { 
            $('.sh-sticky-wrap').addClass('stuck');
            //$('.sh-sticky-wrap').addClass('stuck').css('height',navheight);
        } else {
            $('.sh-sticky-wrap').removeClass('stuck'); 
        }   
    };
     
    // run our function on load
    sticky_navigation();
     
    // and run it again every time you scroll
    $(window).scroll(function() {
         sticky_navigation();
    });
 
});






//Slide in CTA
$(function() {
  var slidebox = $('#slidebox');
  if (slidebox) {
    $(window).scroll(function() {
      var distanceTop = $('#last').offset().top - $(window).height();
      if ($(window).scrollTop() > distanceTop)
        slidebox.animate({
          'right': '0px'
        }, 300);
      else
        slidebox.stop(true).animate({
          'right': '-430px'
        }, 100);
    });
    $('#slidebox .close').on('click', function() {
      $(this).parent().remove();
    });
  }
});


// include span tags around all navigation elements
$("#hs_menu_wrapper_primary_nav ul li a").each(function( index ) {
  var navText = $( this ).html(); $( this ).html("<span>" + navText + "</span>");
});


//Keep function at underneath all click events on a tags
$('.smooth-scroll').click(function(e) {
  e.preventDefault();
  var elementClicked = $(this).attr("href");
  var destination = $(elementClicked).offset().top;
  $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination-0}, 1000);
});

//Styles
// $(document).ready(function() {
//  $('.site-content *').removeAttr("style");
// });

