// capturar os elementos dentro da div app;
let elementoInput = document.querySelector('#app input');
let elementoButton = document.querySelector('#app button');
let elementoUl = document.querySelector('#app ul');

let listas = JSON.parse(localStorage.getItem('lista_tarefas')) || [];

// let listas = [
//     'Vou pagar conta na lotérica',
//     'Estudar JS',
//     'Estudar DOM'
// ];

function mostrarListas(){
    elementoUl.innerHTML = '';
    for(lista of listas){
        // console.log(lista);
        let elementoLista = document.createElement('li');
        let textoLista = document.createTextNode(lista);

        let elementoLink = document.createElement('a');

        let posicao = listas.indexOf(lista);
        elementoLink.setAttribute('onclick', 'deletarLista('+posicao+')');

        elementoLink.setAttribute('href','#');
        let textoLink = document.createTextNode('Excluir');
        elementoLink.appendChild(textoLink);

        elementoLista.appendChild(textoLista);
        elementoLista.appendChild(elementoLink);
        elementoUl.appendChild(elementoLista);
    }
}

mostrarListas();

function adicionarLista(){
    if(elementoInput.value == ''){
        alert("Digite alguma tarefa!")
    }else{
        let textoLista = elementoInput.value;
        listas.push(textoLista);
        elementoInput.value = '';
        mostrarListas();
        salvarLista()
    }
}

elementoButton.onclick = adicionarLista;

function deletarLista(posicao){
    // alert('teste de delete');
    listas.splice(posicao , 1);
    mostrarListas();
    salvarLista()
}

function salvarLista(){
    localStorage.setItem('lista_tarefas',  JSON.stringify(listas));
}