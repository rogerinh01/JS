import { primario } from './Cor.js'
import prompt from 'prompt-sync'
let ler = prompt();

console.log('Me informe a cor para saber se ela é primaria')
let cor = ler();

let x = primario(cor) 

console.log(x)

