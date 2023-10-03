const button = document.querySelector('.task_botao')
const input = document.querySelector('.input_task')
const listaCompleta = document.querySelector('.lista_task')

let minhaListaDeItens = []

function adicionarNovaTarefa(){
      minhaListaDeItens.push(input.value)

      input.value = '';

      mostrarTarefas();
}

function mostrarTarefas(){

    let novaLi = '' 

    minhaListaDeItens.forEach((task, posicao) => {

        novaLi = novaLi + `
             <li class="task">
                 <p >${task} </p>
                 <i id="lixo" class="fas fa-trash" onclick="deletarItem(${posicao} )" ></i>
             </li>
        `

    })

    listaCompleta.innerHTML = novaLi;

    
}


function deletarItem(posicao){

    minhaListaDeItens.splice(posicao, 1)

    mostrarTarefas();

}


button.addEventListener('click', adicionarNovaTarefa)