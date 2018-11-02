(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });

    // Show answer inputs controls
    if (location.href.match(/show-inputs/)) {
        $('html.no-inputs').removeClass('no-inputs');
    }

    /**
     *
     * @param {RegExp} trackName
     * @param {string} realName
     * @param {HTMLInputElement} target
     * @returns {*}
     */
    function match(trackName, realName, target) {
        if (target.value.length < 4) {
            $(target)
                .removeClass('valid invalid')
                .next('.form-control-feedback').text('');

            return;
        }

        if (trackName.test(target.value)) {
            $(target)
                .removeClass('invalid')
                .addClass('valid')
                .next('.form-control-feedback').text('Right! It\'s ' + realName)
            ;
        } else {
            $(target)
                .removeClass('valid')
                .addClass('invalid')
            ;
        }
    }

    $('#q-1 .form-group-answer-input').keyup(function (event) {
        match(
            /Backstreet\s*Boys?|Everybody/i,
            'Backstreet Boys — Everybody',
            event.target
        );
    });

    $('#q-2 .form-group-answer-input').keyup(function (event) {
        match(
            /Celine\s+Dion|Every\s+night|titanic/i,
            'Celine Dion — Every night in my dreams (OST Titanic)',
            event.target
        );
    });

    $('#q-3 .form-group-answer-input').keyup(function (event) {
        match(
            /(justin\s+)?bieber|baby/i,
            'Justin Bieber — Baby',
            event.target
        );
    });

    $('#q-4 .form-group-answer-input').keyup(function (event) {
        match(
            /Rolling\s+Stones|Paint\s+it/i,
            'Rolling Stones - Paint it black',
            event.target
        );
    });

    $('#q-5 .form-group-answer-input').keyup(function (event) {
        match(
            /Kylie\s+Minogue|can\'?t\s+get|(out\s+of\s*)?My\s+Head/i,
            'Kylie Minogue - Can\'t Get You Out Of My Head',
            event.target
        );
    });

})(jQuery); // End of use strict
