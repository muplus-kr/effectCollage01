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

    // tslideToLastSection
    function scrollToLast() {
        var text2 = document.querySelectorAll(".random2 span");
        var section4 = document.querySelector(".section4");
        var section5 = document.querySelector(".section5");

        for (var i = 0; i < text2.length; i++) {
            var idx = text2[i];

            TweenMax.to(idx, 1, {
                autoAlpha: 1,
                delay: Math.random() * 0.7,
                ease: Power3.easeInOut,
            });
        }

        TweenMax.to(window, 1, {
            scrollTo: {
                y: section5,
            },
            delay: 2,
            ease: Power3.easeInOut,
        });

        TweenMax.to(document.querySelector(".section5 .inner"), 2, {
            scale: 1,
            y: 0,
            delay: 2.5,
            ease: Power3.easeInOut,
        });
        // 한번만 실행되게 on 클래스 부여
        section4.classList.add("on");
    }

    // scroll event
    // window.addEventListener("scroll", function (e) {
    //     var scroll = this.scrollY || this.pageYOffset;
    //     var section2 = document.querySelector(".section2");
    //     var section3 = document.querySelector(".section3");
    //     var section4 = document.querySelector(".section4");

    //     if (scroll > section2.offsetTop - window.innerHeight / 1.5 && scroll < section2.offsetTop - window.innerHeight / 1.5 + section2.offsetHeight) {
    //         cardFunc();
    //     } else if (scroll > section3.offsetTop - window.innerHeight / 1.5 && scroll < section3.offsetTop - window.innerHeight / 1.5 + section3.offsetHeight) {
    //         scaleFunc();
    //     } else if (scroll > section4.offsetTop - window.innerHeight / 1.5 && scroll < section4.offsetTop - window.innerHeight / 1.5 + section4.offsetHeight) {
    //         scrollToLast();
    //     }
    // });

    window.addEventListener("scroll", function (e) {
        var scroll = this.scrollY || this.pageYOffset;
        var section = document.querySelectorAll(".section");
        for (var i = 0; i < section.length; i++) {
            if (scroll > section[i].offsetTop - window.innerHeight / 3 && scroll < section[i].offsetTop - window.innerHeight / 3 + section[i].offsetHeight) {
                if (i == 1) {
                    cardFunc();
                } else if (i == 2) {
                    scaleFunc();
                }
            }
            if (scroll > section[i].offsetTop && scroll < section[i].offsetTop + section[i].offsetHeight) {
                if (i == 3 && !section[3].classList.contains("on")) {
                    scrollToLast();
                }
            }
        }
    });
});
