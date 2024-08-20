$(document).ready(function () {
    $("#save").click(function () {
        event.preventDefault();

        let codeE = $("#code").val();
        let descE = $("#desc").val();
        let qtyE = $("#qty").val();
        let priceE = $("#price").val();

        console.log(codeE);
        console.log(descE);
        console.log(qtyE);
        console.log(priceE);

        const itemData = {
            code: codeE,
            description: descE,
            qty: qtyE,
            price: priceE
        };

        console.log(itemData)

        const itemJSON = JSON.stringify(itemData)
        console.log(itemJSON)

        $.ajax({
            url: "http://localhost:8080/item",
            type: "POST",
            data: itemJSON,
            headers: {"Content-Type": "application/json"},
            success: (res) => {
                console.log(JSON.stringify(res));
            },
            error: (res) => {
                console.error(res);
            }
        })
    })

    ///////////////////////////////////////Delete/////////////////////////////////////////////
    $("#delete").click(function(event) {
        event.preventDefault();

        let codeE = $("#code").val();

        console.log(codeE);

        const itemData = {
            code: codeE,
        };

        console.log(itemData);

        const itemJSON = JSON.stringify(itemData);
        console.log(itemJSON);

        $.ajax({
            url: "http://localhost:8080/item?code=" + codeE,
            type: "DELETE",
            headers: { "Content-Type": "application/json" },
            success: (res) => {
                console.log(JSON.stringify(res));
            },
            error: (res) => {
                console.error(res);
            }
        });
    });

    /////////////////////////////////////Update///////////////////////////////////////////
    $("#update").click(function() {
        event.preventDefault();

        let codeE = $("#code").val();
        let descE = $("#desc").val();
        let qtyE = $("#qty").val();
        let priceE = $("#price").val();

        console.log(codeE);
        console.log(descE);
        console.log(qtyE);
        console.log(priceE);

        const itemData = {
            code: codeE,
            description: descE,
            qty: qtyE,
            price: priceE
        };

        console.log(itemData)

        const itemJSON = JSON.stringify(itemData)
        console.log(itemJSON)

        $.ajax({
            url: "http://localhost:8080/item?code="+codeE,
            type: "PUT",
            data: itemJSON,
            headers: { "Content-Type": "application/json" },
            success: (res) => {
                console.log(JSON.stringify(res));
            },
            error: (res) => {
                console.error(res);
            }
        })
    })
})