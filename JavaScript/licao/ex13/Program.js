import { cinema } from './Ingresso.js'
import prompt from 'prompt-sync'
let ler = prompt()

console.log('Informe o qts ingressos meias e inteiras tu pegou');
let i = Number(ler())
let m = Number(ler())


let x = cinema(i, m)

console.log(`Para ${i} ingressos meia, o valor total é ${x}`)