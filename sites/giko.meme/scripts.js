
$(function() {
  $('.boxy').addClass('on');
});



/* AUDIO */

   var soundclick = document.getElementById("gikopast");
   var soundclick2 = document.getElementById("ouch");

/* VIDEO */




var video_section1 = $('#video1');



$(document).ready(function () {
  $(".video1link").click(function (е) {
      е.preventDefault();
        $(".videomodal, .videooverlay").addClass("on");

        video_section1.attr('src','video/giko-chad.mp4');
        video_section1.prop('preload','auto');
        video_section1.get(0).play();
        $("#ouch").prop('muted', true);

  });

  $(".video2link").click(function (е) {
    е.preventDefault();
      $(".videomodal, .videooverlay").addClass("on");

      video_section1.attr('src','video/giko-kiss.mp4');
      video_section1.prop('preload','auto');
      video_section1.get(0).play();
      $("#ouch").prop('muted', true);

});

$(".video3link").click(function (е) {
  е.preventDefault();
    $(".videomodal, .videooverlay").addClass("on");

    video_section1.attr('src','video/giko-ns.mp4');
    video_section1.prop('preload','auto');
    video_section1.get(0).play();
    $("#ouch").prop('muted', true);
    
});

$(".video4link").click(function (е) {
  е.preventDefault();
    $(".videomodal, .videooverlay").addClass("on");

    video_section1.attr('src','video/giko-red.mp4');
    video_section1.prop('preload','auto');
    video_section1.get(0).play();
    $("#ouch").prop('muted', true);
    
});

  
  

  $(".close, .videooverlay").click(function (е) {
    е.preventDefault();
      $(".videomodal, .videooverlay").removeClass("on");

      video_section1.get(0).pause();
      
      if (!$(".volumebox").hasClass("off")) {
        
      $("#ouch").prop('muted', false);
      }
      

});


});

  


$( document ).ready(function() {


/* audio controller */

$("#volume").click(function() {
  var bool = $("#ouch").prop("muted");
  var bool2 = $("#gikopast").prop("muted");
  
  $("#ouch").prop("muted",!bool);
  $("#gikopast").prop("muted",!bool2);

  $(".volumebox").toggleClass("off");

});

    /* load the site broo */

    $( ".enter" ).click(function(event) {

      event.preventDefault();

      $(".boxy").removeClass( "on" );
      $(".bigday").addClass( "off" );

      soundclick2.play();
      return false;

    });

    $( ".tvbox" ).click(function(event) {

      event.preventDefault();

      $(".panel1").addClass( "off" );
      $(".panel2").addClass( "on" );
      $(".e-honda").addClass( "on" );
      $(".hadoken-box").addClass( "on" );

      $('.gikoswapper').attr('src', 'images/giko-mad.png');

    });
 

  
    $( ".gotothepast" ).click(function(event) {

      event.preventDefault();

      $( ".infomodal, .overlay" ).addClass( "active" );
      $( ".mobile-menu, .menu-overlay" ).removeClass( "on" );
      $( "body" ).removeClassClass( "smart" );

      $(".panel1").removeClass( "off" );
      $(".panel2").removeClass( "on" );
      
      $(".close-button").removeClass( "on" );
      $(".menu-button").addClass( "on" );

      soundclick.play();
      return false;
      
    });

    $( ".degen" ).click(function(event) {

      event.preventDefault();

      $( ".maincontainer" ).addClass( "active" );
      $( ".startcontent" ).addClass( "off" );
      $( ".investcontent" ).removeClass( "on" );
      $( ".mobile-menu, .menu-overlay" ).removeClass( "on" );
      $( ".sparkles" ).removeClass( "smart" );

      $(".panel1").removeClass( "off" );
      $(".panel2").removeClass( "on" );

      $(".close-button").removeClass( "on" );
      $(".menu-button").addClass( "on" );

      $('.gikoswapper').attr('src', 'images/giko-tv.png');
      
  
    });


    $( ".whales" ).click(function(event) {

      event.preventDefault();

      $( ".investcontent" ).addClass( "on" );
      $( ".maincontainer" ).removeClass( "active" );
      $( ".startcontent" ).addClass( "off" );

      $( ".sparkles" ).addClass( "smart" );
      
      $( ".mobile-menu, .menu-overlay" ).removeClass( "on" );

      $(".panel1").removeClass( "off" );
      $(".panel2").removeClass( "on" );

      $(".close-button").removeClass( "on" );
      $(".menu-button").addClass( "on" );

      $('.gikoswapper').attr('src', 'images/giko-whale.png');


      
  
    });




    $( ".logobutton, .home" ).click(function(event) {

      event.preventDefault();

      $( ".maincontainer" ).removeClass( "active" );
      
      $( ".sparkles" ).removeClass( "smart" );
      $( ".investcontent" ).removeClass( "on" );

      $('.gikoswapper').attr('src', 'images/giko-surprise.png');

      $( ".startcontent" ).removeClass( "off" );
      $( ".mobile-menu, .menu-overlay" ).removeClass( "on" );
      $(".close-button").removeClass( "on" );
      $(".menu-button").addClass( "on" );

      $(".panel1").removeClass( "off" );
      $(".panel2").removeClass( "on" );
      
    });



    $( ".closethepast, .overlay" ).click(function(event) {

      event.preventDefault();

      $( ".infomodal, .overlay" ).removeClass( "active" );
      

      soundclick.pause(); // Stop playing
      soundclick.currentTime = 0; // Reset time
      
    });

    $( ".menu-button" ).click(function(event) {

      event.preventDefault();

      $( ".mobile-menu, .menu-overlay" ).addClass( "on" );
      $(".close-button").addClass( "on" );
      $(this).addClass( "on" );
      
    });

    $( ".menu-overlay" ).click(function(event) {

      event.preventDefault();

      $( ".mobile-menu, .menu-overlay" ).removeClass( "on" );

      $(".close-button").removeClass( "on" );
      $(".menu-button").addClass( "on" );
    });


    $( ".close-button, .overlay" ).click(function(event) {

      event.preventDefault();

      $( ".mobile-menu, .menu-overlay" ).removeClass( "on" );
      $( this ).removeClass( "on" );
      $(".menu-button").addClass( "on" );

      
    });


});


