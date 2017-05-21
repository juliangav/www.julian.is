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
  $('.lightbox-form').magnificPopup({
    type: 'image',
    removalDelay: 500, //Delaying the removal in order to fit in the animation of the popup
    mainClass: 'mfp-fade', //The actual animation
  });
});


$(document).ready(function() {
  $('.newsletter-form').magnificPopup({
    items: {
      src: '#newsletter-form' //ID of inline element
    },
    type: 'inline',
    removalDelay: 500, //Delaying the removal in order to fit in the animation of the popup
    mainClass: 'mfp-fade newsletter-popup', //The actual animation
  });
});

$(document).ready(function() {
  $('.newsletter-form-ab-test-post').magnificPopup({
    items: {
      src: '#newsletter-form-ab-test-post' //ID of inline element
    },
    type: 'inline',
    removalDelay: 500, //Delaying the removal in order to fit in the animation of the popup
    mainClass: 'mfp-fade newsletter-popup', //The actual animation
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


// Exit intent
function addEvent(obj, evt, fn) {
  if (obj.addEventListener) {
    obj.addEventListener(evt, fn, false);
  } else if (obj.attachEvent) {
    obj.attachEvent("on" + evt, fn);
  }
}

// Exit intent trigger
addEvent(document, 'mouseout', function(evt) {

  if (evt.toElement === null && evt.relatedTarget === null && !localStorage.getItem('exitintent_show')) {
    $.magnificPopup.open({
      items: {
        src: '#newsletter-form' //ID of inline element
      },
      type: 'inline',
      removalDelay: 500, //Delaying the removal in order to fit in the animation of the popup
      mainClass: 'newsletter-popup mfp-fade mfp-fade-side', //The actual animation
    });

    localStorage.setItem('exitintent_show', 'true'); // Set the flag in localStorage
  }
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



//Sticky Nav
$(function() {
  //Set the height of the sticky container to the height of the nav
  //var navheight = $('.site-nav-container').height();
  // grab the initial top offset of the navigation 
  var sticky_navigation_offset_top = $('.sh-sticky-wrap').offset().top;

  // our function that decides weather the navigation bar should have "fixed" css position or not.
  var sticky_navigation = function() {
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




// include span tags around all navigation elements
$("#hs_menu_wrapper_primary_nav ul li a").each(function(index) {
  var navText = $(this).html();
  $(this).html("<span>" + navText + "</span>");
});


//Keep function at underneath all click events on a tags
$('.smooth-scroll').click(function(e) {
  e.preventDefault();
  var elementClicked = $(this).attr("href");
  var destination = $(elementClicked).offset().top;
  $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination - 0 }, 1000);
});


