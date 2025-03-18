let amigosLista = []
let amigo = document.getElementById('amigo')

function agregarAmigo() {
    const regex = /^[A-Za-z\s]+$/;
    if (amigo.value === "") {
        alert("Por favor, inserte un nombre.");
    } else if (!regex.test(amigo.value)) {
        alert("Por favor, inserte solo letras.");
    } else {
        amigosLista.push(amigo.value);
        amigo.value = "";
        mostrarAmigos();
    }
}

function mostrarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos')
    listaAmigos.innerHTML = ""
    for (let i = 0; i < amigosLista.length; i++) {
        let li = document.createElement('li')
        li.textContent = amigosLista[i]
        listaAmigos.appendChild(li)
    }
}

function sortearAmigo() {
    if (amigosLista.length === 0) {
        alert("No hay amigos para sortear.")
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigosLista.length)
        let amigoSorteado = amigosLista[indiceAleatorio]
        let resultado = document.getElementById('resultado')
        resultado.innerHTML = amigoSorteado
    }
}

function limpiarLista() {
    amigosLista = [];
    document.getElementById('listaAmigos').innerHTML = "";
    document.getElementById('resultado').innerHTML = "";
    amigo.value = "";
}

