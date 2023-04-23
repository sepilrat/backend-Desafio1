const notas =[[10,5,2],[1,2,4], 6,7]
const aplanado =notas.flat();
console.log (aplanado);

const total = aplanado.reduce((parcial,nota) => parcial + nota, 0);
const promedio = total / aplanado.length;
console.log (promedio);