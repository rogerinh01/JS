import prompt from 'prompt-sync'
let ler = prompt();

import { temp } from './temp.js'

console.log('informe a temperatura')
let tem = ler();

let aa = temp(tem)

console.log(aa)