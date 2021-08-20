$(document).ready(function () {
    // random text
    function randomTxt() {
        var text = document.querySelectorAll(".random span");
        for (var i = 0; i < text.length; i++) {
            var idx = text[i];

            TweenMax.to(idx, 1, {
                autoAlpha: 1,
                delay: Math.random() * 0.7,
                ease: Power3.easeInOut,
            });
        }
    }
    randomTxt();

    // card-1
    function cardFunc() {
        var windowWidth, windowHeight;

        var _cards = document.querySelectorAll(".cardItem");
        var h2 = document.querySelector(".section2 h2");
        var inner = document.querySelector(".section2 inner");

        TweenMax.to(h2, 1, {
            y: "30px",
            autoAlpha: 1,
            ease: Power3.easeOut,
        });

        function cardSetting() {
            // IE 에서 foreach 사용
            if (window.NodeList && !NodeList.prototype.forEach) {
                NodeList.prototype.forEach = Array.prototype.forEach;
            }
            _cards.forEach(function (item, i) {
                TweenMax.to(item, 1, {
                    autoAlpha: 1,
                    top: windowHeight / 2 - 110,
                    // left: windowWidth / 2 - i * 220,
                    left: inner + i * 240,
                    ease: Power4.easeInOut,
                    delay: i * 0.15,
                });
            });
        }

        window.addEventListener("resize", function () {
            resize();
        });

        function resize() {
            windowHeight = window.innerHeight;
            windowWidth = window.innerWidth;
            cardSetting();
        }

        resize();
    }

    // card-2
    function scaleFunc() {
        TweenMax.to(document.querySelector(".section3 .inner"), 2.5, {
            scale: 1,
            y: 0,
            // delay: 1,
            ease: Power3.easeInOut,
        });
    }

    // scroll event
    window.addEventListener("scroll", function (e) {
        var scroll = this.scrollY || this.pageYOffset;
        var section2 = document.querySelector(".section2");
        var section3 = document.querySelector(".section3");

        if (scroll > section2.offsetTop - window.innerHeight / 1.5 && scroll < section2.offsetTop - window.innerHeight / 1.5 + section2.offsetHeight) {
            cardFunc();
        } else if (scroll > section3.offsetTop - window.innerHeight / 1.5 && scroll < section3.offsetTop - window.innerHeight / 1.5 + section3.offsetHeight) {
            scaleFunc();
        }
    });

    // TweenMax.to(window, 1, {
    //     scrollTo: {
    //         y: document.querySelector(".section2"),
    //     },
    //     delay: 1.7,
    //     ease: Power3.easeInOut,
    // });
});
