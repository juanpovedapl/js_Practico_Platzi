
const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
    12,
    9,
    10,
    11,
    15

];
function ordenarListConSort(lista){
    const listOrdenada = lista.sort(
        function(a,b){
            return a-b;
        }
    )
    return listOrdenada;
}

function esPar(numero){
    if (numero % 2 === 0){
        return true;
    }
    else {
        return false;
    }
}
function calMediana (lista){
    lista = ordenarListConSort(lista);
    let mediana =0;
    if (esPar(lista.length)){
     const pos1= lista[parseInt(lista.length/2)-1];
     const pos2= lista[parseInt(lista.length/2)];
     console.log({
         pos1,
         pos2
     })
     mediana =CalMediaAritmetica([pos1,pos2]);
    }
    else
    {
    const pos1= lista[parseInt(lista.length/2)];
     mediana = pos1;
    }
    return mediana;
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
function calcularModa (list){
    
    const list1Count = {};
     
    list.map(
        function (elemento){
            if (list1Count[elemento]){
                list1Count[elemento] += 1;
            }
            else{
                list1Count[elemento] = 1;

            }
        }
    )
    const list1Arreglo = Object.entries(list1Count).sort(
        function(a,b){
            return  a[1]-b[1]
        }  
    )
    console.log(
        list1Count,
        {
         list1Arreglo
        });
}
function CalMediaGeometrica(list){
  
  const producto =  list.reduce(
       function(produc = 1,elemento){
        produc *= elemento; 
        return produc;
       }
   )
   const mediaGeometrica=Math.pow(producto,1/list.length);
   return mediaGeometrica;
}
    