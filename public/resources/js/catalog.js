function printProduct(data) {
    let id = data["id"];

    let product = document.getElementById("product-box").cloneNode(true);
    product.id = "product-box-" + id;
    product.style.visibility = "visible";

    let imgBackground = product.childNodes[1].childNodes[1];
    let img = imgBackground.childNodes[1];
    let name = product.childNodes[1].childNodes[5];
    let price = product.childNodes[1].childNodes[7];

    let counterBox = product.childNodes[1].childNodes[9];
    let minus = counterBox.childNodes[1];
    let counter = counterBox.childNodes[3];
    let plus = counterBox.childNodes[5];

    let button = product.childNodes[1].childNodes[11];

    imgBackground.id = "product-img-background-" + id;
    img.id = "product-img-" + id;
    name.id = "product-name-" + id;
    price.id = "product-price-" + id;

    counterBox.id = "product-counter-box-" + id;
    minus.id = "product-button-minus-" + id;
    counter.id = "product-counter-" + id;
    plus.id = "product-button-plus-" + id;

    button.id = "product-button-" + id;

    name.textContent = data["name"];
    price.textContent = data["price"];
    img.src = data["image"];

    document.getElementById("catalog-box").appendChild(product);
}

function setAddedCounters() {
    let products = getCookie("basket_products").split("&");
    products.pop();

    for(let i = 0; i < products.length; i++) {
        let id = products[i].split(".,")[3];

        for(let j = 0; j < document.getElementById("catalog-box").childNodes.length; j++) {
            let product = document.getElementById("catalog-box").childNodes[j];

            if(product.id !== undefined && product.id.endsWith("-" + id)) {
                let counter = document.getElementById("product-counter-" + id);

                if(counter.textContent === "0") {
                    document.getElementById("product-counter-box-" + id).style.visibility = "visible";
                    $("#product-counter-box-" + id).animate({opacity: 1});
                }

                counter.textContent = (Number(counter.textContent) + 1).toString();
            }
        }
    }
}

$(function () {
    $('body').on('click', '.product-button', function () {
        let id = this.id.split('-')[2];
        let counter = document.getElementById("product-counter-" + id);

        if(counter.textContent === "0") {
            document.getElementById("product-counter-box-" + id).style.visibility = "visible";
            $("#product-counter-box-" + id).animate({opacity: 1});
        }

        counter.textContent = (Number(counter.textContent) + 1).toString();

        addProduct(id, "");
    });

    $('body').on('click', '.product-button-plus', function () {
        let id = this.id.split('-')[3];
        let counter = document.getElementById("product-counter-" + id);

        counter.textContent = (Number(counter.textContent) + 1).toString();
        addProduct(id, "");
    });

    $('body').on('click', '.product-button-minus', function () {
        let id = this.id.split('-')[3];
        let counter = document.getElementById("product-counter-" + id);

        counter.textContent = (Number(counter.textContent) - 1).toString();

        deleteProduct(id, "");

        if(counter.textContent === "0") {
            $("#product-counter-box-" + id).animate({opacity: 0});
            setTimeout(function () {document.getElementById("product-counter-box-" + id).style.visibility = "hidden"},
                200);
        }
    });
})
