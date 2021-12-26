
const lista1 = [
    100,
    200,
    300,
    500,
];

function esPar(numero){
    if (numero % 2 === 0){
        return true;
    }
    else {
        return false;
    }
}
function calMediana (lista){
    if (esPar(lista.length)){
     
    }
    else
    {

    }
}
function  CalMediaAritmetica (lista){
    //let sum = 0;
    // for (var elemento of lista){
    //     sum = sum + elemento;
    // }
    const sum = lista.reduce(
        function(valorAcum = 0, elemento){
            return valorAcum + elemento;
        }
    ); 
    const promedio = sum/lista.length;
    return promedio;
    
}

