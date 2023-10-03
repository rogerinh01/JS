import { q } from './legal.js'
import prompt from 'prompt-sync'
let ler = prompt()

console.log('Me informe a quantidade de pontos:')
let pontos = Number(ler());

q(pontos)

