"use strict";

require("./style.scss");

$(document).ready(function() {

    var cfg = {
        classes: {
            headerSlides: ".js-slide-header",
            contentSlides: ".js-slide-content",
            contentBox: ".js-content-box",
            menu: ".menu"
        }
    }


    // Funktionsaufrufe bei Aufruf der Seite
    setBoxesToSameHeight(jQuery, cfg);
    initSlick(jQuery, cfg);

    // Event-Handler
    $(window).resize(setBoxesToSameHeight.bind(this, jQuery, cfg));
    $(cfg.classes.menu).click(slideToPosition);
    

    //-----

    function initSlick($, cfg) {

        // Start/Initialize slick slider for content boxes
        $(cfg.classes.contentSlides).slick({
            nextArrow: '<span class="slick-arrow slick-next oi oi-caret-right" data-glyph="caret-right" title="Weiter" aria-hidden="true"></span>',
            prevArrow: '<span class="slick-arrow slick-prev oi oi-caret-left" data-glyph="caret-left" title="Zurück" aria-hidden="true"></span>'
        });

        // Start/Initialize slick slider for header pics‚
        $(cfg.classes.headerSlides).slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 5000
        })
    }

    function setBoxesToSameHeight($, cfg) {

        var heighestBoxHeight = 0;
        var $slickContainer = $(cfg.classes.contentSlides);
        var $boxContents = $slickContainer.find(cfg.classes.contentBox);

        // determine height of heighest box
        $.each($boxContents, function(slideIndex, content) {
            var currentBoxHeight = $(content).height();

            if(currentBoxHeight > heighestBoxHeight) {
                heighestBoxHeight = currentBoxHeight;
            }
        });
        $boxContents.height(heighestBoxHeight);
    }

    function slideToPosition(event) {
        event.preventDefault();
        
        var slideIndex = parseInt($(this).index()+1);
        console.log(slideIndex);

        $(cfg.classes.contentSlides).slick('slickGoTo', slideIndex);
    }
});