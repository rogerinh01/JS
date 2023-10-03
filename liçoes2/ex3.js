import prompt from 'prompt-sync'
let ler= prompt();

console.log('numero1:')
let n1 = Number(ler())

console.log('numero2:')
let n2 = Number(ler())


console.log('numero3:')
let n3 = Number(ler())

let x = dobro(n1)

let z = dobro(n2)

let y = dobro(n3)

console.log('o dobro do 1° é ' + x + ' \no dobro do 2° é ' + z + '\no dobro do 3° é ' + y  )

function dobro (a){
  let x = a * 2;
  return x;
}
