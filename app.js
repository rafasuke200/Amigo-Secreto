//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// let amigos = [];


// function adicionarAmigo() {
//     let novoAmigo = document.getElementById('amigo').value;
//     if (novoAmigo != '') {
//         amigos.push(novoAmigo);
//         console.log(amigos);
//         limparCampoDeNovoAmigo();
//     }
//     if (novoAmigo == '') {
//         alert(" Digite um nome de amigo válido!");
//     }
// }

// function limparCampoDeNovoAmigo() {
//     novoAmigo = document.getElementById('amigo');
//     novoAmigo.value = '';

// }
// function atualizarLista() {
    
// }

let amigos = [];

function adicionarAmigo() {
    let novoAmigo = document.getElementById('amigo').value;
    
    if (novoAmigo !== '') {  // Verifica se o nome não está vazio
        amigos.push(novoAmigo); // Adiciona o nome ao array
        exibirListaDeAmigos(); // Chama a função para exibir os amigos na tela
        limparCampoDeNovoAmigo();
        console.log(amigos);
    } else {
        alert("Digite um nome de amigo válido!");
    }
}

function limparCampoDeNovoAmigo() {
    document.getElementById('amigo').value = ''; // Limpa o campo de entrada
}

// Função melhorada com nomes mais descritivos
function exibirListaDeAmigos() {
    let listaDeAmigos = document.getElementById('listaAmigos'); // Obtém a referência da lista no HTML
    listaDeAmigos.innerHTML = ''; // Limpa a lista antes de adicionar novos itens

    for (let indiceAmigo = 0; indiceAmigo < amigos.length; indiceAmigo++) { // Percorre a lista de amigos
        let itemDaLista = document.createElement('li'); // Cria um elemento de lista <li>
        itemDaLista.textContent = amigos[indiceAmigo]; // Define o nome do amigo dentro do <li>
        listaDeAmigos.appendChild(itemDaLista); // Adiciona o <li> à lista visível no HTML
    }
}



