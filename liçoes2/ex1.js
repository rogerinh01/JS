import prompt from 'prompt-sync'
let ler= prompt();

console.log(' me informe dois numeros')

let n1 = Number(ler())
let n2 = Number(ler())
let sub = subtração (n1, n2)

console.log(sub)

function subtração (a, b) {  

    let sub = a - b
    return  sub
}

