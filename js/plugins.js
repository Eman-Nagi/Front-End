
$(function () {
    $("html").niceScroll({

        cursorcolor: "#f7600e",
        cursorborderradius: 0,
        cursorradius: "1px solid #f7600e",
        cursorwidth: 10
    }

    );   // nice scroll
    $(".header").height($(window).height());   // trigger header

    // $('.rubber').css({
    //     'position': 'absolute',
    //     'left': '75%',
    //     'top': '50%',
    //     'margin-left': -$('.rubber').outerWidth() / 2,
    //     'margin-top': -$('.rubber').outerHeight() / 2
    // });

    // $('.arrow').css({
    //     'position': 'absolute',
    //     'left': '95%',
    //     'top': '95%',
    //     'margin-left': -$('.arrow').outerWidth() / 2,
    //     'margin-top': -$('.arrow').outerHeight() / 2
    // });

    // move with arrow to section Features
    $(".header .arrow").click(function () {
        $("html , body").animate({
            scrollTop: $(".features").offset().top
        }, 1000);
    });

    // show Hidden items From work section
    $(".show-more").click(function () {/*show لما بتيجى تظهر مختلف عن شكل داله ال fadeInشكل داله ال  */
        $(".hidden").show(700);
    });

    // start show over div
    // $(".mouse-over-9").mouseover(function () {
    //     $(".nine").show();
    // });

    // $(".mouse-over-9").mouseout(function () {
    //     $(".nine").hide();
    // });
    // end show over div

    //testimonials chevron 

    var rightArrow = $(".testimonials .carousel-right-btn");
    var leftArrow = $(".testimonials .carousel-left-btn");
    function checkActive() {
        $(".client:first").hasClass("active") ? leftArrow.fadeOut() : leftArrow.fadeIn();  //مش معمولها هاي ليه ف الديمو وبردو خاصيه الفيد ان واوت مش شغاله معاها
        $(".client:last").hasClass("active") ? rightArrow.fadeOut() : rightArrow.fadeIn();  //مش معمولها هاي ليه ف الديمو وبردو خاصيه الفيد ان واوت مش شغاله معاها
    };

    checkActive();
    // for next Arrow
    rightArrow.click(function () {
        $(".testimonials .active").fadeOut(1000, function () {
            $(this).removeClass("active").next(".client").addClass("active").fadeIn();
            checkActive();
        });
    });

    leftArrow.click(function () {
        $(".testimonials .active").fadeOut(1000, function () {
            $(this).removeClass("active").prev(".client").addClass("active").fadeIn();
            checkActive();
        });
    });

    $('.menu-icon').click(function () {
        $(".header .navbar .links  ul").fadeToggle();
        
    });

});