jQuery(document).ready(function($) {
    // $("#fullpage").fullpage({
    //     afterLoad(_, index) {
    //         if (index === 1) {
    //             return
    //         }
    //
    //         const $section = $('.section').eq(index - 1)
    //         $section.find('[data-aos]').addClass('aos-animate')
    //     },
    //
    // });
});

$(function() {
    $('.button-main-buy').hover(
        function(){
            $(".main-hand img").rotate({animateTo:10});
        },
        function(){
            $(".main-hand img").rotate({animateTo:0});
        });

    $('.second-right-cat').click(function (){
        this.style.pointerEvents = 'none';

        if(document.getElementById("cat1").style.opacity !== "0") {
            $("#cat1").animate({left: "-1.6vw", opacity: 0});
            for(let i = 2, j = 0; i < 6; i++, j++) {
                $("#cat" + i).animate({left: (12.85 * j) + "vw"});
            }
            document.getElementById("cat6").style.visibility = "visible";
            setTimeout(function () {
                document.getElementById("cat1").style.visibility = "hidden";
            }, 500);

            $("#cat6").animate({left: "51.4vw", opacity: 1});
        }
        else if(document.getElementById("cat2").style.opacity !== "0") {
            $("#cat2").animate({left: "-1.6vw", opacity: 0});
            for(let i = 3, j = 0; i < 7; i++, j++) {
                $("#cat" + i).animate({left: (12.85 * j) + "vw"});
            }
            document.getElementById("cat7").style.visibility = "visible";
            setTimeout(function () {
                document.getElementById("cat2").style.visibility = "hidden";
            }, 500);

            $("#cat7").animate({left: "51.4vw", opacity: 1});
        }
        else if(document.getElementById("cat3").style.opacity !== "0") {
            $("#cat3").animate({left: "-1.6vw", opacity: 0});
            for(let i = 4, j = 0; i < 8; i++, j++) {
                $("#cat" + i).animate({left: (12.85 * j) + "vw"});
            }
            document.getElementById("cat8").style.visibility = "visible";
            setTimeout(function () {
                document.getElementById("cat3").style.visibility = "hidden";
            }, 500);

            $("#cat8").animate({left: "51.4vw", opacity: 1});
        }
        else if(document.getElementById("cat4").style.opacity !== "0") {
            $("#cat4").animate({left: "-1.6vw", opacity: 0});
            for(let i = 5, j = 0; i < 9; i++, j++) {
                $("#cat" + i).animate({left: (12.85 * j) + "vw"});
            }
            document.getElementById("cat9").style.visibility = "visible";
            setTimeout(function () {
                document.getElementById("cat4").style.visibility = "hidden";
            }, 500);

            $("#cat9").animate({left: "51.4vw", opacity: 1});
        }
        else if(document.getElementById("cat5").style.opacity !== "0") {
            $("#cat5").animate({left: "-1.6vw", opacity: 0});
            for(let i = 6, j = 0; i < 10; i++, j++) {
                $("#cat" + i).animate({left: (12.85 * j) + "vw"});
            }
            document.getElementById("cat10").style.visibility = "visible";
            setTimeout(function () {
                document.getElementById("cat5").style.visibility = "hidden";
            }, 500);

            $("#cat10").animate({left: "51.4vw", opacity: 1});
        }
        else if(document.getElementById("cat6").style.opacity !== "0") {
            $("#cat6").animate({left: "-1.6vw", opacity: 0});
            for(let i = 7, j = 0; i < 11; i++, j++) {
                $("#cat" + i).animate({left: (12.85 * j) + "vw"});
            }
            document.getElementById("cat11").style.visibility = "visible";
            setTimeout(function () {
                document.getElementById("cat6").style.visibility = "hidden";
            }, 500);

            $("#cat11").animate({left: "51.4vw", opacity: 1});
        }
        else if(document.getElementById("cat7").style.opacity !== "0") {
            $("#cat7").animate({left: "-1.6vw", opacity: 0});
            for(let i = 8, j = 0; i < 12; i++, j++) {
                $("#cat" + i).animate({left: (12.85 * j) + "vw"});
            }
            document.getElementById("cat12").style.visibility = "visible";
            setTimeout(function () {
                document.getElementById("cat7").style.visibility = "hidden";
            }, 500);

            $("#cat12").animate({left: "51.4vw", opacity: 1});
        }
        else if(document.getElementById("cat8").style.opacity !== "0") {
            $("#cat8").animate({left: "-1.6vw", opacity: 0});
            for(let i = 9, j = 0; i < 13; i++, j++) {
                $("#cat" + i).animate({left: (12.85 * j) + "vw"});
            }
            document.getElementById("cat13").style.visibility = "visible";
            setTimeout(function () {
                document.getElementById("cat8").style.visibility = "hidden";
            }, 500);

            $("#cat13").animate({left: "51.4vw", opacity: 1});
        }
        else if(document.getElementById("cat9").style.opacity !== "0") {
            $("#cat9").animate({left: "-1.6vw", opacity: 0});
            for(let i = 10, j = 0; i < 14; i++, j++) {
                $("#cat" + i).animate({left: (12.85 * j) + "vw"});
            }
            document.getElementById("cat14").style.visibility = "visible";
            setTimeout(function () {
                document.getElementById("cat9").style.visibility = "hidden";
            }, 500);

            $("#cat14").animate({left: "51.4vw", opacity: 1});
        }
        else if(document.getElementById("cat10").style.opacity !== "0") {
            $("#cat10").animate({left: "-1.6vw", opacity: 0});
            for(let i = 11, j = 0; i < 15; i++, j++) {
                $("#cat" + i).animate({left: (12.85 * j) + "vw"});
            }
            document.getElementById("cat15").style.visibility = "visible";
            setTimeout(function () {
                document.getElementById("cat10").style.visibility = "hidden";
            }, 500);

            $("#cat15").animate({left: "51.4vw", opacity: 1});
        }

        let but = this;
        setTimeout(function () {but.style.pointerEvents = 'auto';}, 500);
    });

    $('.second-left-cat').click(function (){
        this.style.pointerEvents = 'none';

        if(window.getComputedStyle(document.getElementById("cat15")).opacity !== "0") {
            document.getElementById("cat10").style.visibility = "visible";

            $("#cat15").animate({left: "51.4vw", opacity: 0});
            $("#cat10").animate({left: 0, opacity: 1});
            for(let i = 10, j = 0; i < 15; i++, j++) {
                $("#cat" + i).animate({left: (12.85 * j) + "vw"});
            }

            setTimeout(function () {
                document.getElementById("cat15").style.visibility = "hidden";
            }, 500);
        }
        else if(window.getComputedStyle(document.getElementById("cat14")).opacity !== "0") {
            document.getElementById("cat9").style.visibility = "visible";

            $("#cat14").animate({left: "51.4vw", opacity: 0});
            $("#cat9").animate({left: 0, opacity: 1});
            for(let i = 9, j = 0; i < 14; i++, j++) {
                $("#cat" + i).animate({left: (12.85 * j) + "vw"});

            }
            setTimeout(function () {
                document.getElementById("cat14").style.visibility = "hidden";
            }, 500);
        }
        else if(window.getComputedStyle(document.getElementById("cat13")).opacity !== "0") {
            document.getElementById("cat8").style.visibility = "visible";

            $("#cat13").animate({left: "51.4vw", opacity: 0});
            $("#cat8").animate({left: 0, opacity: 1});
            for(let i = 8, j = 0; i < 13; i++, j++) {
                $("#cat" + i).animate({left: (12.85 * j) + "vw"});

            }
            setTimeout(function () {
                document.getElementById("cat13").style.visibility = "hidden";
            }, 500);
        }
        else if(window.getComputedStyle(document.getElementById("cat12")).opacity !== "0") {
            document.getElementById("cat7").style.visibility = "visible";

            $("#cat12").animate({left: "51.4vw", opacity: 0});
            $("#cat7").animate({left: 0, opacity: 1});
            for(let i = 7, j = 0; i < 12; i++, j++) {
                $("#cat" + i).animate({left: (12.85 * j) + "vw"});
            }

            setTimeout(function () {
                document.getElementById("cat12").style.visibility = "hidden";
            }, 500);
        }
        else if(window.getComputedStyle(document.getElementById("cat11")).opacity !== "0") {
            document.getElementById("cat6").style.visibility = "visible";

            $("#cat11").animate({left: "51.4vw", opacity: 0});
            $("#cat6").animate({left: 0, opacity: 1});
            for(let i = 6, j = 0; i < 11; i++, j++) {
                $("#cat" + i).animate({left: (12.85 * j) + "vw"});

            }
            setTimeout(function () {
                document.getElementById("cat11").style.visibility = "hidden";
            }, 500);
        }
        else if(window.getComputedStyle(document.getElementById("cat10")).opacity !== "0") {
            document.getElementById("cat5").style.visibility = "visible";

            $("#cat10").animate({left: "51.4vw", opacity: 0});
            $("#cat5").animate({left: 0, opacity: 1});
            for(let i = 5, j = 0; i < 10; i++, j++) {
                $("#cat" + i).animate({left: (12.85 * j) + "vw"});

            }
            setTimeout(function () {
                document.getElementById("cat10").style.visibility = "hidden";
            }, 500);
        }
        else if(window.getComputedStyle(document.getElementById("cat9")).opacity !== "0") {
            document.getElementById("cat4").style.visibility = "visible";

            $("#cat9").animate({left: "51.4vw", opacity: 0});
            $("#cat4").animate({left: 0, opacity: 1});
            for(let i = 4, j = 0; i < 9; i++, j++) {
                $("#cat" + i).animate({left: (12.85 * j) + "vw"});

            }
            setTimeout(function () {
                document.getElementById("cat9").style.visibility = "hidden";
            }, 500);
        }
        else if(window.getComputedStyle(document.getElementById("cat8")).opacity !== "0") {
            document.getElementById("cat3").style.visibility = "visible";

            $("#cat8").animate({left: "51.4vw", opacity: 0});
            $("#cat3").animate({left: 0, opacity: 1});
            for(let i = 3, j = 0; i < 8; i++, j++) {
                $("#cat" + i).animate({left: (12.85 * j) + "vw"});

            }
            setTimeout(function () {
                document.getElementById("cat8").style.visibility = "hidden";
            }, 500);
        }
        else if(window.getComputedStyle(document.getElementById("cat7")).opacity !== "0") {
            document.getElementById("cat2").style.visibility = "visible";

            $("#cat7").animate({left: "51.4vw", opacity: 0});
            $("#cat2").animate({left: 0, opacity: 1});
            for(let i = 2, j = 0; i < 7; i++, j++) {
                $("#cat" + i).animate({left: (12.85 * j) + "vw"});

            }
            setTimeout(function () {
                document.getElementById("cat7").style.visibility = "hidden";
            }, 500);
        }
        else if(window.getComputedStyle(document.getElementById("cat6")).opacity !== "0") {
            document.getElementById("cat1").style.visibility = "visible";

            $("#cat6").animate({left: "51.4vw", opacity: 0});
            $("#cat1").animate({left: 0, opacity: 1});
            for(let i = 1, j = 0; i < 6; i++, j++) {
                $("#cat" + i).animate({left: (12.85 * j) + "vw"});

            }
            setTimeout(function () {
                document.getElementById("cat6").style.visibility = "hidden";
            }, 500);
        }

        let but = this;
        setTimeout(function () {but.style.pointerEvents = 'auto';}, 750);
    });
});

(() => {
    window.addEventListener('scroll', function () {
        if(window.scrollX > 0)
            window.scrollTo(0, window.scrollY);
    });
    window.addEventListener('resize', function () {
        if(window.scrollX > 0)
            window.scrollTo(0, window.scrollY);
    });
})();