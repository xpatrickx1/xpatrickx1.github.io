
$(window).on('load', function () {
    var $preloader = $('.loader_box'),
        $spinner   = $preloader.find('.double-bounce1 .double-bounce2');
    $spinner.fadeOut();
    $preloader.delay(500).fadeOut('slow');
});



$(document).ready(function () {
    $(document).on("scroll", onScroll);

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });



    $(window).scroll(function() {
        $('.mov').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+screen.height+300) {
                $(this).addClass('animation');
            }
            if (imagePos > topOfWindow+screen.height) {
                $(this).removeClass('animation');
            }


        });
    });



    $('.menu_button').click(function() {
        $(this).toggleClass('expanded').siblings('div').slideToggle();
    });

    $(document).ready(function () {
        var $forMoreWorks = $('#forMoreWorks'),
            $head_b = $('.head_b');
        $('#butShowHide').click(function () {
            $forMoreWorks.finish();
            var vis = $('#forMoreWorks').is(":visible");
            $forMoreWorks.slideToggle("slow");
            return false;
        });
    });






function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.menu li').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.menu ul li').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}



$(function() {
    var formAnimatedInput = $('.form-animate-fields .form-input');

    formAnimatedInput.each(function() {
        var $this = $(this);

        $this.on('focus', function() {
            $this.addClass('is-filled');
        });

        $this.on('blur', function() {
            if($this.val().length == 0) {
                $this.removeClass('is-filled');
            }
        });
    });
});




});








