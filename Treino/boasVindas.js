import prompt from 'prompt-sync'
let ler = prompt();


console.log('Olá, qual seu nome?');
let pessoa = ler();

console.log('Qual cidade você mora?');
let cidade = ler();


console.log('\n \nSeja bem vindo ' + pessoa + '!!');
console.log('Espero que ai em ' + cidade + ' esteja um tempo ótimo')




