$(document).ready(function () {
    $("#save").click(function() {
        event.preventDefault();

        let idE = $("#id").val();
        let nameE = $("#name").val();
        let addressE = $("#address").val();
        let mobileE = $("#mobile").val();

        console.log(idE);
        console.log(nameE);
        console.log(addressE);
        console.log(mobileE);

        const customerData = {
            id:idE,
            name:nameE,
            address:addressE,
            mobile:mobileE
        };
        
        console.log(customerData)

        const customerJSON = JSON.stringify(customerData)
        console.log(customerJSON)

        $.ajax({
            url: "http://localhost:8080/customer",
            type: "POST",
            data: customerJSON,
            headers: { "Content-Type": "application/json" },
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

        let idE = $("#id").val();

        console.log(idE);

        const customerData = {
            id: idE,
        };

        console.log(customerData);

        const customerJSON = JSON.stringify(customerData);
        console.log(customerJSON);

        $.ajax({
            url: "http://localhost:8080/customer?c_id=" + idE,
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

        let idE = $("#id").val();
        let nameE = $("#name").val();
        let addressE = $("#address").val();
        let mobileE = $("#mobile").val();

        console.log(idE);
        console.log(nameE);
        console.log(addressE);
        console.log(mobileE);

        const customerData = {
            id:idE,
            name:nameE,
            address:addressE,
            mobile:mobileE
        };

        console.log(customerData)

        const customerJSON = JSON.stringify(customerData)
        console.log(customerJSON)

        $.ajax({
            url: "http://localhost:8080/customer?c_id="+idE,
            type: "PUT",
            data: customerJSON,
            headers: { "Content-Type": "application/json" },
            success: (res) => {
                console.log(JSON.stringify(res));
            },
            error: (res) => {
                console.error(res);
            }
        })
    })

    //////////////////////////////////Clear/////////////////////////////////////////
    $("#clear").click(function() {
        clearFields()
    })
})

function clearFields() {
    document.getElementById('id').value = '';
    document.getElementById('name').value = '';
    document.getElementById('address').value = '';
    document.getElementById('mobile').value = '';
}