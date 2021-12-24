//Codigo del cuadrado
console.group("Cuadrado")
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado +" cm");

function perimetroCuadrado(lado){
    return lado*4;
}  
//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");

function areaCuadrado (lado) {
    return lado*lado;
}
//console.log("El área del cuadrado es : " + areaCuadrado + " cm^2");
console.groupEnd();

//Codigo del Triangulo
console.group("Triangulo");
// const trianduloL1 = 6;
// const trianduloL2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
function perimetroTriangulo(lado1,lado2,base){
   return lado1 + lado2 + base;
} 
function areaTriangulo(base,altura){
   return  base*altura/2;
} 

/* console.log(
    "Los lados del tríangulo miden: "
    + " lado uno "
    + trianduloL1
    + " cm, lado dos "
    + trianduloL2
    + "cm, base "
    + baseTriangulo
    + " cm."
); */

/* console.log(
    "La altura del triangulo es: " + alturaTriangulo + "  cm"
);

console.log(
    "El perimetro del triangulo es: " + perimetroTriangulo + " cm"
);
console.log(
    "El Area del triangulo es: " + areaTriangulo + " cm^2"
); */

console.groupEnd();

//Circulo 
console.group("Circulo");

// const radioCirculo = 4;
// const diametroCirculo = 2*radioCirculo;
 const PI = Math.PI;

function perimetroCirculo(radio){
    return 2*radio*PI;
}
function areaCirculo(radio){
    return PI*radio*radio;
}
// console.log("El radio del circulo es: " + radioCirculo + " CM");
// console.log("El area del circulo es: " + areaCirculo + " CM");
// console.log("El perimetro del circulo es: " + perimetroCirculo + " CM^2");
// console.log("Pi es : " + PI );
console.groupEnd();

// Agregando interaccion con HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro)

}
function calcularAreaCuadrado(){

    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area)
}

function calcularAreaRectangulo(){

    const input1 = document.getElementById("InputRectanguloL1");
    const l1= input1.value;
    const input2= document.getElementById("InputRectanguloL2");
    const l2= input2.value;
    const area = l2*l1;
    alert(area);
}
function calcularPerimetroRectangulo(){
    const l1 = document.getElementById("InputRectanguloL1").value;
    const l2 = document.getElementById("InputRectanguloL2").value;
    const perimetro =2*l1+2*l2;
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const base = document.getElementById("InputTrianguloB").value;
    const altura = document.getElementById("InputTrianguloH").value;
    const area = base*altura/2;
    alert(area);

}
function calculaPerimetroTriangulo(){
    const base =Number(document.getElementById("InputTrianguloB").value);
    const l1 = Number(document.getElementById("InputTrianguloL1").value);
    const l2 = Number(document.getElementById("InputTrianguloL2").value);
    
    const perimetro = base + l1 + l2;
    alert(perimetro);
}
function calcularPerimetroCirculo(){
    const radio = Number(document.getElementById("InputCirculo").value);
    const perimetro = 2*PI*radio;
}
function calcularAreaCirculo(){
    const radio = Number(document.getElementById("InputCirculo").value);
    const perimetro = PI*radio*radio;

}