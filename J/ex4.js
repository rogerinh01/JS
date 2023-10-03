import prompt from 'prompt-sync';
let ler = prompt();

console.log('Me informe o valor da compra');
let valor = Number(ler());

console.log('Me informe quantas vezes você parcelou');
let parcela = Number(ler());

let resultado = valor/parcela;

console.log(`Sua compra de ${valor} será dividida em ${parcela} parcelas de ${resultado}`); 
