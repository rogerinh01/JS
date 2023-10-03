import prompt from 'prompt-sync';
let ler = prompt();

console.log('Me informe quantas unidades de açaís pequenos você comprou');
let pequeno = Number(ler());
let resultado = pequeno * 13.5;
console.log(`Na compra de ${pequeno} açais pequenos você pagara ${resultado}`);

console.log('Me informe quantas unidades de açaís medios você comprou');
let medio = Number(ler());
let resultado2 = medio * 15;
console.log(`Na compra de ${medio} açais pequenos você pagara ${resultado2}`);

console.log('Me informe quantas unidades de açaís grandes você comprou');
let grande = Number(ler());
let resultado3 = grande * 17.5;
console.log(`Na compra de ${grande} açais pequenos você pagara ${resultado3}`);


