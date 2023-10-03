import prompt from 'prompt-sync'
let ler = prompt();

import { media } from './media.js';

console.log('isso informará se você passou, OBS: nota min. 6')
console.log('informe suas notas')

let n1 = Number(ler())
let n2 = Number(ler())
let n3 = Number(ler())

let x = media (n1, n2, n3)

console.log(x)