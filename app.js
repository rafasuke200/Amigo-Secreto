//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];



function adicionarAmigo() {
    let novoAmigo = document.getElementById('amigo').value;
    amigos.push(novoAmigo);
    console.log(amigos);
}