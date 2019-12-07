"use strict";

$(document).ready(function () {

    picturePolifill();
    
    $(window).scroll(function () {
        var headerHeight = $(".page-header__top").innerHeight();

        if ($(this).scrollTop() > headerHeight + parseInt("40")) {
            $(".page-header").addClass("page-header--fixed");
        }

        else {
            $(".page-header").removeClass("page-header--fixed");
        }
    });

    $(".hamburger-btn").click(function (e) {
        e.preventDefault();

        $(this).toggleClass("hamburger-btn--active");
        $(".page-header__top").toggleClass("page-header__top--active");

        $(".page-header .main-nav").fadeToggle(250, function () {
            if ($(this).css("display") === "none") {
                $(this).removeAttr("style");
            }
        });

    });

    $("[data-fancybox]").fancybox({
        buttons: [
            "zoom",
            "close"
        ],
    });

    $(".gallery__list--js").owlCarousel({
        items: 3,
        margin: 20,
        nav: true,
        dots: false,
        smartSpeed: 400,
        responsiveRefreshRate: 1,
        navText: ["<button class='owl-btn ico i-chevron-left-bold'></button>", "<button class='owl-btn ico i-chevron-right-bold'></button>"],
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 2,
                margin: 20,
            },
            991: {
                items: 3,
                margin: 20,
            }
        }
    });

    $(".card-container--carousel").owlCarousel({
        nav: true,
        dots: false,
        smartSpeed: 400,
        responsiveRefreshRate: 1,
        navText: ["<button class='owl-btn ico i-chevron-left-bold'></button>", "<button class='owl-btn ico i-chevron-right-bold'></button>"],
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 2,
                margin: 20,
            },
            991: {
                items: 3,
                margin: 20,
            },
            1270: {
                items: 4,
                margin: 20
            }
        }
    });

    $(".card-container--arenas-carousel").owlCarousel({
        nav: true,
        dots: false,
        smartSpeed: 400,
        responsiveRefreshRate: 1,
        navText: ["<button class='owl-btn ico i-chevron-left-bold'></button>", "<button class='owl-btn ico i-chevron-right-bold'></button>"],
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            720: {
                items: 2,
                margin: 20,
            },
            991: {
                items: 3,
                margin: 20,
            }
        }
    });

    $("#modal-order, #modal-thanks").iziModal({
        bodyOverflow: false,
        overlayColor: "rgba(0, 0, 0, 0.8)",
        width: false,
        closeOnEscape: true,
        closeButton: true,
        zindex: 10000,
        focusInput: false,
    });

    $(".choice-clubs__select, .form__select").selectric({
        arrowButtonMarkup: "<button class='selectric-btn ico i-chevron-down'></button>",
        responsive: true,
        nativeOnMobile: false,
    });

    $(".faq__item").click(function () {

        $(this).toggleClass("faq__item--open");
        $(this).find(".faq__content").slideToggle(300);

    });

    $(".form__input")

        .on("focus", function () {
            $(this).siblings(".form__placeholder").addClass("form__placeholder--active");
        })

        .on("input blur",function () {
            if ($(this).val() === "") {
                $(this).siblings(".form__placeholder").removeClass("form__placeholder--active");
            }
    });

    $(".form__input--phone")
        .mask("+7 (999) 999-99-99", {"autoclear": false})
        .on("input blur", function () {
            if ($(this).val() === "") {
                $(this).siblings(".form__placeholder").removeClass("form__placeholder--active");
                $(this).removeClass("form__input--valid");
            }

            else if ($(this).val() !== "") {
                $(this).addClass("form__input--valid");
            }
    });

    $(".form__textarea").on("input", function () {
        
        var minLength = $(this).attr("minlength");
        var maxLength = $(this).attr("maxlength");
        var valueLength = $(this).val().length;

        if (valueLength >= minLength && valueLength < maxLength) {
            $(this).addClass("form__input--valid");
        }
        else {
            $(this).removeClass("form__input--valid");
        }
        
    });

});

function picturePolifill() {
    var logoPicture = document.querySelector("picture");
    picturePolyfill.parse(logoPicture);
}
