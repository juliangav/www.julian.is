$(document).on('ready', function() {  
  var winHeight = $(window).height(), 
      docHeight = $(document).height(),
      progressBar = $('progress'),
      max, value;

  /* Set the max scrollable area */
  max = docHeight - winHeight;
  progressBar.attr('max', max);

  $(document).on('scroll', function(){
     value = $(window).scrollTop();
     progressBar.attr('value', value);
  });
});

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



  function addAnchor(element) {
    element.innerHTML = `${element.innerText}&nbsp;<a href="#${element.id}" class="article__header-target">#</a>`
  }
  
   document.addEventListener('DOMContentLoaded', function () {
    var headers = document.querySelectorAll('.article__main h2, .article__main h3, .article__main h4')
    if (headers) {
      headers.forEach(addAnchor)
    }
  })


// Exit intent
// function addEvent(obj, evt, fn) {
//   if (obj.addEventListener) {
//     obj.addEventListener(evt, fn, false);
//   } else if (obj.attachEvent) {
//     obj.attachEvent("on" + evt, fn);
//   }
// }

// Exit intent trigger
// addEvent(document, 'mouseout', function(evt) {

//   if (evt.toElement === null && evt.relatedTarget === null && !localStorage.getItem('exitintent_show')) {
//     $.magnificPopup.open({
//       items: {
//         src: '#newsletter-form' //ID of inline element
//       },
//       type: 'inline',
//       removalDelay: 500, //Delaying the removal in order to fit in the animation of the popup
//       mainClass: 'newsletter-popup mfp-fade mfp-fade-side', //The actual animation
//     });

//     localStorage.setItem('exitintent_show', 'true'); // Set the flag in localStorage
//   }
// });


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
  var headerHeight = $('.site-header').height();
  $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination - headerHeight }, 1000);
});
$('#TableOfContents a').click(function(e) {
  e.preventDefault();
  var elementClicked = $(this).attr("href");
  var destination = $(elementClicked).offset().top;
  var headerHeight = $('.site-header').height();
  $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination - headerHeight }, 1000);
});