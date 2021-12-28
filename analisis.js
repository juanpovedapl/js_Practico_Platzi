//Helpers

function esPar (numero){
    return (numero%2 ===0);
}

//Calculadora de mediana 

function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2);
    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad-1];
        const personaMitad2 = lista[mitad];

        const mediana = calculoMediaAritmetica([personaMitad1,personaMitad2]);
        return  mediana;
    }
    else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}
// Calculadora de media Aritmetica 

function calculoMediaAritmetica(lista){
    const sumaLista =lista.reduce(
        function(acum = 0, nuevoElemento ){
          return acum + nuevoElemento;
        }
    )
    const promedioLista = sumaLista/lista.length;
    return promedioLista;
}
// Lista de salarios en colombia
const salariosCol = colombia.map(
    function (persona){
        return persona.salary
    }
)
//Lista organizada de menor a mayor de salarios de colombia 

const salariosColSorted = salariosCol.sort(
    function(salarioMayor , salarioMenor){
        return salarioMayor-salarioMenor;
    }
)
//Mediana del top 10 % del salario en colombia 
const spliceStart = (salariosColSorted.length*(0.9));
const spliceCount = salariosColSorted.length-spliceStart;
const salariosColTop10 = salariosColSorted.splice(spliceStart,spliceCount);
// Calculando mediana general del salario en colombia

const medianaGeneralSalarioCol = medianaSalarios(salariosColSorted);
const medianaTopSalarioCol = medianaSalarios(salariosColTop10);

console.log(
    {
        medianaGeneralSalarioCol,
        medianaTopSalarioCol
        
    }
)