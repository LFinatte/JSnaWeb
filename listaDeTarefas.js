const criarTarefa = (evento) => {

//previne que a pagina recarrague devido ao form
    evento.preventDefault()

//selecionando lista
    const lista = document.querySelector('[data-lista]')

//seleciona o input
    const input = document.querySelector('[data-form-input]')

//define variavel para armazenar o input
    const valor = input.value 

//criando a lista
    const tarefa = document.createElement('li')
    tarefa.classList.add(('task'))

//criar template
    const conteudo = `<p class = "content"> ${valor}</p>`

//une o documento html com js - faz aparecer o input na lista
    tarefa.innerHTML = conteudo

//adicionar um eemento filho dentro de um elemento pai
    lista.appendChild(tarefa)

    input.value = " "


}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)