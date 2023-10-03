import { total } from './amazon.js'
import prompt from 'prompt-sync'
let ler = prompt();

console.log('Me informe o valor total da venda:')
let venda = Number(ler());

console.log('Me informe a taxa total de juros:')
let juros = Number(ler());

let x = total(venda, juros)

console.log(`O valor total será ${x}`)