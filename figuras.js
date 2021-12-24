//Codigo del cuadrado
console.group("Cuadrado")

function perimetroCuadrado(lado){
    return lado*4;
}  

function areaCuadrado (lado) {
    return lado*lado;
}

//Codigo del Rectangulo
console.group("Rectangulo");

function perimetroRectangulo(lado1,lado2){
   return lado1*2 + lado2*2;
} 
function areaRectangulo(base,altura){
   return  base*altura;
} 

console.groupEnd();

console.groupEnd();

//Codigo del Triangulo
console.group("Triangulo");

function perimetroTriangulo(lado1,lado2,base){
   return lado1 + lado2 + base;
} 
function areaTriangulo(base,altura){
   return  base*altura/2;
} 

console.groupEnd();

//Circulo 
console.group("Circulo");
 const PI = Math.PI;

function perimetroCirculo(radio){
    return 2*radio*PI;
}
function areaCirculo(radio){
    return PI*radio*radio;
}

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
    const area = areaRectangulo(l1,l2)
    alert(area);
}
function calcularPerimetroRectangulo(){
    const l1 = document.getElementById("InputRectanguloL1").value;
    const l2 = document.getElementById("InputRectanguloL2").value;
    const perimetro = perimetroRectangulo(l1,l2);
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const base = document.getElementById("InputTrianguloB").value;
    const altura = document.getElementById("InputTrianguloH").value;
    const area = areaTriangulo(base,altura);
    alert(area);

}
function calculaPerimetroTriangulo(){
    const base =Number(document.getElementById("InputTrianguloB").value);
    const l1 = Number(document.getElementById("InputTrianguloL1").value);
    const l2 = Number(document.getElementById("InputTrianguloL2").value);
    
    const perimetro = perimetroTriangulo(base,l1,l2);
    alert(perimetro);
}
function calcularPerimetroCirculo(){
    const radio = Number(document.getElementById("InputCirculo").value);
    const perimetro = perimetroCirculo(radio);
}
function calcularAreaCirculo(){
    const radio = Number(document.getElementById("InputCirculo").value);
    const perimetro = areaTriangulo(radio);

}