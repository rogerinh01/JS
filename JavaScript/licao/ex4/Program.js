import { lado } from './quadrado.js'
import prompt from 'prompt-sync'
let ler = prompt();

console.log('Me informe as medidas dos dois lados do Quadrado');
let m1 = Number(ler())
let m2 = Number(ler())

let x = lado(m1, m2);

console.log(`A area do quadrado será ${x}`);
