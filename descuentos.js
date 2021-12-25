function nuevoPrecio(precio,porcentaje){
    const nuevoPrecio = precio*(1-porcentaje/100);
    return nuevoPrecio;
}

//Integrando con javaScript

function calcularNuevoPrecio(){
    const precio = Number(document.getElementById("InputCosto").value);
    const descuento = Number(document.getElementById("InputDescuento").value);
    const nPrecio = nuevoPrecio(precio,descuento);
    const rPrecio = document.getElementById("redultadoPrecio");
    rPrecio.innerText = "El precio con descuento  es " + nPrecio;
}   

function nuevoPrecioxCupon(){
    const coupons =[
        "Cumple",
        "ClienteFiel",
        "Gold"
    ];
    const couponValue = document.getElementById("InputCupon").value;
    
    let descuentoCupon = 200;
    switch(couponValue){
        case coupons[0]:
            descuentoCupon = 15;
        break;
        case coupons[1]:
            descuentoCupon=30;
        break;
        case coupons[2]:
            descuentoCupon=25;
        break;
    }
    const precio = Number(document.getElementById("InputCosto").value);
    const nPrecio = nuevoPrecio(precio,descuentoCupon);
    const precioCupon = document.getElementById("redultadoCupon");
    precioCupon.innerText = "El descuento apllicado fue " + couponValue + " y el precio con descuento es: $" + nPrecio;

}