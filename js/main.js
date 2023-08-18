$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if ($(window).width() >= 768) {
            if (sct > 0) {
                $('.header').addClass('on');
            } else {
                $('.header').removeClass('on');
            }
        }

        if (sct < 2800) {
            $('.to_top').addClass('on');
        } else {
            $('.to_top').removeClass('on');
        }
    });

    $('.main_slide').on('init afterChange', function (e, s, c) {
        const current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.main_visual .slide_num span').text(c ? (c + 1) : 1)
        $('.main_visual .slide_num strong').text(s.slideCont)

        console.log(s.slideCount)

        $('.main_visual .menu li').eq(0).addClass('on')
        $('.main_visual .menu li').eq(c).addClass('on')
            .siblings().removeClass('on');
    });



    $('.mopen').on('click', function () {
        $('.header .gnb').toggleClass('on');
        $('.header').toggleClass('on');
    });

    $(window).on('resize', function () {
        $('.header .gnb').removeClass('on');
    })

    var swiper = new Swiper(".mySwiper", {
        effect: 'fade',
        slidesPerView: 1,
        loop: true,
        speed: 1000,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        centeredSlides: true,
        autoplay: {
            delay: 2500,
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
            },
        },
    });



    var swiper = new Swiper('.tab01 .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 20,
        loof: true,
        loopAdditionalSlides: 1,
        navigation: {
            nextEl: '.tab01 .swiper-button-next',
            prevEl: '.tab01 .swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 6,
            },
        },
    });

    var swiper = new Swiper('.tab02 .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 20,
        loof: true,
        navigation: {
            nextEl: '.tab02 .swiper-button-next',
            prevEl: '.tab02 .swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 6,
            },
        },
        observer: true,
        observeParents: true,

    });

    var swiper = new Swiper('.tab03 .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 20,
        loof: true,
        navigation: {
            nextEl: '.tab03 .swiper-button-next',
            prevEl: '.tab03 .swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 6,
            },
        },
        observer: true,
        observeParents: true,

    });
    var swiper = new Swiper('.tab04 .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 20,
        loof: true,
        navigation: {
            nextEl: '.tab04 .swiper-button-next',
            prevEl: '.tab04 .swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 6,
            },
        },
        observer: true,
        observeParents: true,

    });
    var swiper = new Swiper('.tab05 .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 20,
        loof: true,
        navigation: {
            nextEl: '.tab05 .swiper-button-next',
            prevEl: '.tab05 .swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 6,
            },
        },
        observer: true,
        observeParents: true,

    });
    var swiper = new Swiper('.tab06 .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 20,
        loof: true,
        navigation: {
            nextEl: '.tab06 .swiper-button-next',
            prevEl: '.tab06 .swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 6,
            },
        },
        observer: true,
        observeParents: true,

    });
    var swiper = new Swiper('.tab07 .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 20,
        loof: true,
        navigation: {
            nextEl: '.tab07 .swiper-button-next',
            prevEl: '.tab07 .swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 6,
            },
        },
        observer: true,
        observeParents: true,

    });


    $(".tab-wrapper .tab").on('click', function () {

        $(".tab-wrapper .tab").removeClass("on");
        $(this).addClass("on");
        $(".tab-contents").hide();
        let tabid = $(this).attr("rel");
        $("." + tabid).fadeIn();
    });



    var swiper = new Swiper('.tab08 .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 20,
        loof: true,
        navigation: {
            nextEl: '.tab08 .swiper-button-next',
            prevEl: '.tab08 .swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 6,
            },
        },
        observer: true,
        observeParents: true,

    });

    var swiper = new Swiper('.tab09 .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 20,
        loof: true,
        navigation: {
            nextEl: '.tab09 .swiper-button-next',
            prevEl: '.tab09 .swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 6,
            },
        },
        observer: true,
        observeParents: true,

    });
    var swiper = new Swiper('.tab10 .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 20,
        loof: true,
        navigation: {
            nextEl: '.tab10 .swiper-button-next',
            prevEl: '.tab10 .swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 6,
            },
        },
        observer: true,
        observeParents: true,

    });
    var swiper = new Swiper('.tab11 .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 20,
        loof: true,
        navigation: {
            nextEl: '.tab11 .swiper-button-next',
            prevEl: '.tab11 .swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 6,
            },
        },
        observer: true,
        observeParents: true,

    });



    $(".tab-wrapper02 .tab").on('click', function () {

        $(".tab-wrapper02 .tab").removeClass("on");
        $(this).addClass("on");
        $(".tab-contents02").hide();
        let tabid = $(this).attr("rel");
        $("." + tabid).fadeIn();
    });



    var swiper = new Swiper('.main_thema .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.main_thema .swiper-button-next',
            prevEl: '.main_thema .swiper-button-prev',
        },
    });


})