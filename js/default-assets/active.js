(function ($) {
    'use strict';

    var confer_window = $(window);

    // ****************************
    // :: 1.0 Preloader Active Code
    // ****************************

    confer_window.on('load', function () {
        $('#preloader').fadeOut('1000', function () {
            $(this).remove();
        });
    });

    // ****************************
    // :: 2.0 ClassyNav Active Code
    // ****************************

    if ($.fn.classyNav) {
        $('#conferNav').classyNav();
    }

    // *********************************
    // :: 3.0 Welcome Slides Active Code
    // *********************************

    if ($.fn.owlCarousel) {
        var welcomeSlider = $('.welcome-slides');
        welcomeSlider.owlCarousel({
            items: 1,
            loop: true,
            autoplay: false,
            smartSpeed: 1000,
            autoplayTimeout: 10000,
            nav: true,
            navText: [('<i class="zmdi zmdi-chevron-left"></i>'), ('<i class="zmdi zmdi-chevron-right"></i>')]
        })

        welcomeSlider.on('translate.owl.carousel', function () {
            var layer = $("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        welcomeSlider.on('translated.owl.carousel', function () {
            var layer = welcomeSlider.find('.owl-item.active').find("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });
    }

    // ******************************
    // :: 17.0 ScrollDown Active Code
    // ******************************

    var sections = ['About','Event', 'Work', 'PaperPresent','Sponsors','Speaker'];

    // for (var i = 0; i < sections.length; i++) {
    //     $("#scroll" + sections[i]).on('click', function () {
    //         $('html, body').animate({
    //             scrollTop: $("#to" + sections[i]).offset().top - (i === 0 ? 40 : 64)
    //         }, 800);
    //     });
    // }



    // ******************************
    // :: 17.0 Scrollspy Active Code
    // ******************************

    var scrollTargets = [
          {id: 'scrollAbout', target: 'toAbout', offset: -75},
          {id: 'scrollSponsors', target: 'toSponsors', offset: -75},
          {id: 'scrollSpeaker', target: 'toSpeaker', offset: -75},
          {id: 'scrollEvent', target: 'toEvent', offset: -75},
          {id: 'scrollWork', target: 'toWork', offset: -75},
          {id: 'scrollPaperPresent', target: 'toPaperPresent', offset: -75},
          {id: 'scrollSchedule', target: 'toSchedule', offset: -75},
          {id: 'scrollEventNav', target: 'toEventNav', offset: -75}
        ];

        for (var i = 0; i < scrollTargets.length; i++) {
          (function (i) {
            $("#" + scrollTargets[i].id).on('click', function () {
              $('html, body').animate({
                scrollTop: $("#" + scrollTargets[i].target).offset().top + scrollTargets[i].offset
              }, 800);
            });
          })(i);
        }




    // $("#scrollAbout").on('click', function () {
    //     $('html, body').animate({
    //         scrollTop: $("#toAbout").offset().top - 75
    //     }, 800);
    // });



    //     $("#scrollSponsors").on('click', function () {
    //     $('html, body').animate({
    //         scrollTop: $("#toSponsors").offset().top -75
    //     }, 800);
    // });

    //     $("#scrollSpeaker").on('click', function () {
    //     $('html, body').animate({
    //         scrollTop: $("#toSpeaker").offset().top - 75
    //     }, 800);
    // });

    //         $("#scrollEvent").on('click', function () {
    //     $('html, body').animate({
    //         scrollTop: $("#toEvent").offset().top -75
    //     }, 800);
    // });


    //     $("#scrollWork").on('click', function () {
    //     $('html, body').animate({
    //         scrollTop: $("#toWork").offset().top - 75
    //     }, 800);
    // });


    //     $("#scrollPaper").on('click', function () {
    //     $('html, body').animate({
    //         scrollTop: $("#toPaperPresent").offset().top - 75
    //     }, 800);
    // });






        // $(document).ready(function() {
        //   console.log($("#scrollSpy"));
        //   console.log($("#toSpeaker"));
        //   $("#scrollSpy").on("touchstart", function(e) {
        //     e.preventDefault();
        //     $('html, body').animate({
        //       scrollTop: $("#toSpeaker").offset().top
        //     }, 2000);
        //   });
        // });

        // $(document).ready(function() {
        //   $("#scrollSpy").on("touchstart", function(e) {
        //     e.preventDefault();
        //     var target = $("#toSpeaker").offset().top;
        //     $('html, body').animate({
        //       scrollTop: target
        //     }, 2000);
        //   });
        // });
   

    // ************************************
    // :: 4.0 Instragram Slides Active Code
    // ************************************

    if ($.fn.owlCarousel) {
        var clientArea = $('.client-area');
        clientArea.owlCarousel({
            items: 2,
            loop: true,
            autoplay: true,
            smartSpeed: 1000,
            margin: 40,
            autoplayTimeout: 7000,
            nav: true,
            navText: [('<i class="zmdi zmdi-chevron-left"></i>'), ('<i class="zmdi zmdi-chevron-right"></i>')],
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2,
                    margin: 15
                },
                992: {
                    margin: 20
                },
                1200: {
                    margin: 40
                }
            }
        });
    }

    // *********************************
    // :: 5.0 Masonary Gallery Active Code
    // *********************************

    if ($.fn.imagesLoaded) {
        $('.confer-portfolio').imagesLoaded(function () {
            // filter items on button click
            $('.portfolio-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // init Isotope
            var $grid = $('.confer-portfolio').isotope({
                itemSelector: '.single_gallery_item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.single_gallery_item'
                }
            });
        });
    }

    // ***********************************
    // :: 6.0 Counter Up Active Code
    // ***********************************
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // ***********************************
    // :: 6.0 Portfolio Button Active Code
    // ***********************************

    $('.portfolio-menu button.btn').on('click', function () {
        $('.portfolio-menu button.btn').removeClass('active');
        $(this).addClass('active');
    })

    // ********************************
    // :: 7.0 Search Button Active Code
    // ********************************
    $('.search-btn').on('click', function () {
        $('.search-form').toggleClass('search-form-active');
    })

    // ************************
    // :: 8.0 Stick Active Code
    // ************************

    confer_window.on('scroll', function () {
        if (confer_window.scrollTop() > 0) {
            $('.header-area').addClass('sticky');
        } else {
            $('.header-area').removeClass('sticky');
        }
    });

    // *********************************
    // :: 9.0 Magnific Popup Active Code
    // *********************************
    if ($.fn.magnificPopup) {
        $('.video-play-btn').magnificPopup({
            type: 'iframe'
        });
        $('.portfolio-img').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
                preload: [0, 2],
                navigateByImgClick: true,
                tPrev: 'Previous',
                tNext: 'Next'
            }
        });
        $('.single-gallery-item').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
                preload: [0, 2],
                navigateByImgClick: true,
                tPrev: 'Previous',
                tNext: 'Next'
            }
        });
    }

    // **************************
    // :: 10.0 Tooltip Active Code
    // **************************
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // ***********************
    // :: 11.0 WOW Active Code
    // ***********************
    if (confer_window.width() > 767) {
        new WOW().init();
    }

    // ****************************
    // :: 12.0 Jarallax Active Code
    // ****************************
    if ($.fn.jarallax) {
        $('.jarallax').jarallax({
            speed: 0.5
        });
    }

    // ****************************
    // :: 13.0 Countdown Active Code
    // ****************************
    // if ($.fn.countdown) {
    //     $("#clock").countdown("2023/03/11", function (event) {
    //         $(this).html(event.strftime("<div>%m <span>Months</span></div> <div>%d <span>Days</span></div> <div>%H <span>Hours</span></div> <div>%M <span>Minutes</span></div> <div>%S <span>Seconds</span></div>"));
    //     });
    // }

    // Set the date we're counting down to
var countDownDate = new Date("Mar 11, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("clock").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  
}, 1000);

    // ****************************
    // :: 13.0 Scrollup Active Code
    // ****************************
    if ($.fn.scrollUp) {
        confer_window.scrollUp({
            scrollSpeed: 1000,
            scrollText: '<i class="arrow_carrot-up"</i>'
        });
    }

    // *********************************
    // :: 14.0 Prevent Default 'a' Click
    // *********************************
    $('a[href="#"]').on('click', function ($) {
        $.preventDefault();
    });

    // *********************************
    // :: 14.0 Prevent Default 'a' Click
    // *********************************
    var pricingTable = $(".single-ticket-pricing-table");

    pricingTable.on("mouseenter", function () {
        pricingTable.removeClass("active");
        $(this).addClass("active");
    });

})(jQuery);