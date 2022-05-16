$(function () {
    $(document).ready(function () {

        $(document).ready(function ($) {
            $('.about__actors').click(function () {
                $('.popup-fade').fadeIn();
                $('body')[0].style.overflow = 'hidden'
                return false;
            });
            // Клик по ссылке "Закрыть".
            $('.popup-close').click(function () {
                $(this).parents('.popup-fade').fadeOut();
                $('body')[0].style.overflowY = 'scroll'
                return false;
            });

            // Закрытие по клавише Esc.
            $(document).keydown(function (e) {
                if (e.keyCode === 27) {
                    e.stopPropagation();
                    $('.popup-fade').fadeOut();
                }
                $('body')[0].style.overflowY = 'scroll'
            });

            // Клик по фону, но не по окну.
            $('.popup-fade').click(function (e) {
                if ($(e.target).closest('.popup').length == 0) {
                    $(this).fadeOut();
                }
                $('body')[0].style.overflowY = 'scroll'
            });
        });

        $(".menuToggle").click(function () {
            $(this).toggleClass("active");
            $('.menu__list').slideToggle(300, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });

        $('.header__photo').animate({
            bottom: 0,
        }, { duration: 1000 });

        // if ($(window).width() > 425) {
        //     $('.header__photo_crown').animate({
        //         top: -20,
        //     }, { duration: 1600 });
        // } else if ($(window).width() <= 425) {
        //     $('.header__photo_crown').animate({
        //         top: 130,
        //     }, { duration: 1600 });
        // } if ($(window).height() >= 770 && $(window).width() <= 500) {
        //     $('.header__photo_crown').animate({

        //         top: 250,
        //     }, { duration: 1600 });
        // }


        const stringsArr = $('.rand_elem')
        console.log(stringsArr);
        let rand = stringsArr.length - 1
        setInterval(() => {
            let elem = stringsArr[rand]
            $(elem).toggleClass('add_color')
            setTimeout(() => {
                $(elem).removeClass('add_color')
            }, 1000)
            if (rand >= 0) {
                rand--
            }else{
                rand = stringsArr.length - 1
            }
        }, 1000);
    });
    $('.gallery__slider').slick({

        infinite: true,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [

            {
                breakpoint: 1024,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    centerMode: true,
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })
})