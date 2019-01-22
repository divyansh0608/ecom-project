$(function () {
    let productName = $('#productName')
    let productManufacturer = $('#productManufacturer')
    let productPrice = $('#productPrice')
    let productimage=$('#productimage')
    $('#btnProductAdd').click(function () {

        addProduct(
            productName.val(),
            productManufacturer.val(),
            productPrice.val(),
            productimage.val(),
            function (addedProduct) {
                window.alert("Added " + addedProduct.name + " to Database")
            } 
        )


    })

})