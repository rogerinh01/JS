import prompt from 'prompt-sync';
let ler = prompt();

console.log('Me informe quantas unidades de açaí você comprou');
let acai = Number(ler());

let resultado = acai * 13.5;

console.log(`Na compra de ${acai} açaís você irá pagar R$${resultado}`)