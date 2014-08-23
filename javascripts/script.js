//JSHint Validated Custom JS Code by Designova

/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

    
     //Detecting viewpot dimension and calculating the adjustments of components   
     var vH = $(window).height();
     var vHperc40 = vH*40/100;
     var vHperc10 = vH*10/100;
     $('#home').css('height', vH);
     $('#intro').css('margin-top', vHperc10);
     $('.scroll-trigger').css('margin-top', vHperc40);
     //swiper optimization for large screens
     var sH = $('.swiper-slide').height();
     if(sH === 1008){
     var sHneg = sH-400;
     $('.swiper-container').css('max-height',sHneg+'px');
     }
      
      
     //TWITTER INIT (Updated with compatibility on Twitter's new API):
     //PLEASE READ DOCUMENTATION FOR INFO ABOUT SETTING UP YOUR OWN TWITTER CREDENTIALS:
      $(function ($) {
          $('#ticker').tweet({
              modpath: './twitter/',
              count: 5,
              loading_text: 'loading twitter feed flame...',
              username:'designovastudio'
              /* etc... */
          });
        }); 


  //Setup Flickr Feed
  $('#flickr').jflickrfeed({
    limit: 12,
    qstrings: {
      id: '36587311@N08'
    },
    itemTemplate: '<div class="flickr-thumb flickr-photo"><a href="{{image_b}}" target="_blank"><img src="{{image_m}}" alt="{{title}}" /></a></div>'
  });
  
  //Setup Instagram Feed
  $.fn.spectragram.accessData={accessToken:'493851702.8316e06.2327d128bd0f42699de1480ec1c316c0',clientID:'8316e060283d4dd7a5638cb052e71894'};
  
  $('#instagram').spectragram('getUserFeed',{
      query: 'mikekus',
      max: 10
  });

  //Switching Feed Panels
  $('.feed-trigger').click(function(){
    var feedTrigger = $(this).attr('data-feed-trigger');
    $('.feed').hide();
    $('#'+feedTrigger).slideDown('slow');
    $('.feed-trigger').css('opacity','0.3');
    $(this).css('opacity','1');
  });
    
  //Home Page Animations
  setTimeout(function(){
  $('.backstretch').fadeIn();
  }, 1000);
  setTimeout(function(){
  $('#logo').show().addClass('animated rotateIn');
  }, 1200);
	setTimeout(function(){
  $('#intro h1').show().addClass('animated fadeInUpBig');
  }, 1500);
  setTimeout(function(){
  $('#intro h2 > span').fadeIn('slow');
  }, 3500);
  setTimeout(function(){
  $('#explore a img').fadeIn('slow');
  }, 3600);


    $('#explore a img').mouseenter(function(){
        $(this).addClass('animated pulse');
    });
    $('#explore a img').mouseleave(function(){
        $(this).removeClass('animated pulse');
    });

    //Nav highlight
    $('#mast-nav li > a').click(function(){
        $('#mast-nav li > a').removeClass('active');
        $(this).addClass('active');
    });

    $('.page-section').mouseenter(function(){
        var sectionId = $(this).attr('id');
        $('#mast-nav li > a').removeClass('active');
        $('#'+sectionId+'-linker').addClass('active');
    });

    //Parallax Init
    $(window).stellar({
        responsive: false,
        horizontalScrolling: false,
        parallaxBackgrounds: true,
        parallaxElements: true,
        hideDistantElements: true
    });




    //WAYPOINTS - INTERACTION
    //=======================

    //Triggering Navigation as Sticky when scrolled to second section:
    $('.navigation-fadeIn').waypoint(function (event, direction) {
        if (direction === 'down') {
            $('#masthead').slideDown('slow');
        } else {
            $('#masthead').slideUp('slow');
        }
    }, { offset: 10 });


    
	
});


})();








	

