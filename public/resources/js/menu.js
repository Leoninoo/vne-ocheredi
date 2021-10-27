$(function() {
    $(".header-menu-icon").click(function () {
        if(document.getElementById("overlay").style.visibility !== "visible") {
            console.log("ASDADADA")

            document.getElementById("overlay").style.visibility = "visible";

            $(".header-menu-first").animate({top: "2vw"}).rotate({animateTo:45});
            $(".header-menu-second").animate({opacity: 0}, 200);
            $(".header-menu-third").animate({top: "2vw"}).rotate({animateTo:-45});

            $(".menu-box").animate({left: "-40vw"}, 100, 'linear', function(){
                $(".menu-box").animate({left: 0});
                $('.header-menu-icon').animate({left: '48vw'});
            });
        }
        else {
            awayMenu();
        }
    });

    $(".menu-login").click(function () {
        awayMenu();

        setTimeout(function (){ visionLoginBox() }, 500)
    })
});

function awayMenu() {
    document.getElementById("overlay").style.visibility = "hidden";

    $(".header-menu-first").animate({top: 0}).rotate({animateTo:0});
    $(".header-menu-second").animate({opacity: 1}, 300);
    $(".header-menu-third").animate({top: "4vw"}).rotate({animateTo:0});

    $('.header-menu-icon').animate({left: '8vw'});
    $(".menu-box").animate({left: "-40vw"}, function (){
        $(".menu-box").animate({left: "-60vw"}, 200, 'linear');
    });
}