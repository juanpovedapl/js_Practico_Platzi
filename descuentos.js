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