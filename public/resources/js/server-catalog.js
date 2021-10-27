window.onload = function () {
    checkErrors();

    $.ajax({
        url: 'https://vne-ocheredi.herokuapp.com' + '/products?' +
            window.location.search.replace( '?', ''),
        type: 'get',
        success: function (data, textStatus, request) {
            if(data.length < 5) {
                getNewPage(data, true);
            }
            else {
                for (let i = 0; i < data.length; i++){
                    printProduct(data[i])
                }
                setAddedCounters();
            }
        }
    });

    document.addEventListener("wheel", function(e) {
        document.getElementById('catalog-box').scrollTo(0,
            document.getElementById('catalog-box').scrollTop + e.deltaY);
    }, true);
}

let pageCounter = 1;

function getNewPage(oldData) {
    pageCounter++;

    $.ajax({
        url: 'https://vne-ocheredi.herokuapp.com' + '/products?' +
            'page=' + pageCounter + "&"
            + window.location.search.replace( '?', ''),
        type: 'get',
        success: function (data, textStatus, request) {
            let newData = oldData.concat(data)

            if(newData.length < 5) {
                getNewPage(newData);
                return;
            }

            for (let i = 0; i < newData.length; i++){
                printProduct(newData[i]);
                setAddedCounters();
            }

            if(newData.length < 15) {
                getNewPage([]);
            }
        }
    });
}

let timer;

function throttle(callee, timeout) {
    if (timer) return;

    timer = setTimeout(() => {
        callee();

        clearTimeout(timer);
        timer = null;
    }, timeout);

}

async function checkPosition() {
    const height = document.getElementById('catalog-box').scrollHeight;
    const screenHeight = document.getElementById('catalog-box').offsetHeight;
    const scrolled = document.getElementById('catalog-box').scrollTop;

    const threshold = height - screenHeight / 16;
    const position = scrolled + screenHeight;

    if (position >= threshold) {
        getNewPage([]);
    }
}

$(function () {
    $(".catalog-box").scroll(function () {
        throttle(checkPosition, 1500);
    }).resize(function () {
        throttle(checkPosition, 1500)
    });
});