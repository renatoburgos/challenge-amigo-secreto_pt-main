let amigos = []; //Array para armazenamento dos nomes

function adicionarAmigo() {

const inputAmigo = document.getElementById("amigo");
const nome = inputAmigo.value.trim();


if (nome === "") {
    alert("Nome invalido! Por favor digite um nome");
    return;
}

amigos.push(nome);

atualizarListaDeAmigos();

inputAmigo.value = "";
}

// Função para atualizar a lista de amigos
function atualizarListaDeAmigos() {
    const listaAmigosElemento = document.getElementById("listaAmigos");
    listaAmigosElemento.innerHTML = "";

    amigos.forEach(amigo => {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaAmigosElemento.appendChild(itemLista);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione um nome antes de sortear!');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `<li>O amigo secreto sorteado é: ${amigoSorteado}</li>`;


}


