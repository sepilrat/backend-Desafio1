//sirve para acumular
let array1= [10,10,10,5];

let notasSumadas = array1.reduce((subtotal, item) => subtotal + item, 0);
console.log(notasSumadas);
//0 es del numero en que arranco, a medida que va iterando el valor se carga en item, y al subtotal se le va sumando el item 