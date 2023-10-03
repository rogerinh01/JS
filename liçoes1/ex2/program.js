import prompt from 'prompt-sync'
let ler = prompt();

import { mult } from './compra.js'
import { desconto } from './compra.js'

console.log('informe a quantidade de camisas de R$25 vc comprou')
let camisa = Number(ler())

let x = mult(camisa)
let z = desconto(x) 

console.log(' o valor total da compra é ' + x + ' e com o desconto de 15% ficou ' + z)