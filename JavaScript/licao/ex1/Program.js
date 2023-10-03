import { dobro } from './Dobro.js'
import prompt from 'prompt-sync'
let ler = prompt();

console.log('Me informe um número para que eu possa calcular o dobro:');
let n1 = Number(ler());

let x = dobro(n1)

console.log(`O dobro de ${n1} será ${x}`)