window.onload = function () {
    checkErrors();
}

$(function (){
    $(".header-login").click(function () {
        visionLoginBox();
    });

    $("#login-close").click(function () {
        document.getElementById("overlay").style.visibility = "hidden";
        document.getElementById("login-form-box").style.visibility = "hidden";

        clearErrors();
        checkErrorsHref();
    });

    $(".login-sign-up").click(function () {
        visionSignUp();
        clearErrors();
    });

    $(".login-sign-in").click(function () {
        if(window.innerWidth > 1300) {
            $(".login-form-box").animate({width: "30vw", height: "40vw", marginLeft: "-15vw", top: "7vw"});
            $(".login-sign-in").animate({left: "3.65vw"});
            $(".login-sign-up").animate({left: "8.5vw"});
            $(".login-line-under").animate({left: "3.65vw"});
        }
        else {
            $(".login-form-box").animate({height: "70vh"});
            $(".login-line-under").animate({left: "12vw"});
            $(".button-login").animate({top: "60vh"})
        }

        $(".form-sign-up").animate({opacity: 0});

        setTimeout(function () {
            document.getElementById("form-sign-in").style.visibility = "inherit";
            document.getElementById("form-sign-up").style.visibility = "hidden";

            $(".form-sign-in").animate({opacity: 1});
        }, 400);

        clearErrors();
    });

    $('#login-reg').on('input invalid', function() {
        this.setCustomValidity('')
        if (this.validity.valueMissing) {
            this.setCustomValidity("Поле не должно быть пустым")
        }
        if (this.validity.patternMismatch) {
            this.setCustomValidity("Логин должен начинаться с буквы и содержать от 5 до 20 латинских символов или цифр")
        }
    })

    $('#password-reg').on('input invalid', function() {
        this.setCustomValidity('')
        if (this.validity.valueMissing) {
            this.setCustomValidity("Поле не должно быть пустым")
        }
        if (this.validity.patternMismatch) {
            this.setCustomValidity("Пароль должен состоять минимум из 8 латинских символов, цифр или .")
        }
    })
});

function visionLoginBox() {
    document.getElementById("overlay").style.visibility = "visible";
    document.getElementById("login-form-box").style.visibility = "visible";
}

function visionSignUp() {
    if(window.innerWidth > 1300) {
        $(".login-form-box").animate({width: "36vw", height: "45vw", marginLeft: "-18vw", top: "4.5vw"});
        $(".login-sign-in").animate({left: "6.65vw"});
        $(".login-sign-up").animate({left: "11.5vw"});
        $(".login-line-under").animate({left: "11.5vw"});
    }
    else {
        $(".login-form-box").animate({height: "80vh"});
        $(".login-line-under").animate({left: "25vw"});
        $(".button-login").animate({top: "73.5vh"})
    }

    $(".form-sign-in").animate({opacity: 0});

    setTimeout(function () {
        document.getElementById("form-sign-in").style.visibility = "hidden";
        document.getElementById("form-sign-up").style.visibility = "inherit";

        $(".form-sign-up").animate({opacity: 1});
    }, 400);
}

function checkErrors() {
    let params = window.location.search.replace('?', '').split("&");

    if(params.length > 0) {
        for (let i = 0; i < params.length; i++) {
            let param = params[i].split("=");

            if(param[0] === "token") {
                document.cookie = "token=" + param[1];
                window.location.href = "index.html";
                continue;
            }

            if(param[0] === "error") {
                if (param[1] === "login") {
                    visionLoginBox();
                    document.getElementById("login-error-text").textContent = "Неверный логин или пароль";
                    continue;
                }

                if (param[1] === "user") {
                    visionLoginBox();
                    visionSignUp();
                    document.getElementById("signup-error-text").textContent = "Такой логин уже зарегистрирован";
                    continue;
                }

                if (param[1] === "mail") {
                    visionLoginBox();
                    visionSignUp();
                    document.getElementById("signup-error-text").textContent = "Такой email уже зарегистрирован";
                    continue;
                }

                if (param[1] === "number") {
                    visionLoginBox();
                    visionSignUp();
                    document.getElementById("signup-error-text").textContent = "Такой телефон уже зарегистрирован";
                    continue;
                }

                if (param[1] === "confirm") {
                    visionLoginBox();
                    visionSignUp();
                    document.getElementById("signup-error-text").textContent = "Пароли не совпадают";
                }
            }
        }
    }
}

function checkErrorsHref() {
    let params = window.location.search.replace('?', '').split("&");

    if(params.length > 0) {
        for (let i = 0; i < params.length; i++) {
            let param = params[i].split("=");

            if(param[0] === "error") {
                let newUrl = window.location.href.replace(param[0] + "=" + param[1], "");
                if(newUrl.endsWith("?"))
                    newUrl = newUrl.replace("?", "");

                window.location.href = newUrl;
            }
        }
    }
}

function clearErrors() {
    document.getElementById("login-error-text").textContent = "";
    document.getElementById("signup-error-text").textContent = "";
}