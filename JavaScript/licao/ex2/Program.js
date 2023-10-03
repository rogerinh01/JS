import { triplo } from './Triplo.js'
import prompt from 'prompt-sync'
let ler = prompt();

console.log('Me informe um número para que eu possa calcular o triplo:');
let n1 = Number(ler());

let x = triplo(n1)

console.log(`O dobro de ${n1} será ${x}`)