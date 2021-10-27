$(function () {
    $(".header-basket").click(function () {
        document.getElementById("overlay").style.visibility = "visible";
        document.getElementById("basket-box").style.visibility = "visible";

        fillBasket();
    });

    $(".header-basket-img").click(function (){
        document.getElementById("overlay").style.visibility = "visible";
        document.getElementById("basket-box").style.visibility = "visible";

        $(".basket-box").animate({bottom: 0});
        setTimeout(function () {document.getElementById("basket-box").style.bottom = "0";}, 500);

        fillBasket();
    });

    $("#basket-close").click(function () {
        if(document.getElementById("basket-box").style.bottom === "0px") {
            $(".basket-box").animate({bottom: "-100vh"});
        }

        setTimeout(function () {
            document.getElementById("overlay").style.visibility = "hidden";
            document.getElementById("basket-box").style.visibility = "hidden";
        }, 500);
    });

    $("#basket-close-second").click(function () {
        document.getElementById("basket-first").style.visibility = "inherit";
        document.getElementById("basket-second").style.visibility = "hidden";
        document.getElementById("overlay").style.visibility = "hidden";
        document.getElementById("basket-box").style.visibility = "hidden";
    });

    $(".button-clear").click(function () {
        document.cookie = "added_products=0";
        document.cookie = "basket_products=";

        clearBasketBox();
        clearCatalogCounters();
    });

    $("#button-basket-next").click(function () {
        document.getElementById("basket-first").style.visibility = "hidden";
        document.getElementById("basket-second").style.visibility = "inherit";
    });

    $("#basket-button-back").click(function () {
        document.getElementById("basket-first").style.visibility = "inherit";
        document.getElementById("basket-second").style.visibility = "hidden";
    });

    $('body').on('click', '.basket-product-button-plus', function () {
        let id = this.id.split('-')[4];
        let counter = document.getElementById("basket-product-counter-" + id);
        let counterCatalog = document.getElementById("product-counter-" + id);
        let newCounter = Number(counter.textContent) + 1;

        counter.textContent = (newCounter).toString();
        if(counterCatalog !== undefined)
            counterCatalog.textContent = (newCounter).toString()
        addProduct(id, "basket-");
    });

    $('body').on('click', '.basket-product-button-minus', function () {
        let id = this.id.split('-')[4];
        let counter = document.getElementById("basket-product-counter-" + id);
        let counterCatalog = document.getElementById("product-counter-" + id);
        let newCounter = Number(counter.textContent) - 1;

        counter.textContent = (newCounter).toString();
        if(counterCatalog !== undefined)
            counterCatalog.textContent = (newCounter).toString();

        deleteProduct(id, "basket-");

        if(counter.textContent === "0") {
            document.getElementById("basket-products-box").removeChild(document.getElementById("basket-product-" + id));
            if(document.getElementById("product-counter-box-" + id) !== undefined)
                document.getElementById("product-counter-box-" + id).style.visibility = "hidden";
        }
    });
});

function fillBasket() {
    let products = getCookie("basket_products").split("&");
    products.pop();

    clearBasketBox();

    for(let i = 0; i < products.length; i++) {
        let productString = products[i];
        let counter = 1;

        for(let j = i + 1; j < products.length; j++) {
            if(productString === products[j]) {
                deleteElement(products, j);
                counter++;
                j--;
            }
        }

        products[i] = productString + ".," + counter;
    }

    for(let i = 0; i < products.length; i++) {
        let productString = products[i].split(".,");
        let nameStr = productString[0];
        let priceStr = productString[1];
        let imgStr = productString[2];
        let idStr = productString[3];
        let counterStr = productString[4];

        let product = document.getElementById("basket-product").cloneNode(true);
        product.id = "basket-product-" + idStr;
        product.style.visibility = "inherit";

        let imgBackground = product.childNodes[1];

        let img = imgBackground.childNodes[1];
        let name = product.childNodes[3];

        let counterBox = product.childNodes[5];
        let minus = counterBox.childNodes[1];
        let counter = counterBox.childNodes[3];
        let plus = counterBox.childNodes[5];

        let price = product.childNodes[7];


        imgBackground.id = "basket-product-img-background-" + idStr;
        img.id = "basket-product-img-" + idStr;
        name.id = "basket-product-name-" + idStr;
        price.id = "basket-product-price-" + idStr;

        counterBox.id = "basket-product-counter-box-" + idStr;
        minus.id = "basket-product-button-minus-" + idStr;
        counter.id = "basket-product-counter-" + idStr;
        plus.id = "basket-product-button-plus-" + idStr;

        name.textContent = nameStr;
        price.textContent = priceStr;
        counter.textContent = counterStr;
        img.src = imgStr;

        document.getElementById("basket-products-box").appendChild(product);
    }
}


function addProduct(id, b) {
    let price = document.getElementById(b + "product-price-" + id).textContent;
    let name = document.getElementById(b + "product-name-" + id).textContent;
    let img = document.getElementById(b + "product-img-" + id).src;

    console.log(document.getElementById(b + "product-img-" + id).src)
    let productString = name + ".," + price + ".," + img + ".," + id;

    console.log(productString.split(".,")[0])

    document.cookie = "basket_products=" + getCookie("basket_products") + productString + "&";
}

function deleteProduct(id, b) {
    let name = document.getElementById(b + "product-name-" + id).textContent;
    let price = document.getElementById(b + "product-price-" + id).textContent;
    let img = document.getElementById(b + "product-img-" + id).src;
    let productString = name + ".," + price + ".," + img + ".," + id;

    let products = getCookie("basket_products").split("&");
    products.pop();

    for(let i = 0; i < products.length; i++) {
        if(products[i] === productString) {
            deleteElement(products, i)
            break;
        }
    }

    document.cookie = "added_products=" + (Number(getCookie("added_products")) - 1);
    document.cookie = "basket_products=";

    for(i = 0; i < products.length; i++) {
        document.cookie = "basket_products=" + getCookie("basket_products") +
            products[i] + "&";
    }
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function deleteElement(elements, num) {
    for(var i = num; i < elements.length - 1; i++) {
        elements[i] = elements[i + 1];
    }

    elements.pop();

    return elements;
}

function clearCatalogCounters() {
    for(let j = 0; j < document.getElementById("catalog-box").childNodes.length; j++) {
        let product = document.getElementById("catalog-box").childNodes[j];

        if(product.id === undefined)
            continue;

        let id = product.id.split("-")[2];

        document.getElementById("product-counter-" + id).textContent = "0";
        document.getElementById("product-counter-box-" + id).style.visibility = "hidden";
    }
}

function clearBasketBox() {
    var myNode = document.getElementById("basket-products-box");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}
