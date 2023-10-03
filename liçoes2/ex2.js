import prompt from 'prompt-sync'
let ler= prompt();

console.log('esse programa calcula a media \n informe o tres notas')
let n1 = Number(ler())

let n2 = Number(ler())
let n3 = Number(ler())

let r = media(n1, n2, n3)

console.log(r)

function media(a, b, c) {
    let r = (a + b + c) / 3;

    return r.toFixed(1);
}