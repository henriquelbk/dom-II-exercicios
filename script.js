// Exercício 1 e 2
const butao = document.getElementById('botao')

const adicionaItem = (event) => {
    const container = document.getElementById('container')

    const item = '<article class="item" onclick="removeItem(event)"></article>'
    container.innerHTML += item
}

//Exercício 3

const removeItem = (event) => {
    event.target.remove()
}