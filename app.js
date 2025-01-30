//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

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

function exibirListaDeAmigos() {
    let listaDeAmigos = document.getElementById('listaAmigos'); // Obtém a referência da lista no HTML
    listaDeAmigos.innerHTML = ''; // Limpa a lista antes de adicionar novos itens

    for (let indiceAmigo = 0; indiceAmigo < amigos.length; indiceAmigo++) { // Percorre a lista de amigos
        let itemDaLista = document.createElement('li'); // Cria um elemento de lista <li>
        itemDaLista.textContent = amigos[indiceAmigo]; // Define o nome do amigo dentro do <li>
        listaDeAmigos.appendChild(itemDaLista); // Adiciona o <li> à lista visível no HTML
    }
}

function sortearAmigo() {
    // Verifica se há amigos no array
    if (amigos.length === 0) {
        alert("Não há amigos para sortear! Adicione pelo menos um amigo.");
        return; // Se o array estiver vazio, interrompe a função
    }

    // Gera um índice aleatório entre 0 e o tamanho do array amigos - 1
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtemos o nome do amigo sorteado utilizando o índice aleatório
    let amigoSorteado = amigos[indiceAleatorio];

    // Atualiza o conteúdo da lista de resultados para exibir o nome do amigo sorteado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}

function limparLista() {
    // Limpar o array de amigos
    amigos = [];
    
    // Limpar o conteúdo da lista de amigos no HTML
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    // Limpar o conteúdo do resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    
    // Opcional: Mensagem de confirmação (para feedback ao usuário)
    alert("Lista limpa com sucesso!");
}


