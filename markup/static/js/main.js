$(document).on('click', '[href="#"]', function(e) {
    return e.preventDefault();
});

$('table').wrap("<div class='tableWrap'></div>");

var IScrollFn = function () {
    if (typeof IScroll !== "undefined" && IScroll !== null){
        $('.IScroll').each(function () {
            var visible = $(this).find('.iScrollIndicator:visible');
            new IScroll(this, {
                scrollbars: true,
                mouseWheel: true,
                interactiveScrollbars: true,
                shrinkScrollbars: 'scale',
                fadeScrollbars: true,
                preventDefault: false
            });
            if(visible[0]){
                visible.parent().siblings('.iScrollLoneScrollbar').remove();
            }
        });
    }
};

// var linkTop = $('.footer__scrollTop');
// linkTop.click(function () {
//     $('html, body').animate({ scrollTop: 0 }, 500);
// });
$(window).on({
    load: function () {
        checkFooterHeight();
        IScrollFn();
        // checkHeaderFix();
    },
    scroll: function () {
        // var scrollTop = $(window).scrollTop();
        // if(scrollTop > 200){
        //     linkTop.addClass('active');
        // }else{
        //     linkTop.removeClass('active');
        // }
        // checkHeaderFix();
    },
    resize: function () {
        // checkHeaderFix();
        checkFooterHeight();
    }
});
// $('#callback').modal('show')
if ($.fn.slick) {

    $('.partners__list').slick({
        slidesToShow: 9,
        slidesToScroll: 9,
        dots: false,
        arrows: true,
        // autoplay: true,
        // autoplaySpeed: 4000,
        // adaptiveHeight: true,
        prevArrow: "<button class='slick-prev slick-arrow'><i class='s-arrow-prev'></i></button>",
        nextArrow: "<button class='slick-next slick-arrow'><i class='s-arrow-next'></i></button>",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 7,
                }
            },
            {
                breakpoint: 566,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 392,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
        ]
    });

    $('.slider-list-photo').slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        dots: false,
        arrows: true,
        // autoplay: true,
        // autoplaySpeed: 4000,
        // adaptiveHeight: true,
        prevArrow: "<button class='slick-prev slick-arrow'><i class='s-arrow-prev'></i></button>",
        nextArrow: "<button class='slick-next slick-arrow'><i class='s-arrow-next'></i></button>",
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 688,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 456,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });

    $('.header__slider-el').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        prevArrow: $('.header__slider .slick-prev'),
        nextArrow: $('.header__slider .slick-next'),
        appendDots: $('.header__sliderDots')
        // autoplay: true,
        // autoplaySpeed: 3000,
        // adaptiveHeight: true,
    });
//
//     var itemDetaliSlider = $('.item-detali-slider-view');
//     var itemDetaliSliderPreview = $('.item-detali-slider-preview');
//     itemDetaliSlider.slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         dots: false,
//         arrows: false,
//         infinite: false,
//         adaptiveHeight: true,
//         asNavFor: itemDetaliSliderPreview,
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     dots: true,
//                 }
//             },
//         ]
//         // autoplay: true,
//         // autoplaySpeed: 3000,
//         prevArrow: "<button class='slick-prev slick-arrow'><i class='s-arrow-prev'></i></button>",
//         nextArrow: "<button class='slick-next slick-arrow'><i class='s-arrow-next'></i></button>",
//     });
//
//     itemDetaliSliderPreview.slick({
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         dots: false,
//         vertical: true,
//         verticalSwiping: true,
//         infinite: false,
//         arrows: true,
//         asNavFor: itemDetaliSlider,
//         focusOnSelect: true,
//         // autoplay: true,
//         // autoplaySpeed: 3000,
//         prevArrow: "<button class='slick-prev slick-arrow'><svg class='icon__arrow-top' width='19px' height='19px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrowTop'></use></svg></button>",
//         nextArrow: "<button class='slick-next slick-arrow'><svg class='icon__arrow-bottom' width='19px' height='19px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrowBottom'></use></svg></button>",
//         responsive: [
//         //     {
//         //         breakpoint: 768,
//         //         settings: {
//         //             dots: false,
//         //             arrows: false,
//         //         }
//         //     },
//         ]
//     });
}

if($.fn.selectpicker){
    $('select').selectpicker({
        style: '',
        size: 7
    }).selectpicker('setStyle', 'btn', 'remove');
}
if ($.fn.magnificPopup) {
    var magnificPopupObj = {
        delegate: 'a',
        type: 'image',
        tLoading: "",
        mainClass: "",
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        },
        iframe: {
            // markup: '<div class="mfp-iframe-scaler">' +
            // '<div class="mfp-close"></div>' +
            // '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
            // '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

            patterns: {
                youtube: {
                    index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                    id: 'v=', // String that splits URL in a two parts, second part should be %id%
                    // Or null - full URL will be returned
                    // Or a function that should return %id%, for example:
                    // id: function(url) { return 'parsed id'; }

                    src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
                }
            }
        }
    };

    $('.magnificPopup').each(function () {
        $(this).magnificPopup(magnificPopupObj);
    })
}

// $('.catalog-category-list a').click(function(e){
//     var _this = $(this),
//         list = _this.next('ul'),
//         parent = _this.parent(),
//         className = 'active',
//         time = 300;
//
//     if(list[0]){
//         e.preventDefault();
//         parent.toggleClass(className);
//         list.slideToggle(time);
//
//         parent.siblings().removeClass(className)
//             .find('li').removeClass(className)
//             .end()
//             .find('ul').slideUp(time);
//     }
// });


// $('.collapse').find('.collapse-toggle').click(function(e){
//     e.preventDefault();
//     var _this = $(this),
//         content = _this.next(),
//         parentContent = _this.closest('.collapse-toggle-content')[0]?_this.closest('.collapse-toggle-content'):_this.closest('.collapse'),
//         time = 300,
//         className = 'active';
//
//     if(content.hasClass('collapse-toggle-content')){
//         content.slideToggle(time);
//         _this.parent().toggleClass(className);
//
//         parentContent.find('.collapse-toggle-content').not(content).stop().slideUp(time);
//         parentContent.find('.collapse-toggle').not(_this).parent().removeClass(className);
//     }
// });


// var videoBlock = $('.videoBlock'),
//     videoBlockLabel = $('.videoBlock__label'),
//     videoBlockIframe = $('.videoBlock__main-iframe');
//
// videoBlockLabel.click(function(){
//     var _this = $(this);
//
//     _this.addClass('active').siblings().removeClass('active');
//     var iframe = _this.find('iframe');
//     if(iframe[0]){
//         videoBlockIframe.attr('src', iframe.attr('src'));
//     }
// });

var search__input = $('.form-search__input');
function checkSearcFormActive() {
    if(!search__input[0]) return false;
    if(search__input.val().length>0){
        search__input.addClass('focus')
    }else{
        search__input.removeClass('focus')
    }
}

search__input.on('input', checkSearcFormActive);
checkSearcFormActive();

$('.modal-show').modal('show');

var modalToggleCheckbox = $('.list-modal-toggle-checkbox').find('input');
modalToggleCheckbox.change(function(e){
    var _this = $(this),
        checkedEl = modalToggleCheckbox.filter(':checked'),
        fn = checkedEl.data('toggle-fn');

    $('.list-modal-toggle-checkbox__elementsHidden')[fn]('active');
});

$('.akardion__item-title').click(function () {
    var _this = $(this),
        parent = _this.parent();

    parent.toggleClass('active').find('.akardion__item-text').slideToggle(300);
    parent.siblings().removeClass('active open').find('.akardion__item-text').slideUp(300)
});

$('.btn-toggle-profile').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.btn-toggle-profile-descTextBlockMain').fadeToggle(300);
   $('.content-toggle-profile').slideToggle(300);
});

$(".tabs__nav").find('a').click(function (e) {
    e.preventDefault();
   var _this = $(this),
       block = $(_this.attr('href')),
       parent = _this.parent(),
       className = 'active',
       time = 300;

    if(block[0]){
        parent.addClass('active');
        block.delay(time).fadeIn(time);
    }
    parent.siblings().removeClass(className);
    $('.tabs__content-item').not(block).fadeOut(time);

});