$(document).ready(function () {

    //toggle james and mathilda images based on active slide
    $(".carousel-control-prev").on('click', function() {
        if ($("#left-circle").hasClass('active') && $(".carousel-custom-prev-icon").css("background", "url(./assets/james-selected.png)")) {
        } 
        else if (!$("#left-circle").hasClass('active') && $("#carousel-custom-prev-icon").css("background", "url(./assets/james-selected.png)")) {
            $(".carousel-custom-prev-icon").css("background", "url(./assets/james-selected.png)");
            $(".carousel-custom-next-icon").css("background", "url(./assets/mathilda.png)");
        }
    });

    $(".carousel-control-next").on('click', function() {
        if ($("#right-circle").hasClass('active') && $(".carousel-custom-next-icon").css("background", "url(./assets/mathilda-selected.png)")) {
        } else if (!$("#right-circle").hasClass('active') && $(".carousel-custom-next-icon").css("background", "url(./assets/mathilda.png)")) {
            $(".carousel-custom-next-icon").css("background", "url(./assets/mathilda-selected.png)");
            $(".carousel-custom-prev-icon").css("background", "url(./assets/james.png)");
        } 
    });


    //function for toggling james & mathilda images with bootstrap's caroulel arrows
    function toggleSliderIcons (displaySize) {
        if (displaySize === 'large') {
            $("#james").show();
            $("#arrow-left").hide()
            $("#mathilda").show();
            $("#arrow-right").hide();
        } else {
            $("#james").hide();
            $("#arrow-left").show()
            $("#mathilda").hide();
            $("#arrow-right").show();
        }
    }

    //checks window size on page load, then calls toggleSliderIcons function
    if ($(window).width() > 767) {
        toggleSliderIcons("large");
    } else {
        toggleSliderIcons("small");
    }

    //checks window size on window resize listener, then calls toggleSliderIcons function
    $(window).resize( function() {
        if ($(window).width() > 767) {
            toggleSliderIcons("large");
        } else {
            toggleSliderIcons("small");
        }
    });


    //smooth scrolling
    $('.smooth-scroll').on('click', function() {
        
        var linkHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(linkHref).offset().top + 1 
        }, 1000);
    
    });

    //top arrow
    function toggleTopArrow () {
        if($(window).width() > 767) {
            if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
                $("#top-arrow").fadeIn('slow');
            } else {
                $("#top-arrow").fadeOut('slow');
            }
        } else {
            $("#top-arrow").fadeOut('slow');
        }
    }
    
    window.onscroll = function() {toggleTopArrow()};
    
});


