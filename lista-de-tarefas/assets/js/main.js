const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

// *** Functions ***

function criaLi() {
  const li = document.createElement("li");
  li.classList.add("item-tarefa");
  return li;
}
function criaBotaoApagar(listItem) {
  listItem.innerText += " ";
  const botaoApagar = document.createElement("button");
  botaoApagar.innerText = "Apagar";
  botaoApagar.setAttribute("class", "apagar-tarefa");
  botaoApagar.setAttribute("title", "Apagar esta tarefa");
  listItem.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
  const listItem = criaLi();
  listItem.innerText = textoInput;
  tarefas.appendChild(listItem);
  inputTarefa.value = null;
  limpaInput();
  criaBotaoApagar(listItem);
  salvarTarefas();
}
function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll(".item-tarefa");
  const listaDeTarefas = [];
  for (let tarefa of liTarefas) {
    listaDeTarefas.push(tarefa.innerText.replace(" Apagar", ""));
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem("tarefas", tarefasJSON);
}

function limpaInput() {
  inputTarefa.value = "";
  inputTarefa.focus();
}
function apagaTarefa(tarefa) {
  tarefa.parentElement.remove();
  salvarTarefas();
}

function carregaTarefasSalvas() {
  const tarefasSalvas = localStorage.getItem("tarefas");
  listaDeTarefas = JSON.parse(tarefasSalvas);
  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}
carregaTarefasSalvas()

// *** Event listener ***

btnTarefa.addEventListener("click", function () {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

inputTarefa.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});
document.addEventListener("click", function (event) {
  const elemento = event.target;
  if (elemento.classList.contains("apagar-tarefa")) {
    apagaTarefa(elemento);
  }
});
