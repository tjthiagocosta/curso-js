const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

function criaTarefa(textoInput) {
  console.log(textoInput);
}

btnTarefa.addEventListener("click", function () {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value)
});
