let array1 =[1,2,3];
let array2 = [3,4,5];

let array3=[...array1] //crea una copia de un array
let array4 =[...array1, ...array2];

console.log (array4);

const persona = {
    nombre: "Ricardo",
    edad:20,
};

const otrosDatos = {
    cel: "1111143434",
    dni:20,
};

const objetoCompleto = [...persona, ...otrosDatos];
console.log(objetoCompleto);