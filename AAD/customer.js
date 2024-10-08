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
                successBanner.classList.remove('hidden');
                successBanner.style.display = 'block';
                setTimeout(function() {
                    successBanner.style.display = 'none';
                }, 3000);
            },
            error: (res) => {
                console.error(res);
                notSuccessBanner.classList.remove('hidden');
                notSuccessBanner.style.display = 'block';
                setTimeout(function() {
                    notSuccessBanner.style.display = 'none';
                }, 3000);
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
                deleteBanner.classList.remove('hidden');
                deleteBanner.style.display = 'block';
                setTimeout(function() {
                    deleteBanner.style.display = 'none';
                }, 3000);
            },
            error: (res) => {
                console.error(res);
                notSuccessBanner.classList.remove('hidden');
                notSuccessBanner.style.display = 'block';
                setTimeout(function() {
                    notSuccessBanner.style.display = 'none';
                }, 3000);
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
                successBannerUpdate.classList.remove('hidden');
                successBannerUpdate.style.display = 'block';
                setTimeout(function() {
                    successBannerUpdate.style.display = 'none';
                }, 3000);
            },
            error: (res) => {
                console.error(res);
                notSuccessBannerUpdate.classList.remove('hidden');
                notSuccessBannerUpdate.style.display = 'block';
                setTimeout(function() {
                    notSuccessBannerUpdate.style.display = 'none';
                }, 3000);
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

