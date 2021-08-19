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

    // card
    function card() {
        var windowWidth, windowHeight;

        var _cards = document.querySelectorAll(".cardItem");
        var h2 = document.querySelector(".section2 h2");
        var inner = document.querySelector(".section2 inner");

        TweenMax.to(h2, 1, {
            top: "30px",
            autoAlpha: 1,
            ease: Power3.easeOut,
        });

        function cardSetting() {
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

    window.addEventListener("scroll", function (e) {
        var scroll = this.scrollY;

        if (scroll > document.querySelector(".section2").offsetTop - window.innerHeight / 1.5) {
            card();
        }
    });
});
