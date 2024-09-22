jQuery(document).ready(function ($) {

    function get_height() {

        if (jQuery(window).width() < 601) {

            return jQuery(window).height();
        } else {
            return jQuery(window).height();
        }


    }

    yula_slider();

    function yula_slider() {

        var height = get_height();

        jQuery('#yula-slider').camera({
            height: height + 'px',
            loader: 'bar',
            overlay: false,
            fx: 'simpleFade',
            pagination: false,
            thumbnails: false,
            transPeriod: 1000,
            overlayer: false,
            playPause: false,
            hover: false,
        });
    }
});

jQuery(document).ready(function ($) {

    $('#yula-featured .featured-box').click(function () {

        if( $(this).attr('data-target') && $(this).attr('data-target') != '#' ) {
            window.location.href = $(this).attr('data-target');
        }

    });


    $('.featured-box').hover(function () {

        $('.yula-icon', this).stop(true, false).animate({
            top: '-7px'

        }, 300);
        $('.yula-desc', this).stop(true, false).animate({
            top: '7px'

        }, 300);

        $('.yula-title', this).stop(true, false).animate({
            'letter-spacing': '1.5px'

        }, 300);

    }, function () {
        $('.yula-icon', this).stop(true, false).animate({
            top: '0px'

        }, 300);
        $('.yula-desc', this).stop(true, false).animate({
            top: '0px'

        }, 300);
        $('.yula-title', this).stop(true, false).animate({
            'letter-spacing': '1px'

        }, 300);
    });




    $('#primary-menu').slicknav({
        prependTo: $('.yula-header-menu'),
        label: '',
        allowParentLinks: true
    });

    $('.yula-search, #yula-search .fa.fa-close').click(function () {

        $('#yula-search').fadeToggle(449)

    });

    // Homepage Overlay
    $('#yula-overlay-trigger .fa').click(function () {

        var selector = $('#yula-overlay-trigger');

        if (selector.hasClass('open')) {

            $('.overlay-widget').hide();
            selector.removeClass('open animated slideInUp');

        } else {

            selector.addClass('open animated slideInUp');
            $('.overlay-widget').fadeIn(330);
        }

    });

    // scroll to top trigger
    $('.scroll-top').click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });

    // scroll to top trigger
    $('.scroll-down').click(function () {

        $("html, body").animate({
            scrollTop: ($(window).height() - 85)
        }, 1000);

        return false;

    });



    // Parallax
    $(window).scroll(function () {

        var s = $(window).scrollTop();

        $('.parallax').css({top: (s / 3.)});

        if (s > $(window).height()) {

            $('#yula-header.frontpage').addClass('sticky animated slideInDown');

        } else {
            $('#yula-header.frontpage').removeClass('sticky animated slideInDown');
        }

    })

    // ------------
    var yulaWow = new WOW({
        boxClass: 'reveal',
        animateClass: 'animated',
        offset: 150

    });

    yulaWow.init();
    
    
});