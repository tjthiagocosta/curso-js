
// Calculadora criada com Factory Function para exercitar os conceitos aprendidos no curso.

function criaCalculadora() {
  return {
    display: document.querySelector(".display"),
    btnClear: document.querySelector(".btn-clear"),

    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    pressionaEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    },

    realizaConta() {
      let operacao = this.display.value;

      try {
        operacao = eval(operacao);

        if (!operacao) {
          alert("Conta inválida");
          return;
        }

        this.display.value = operacao;
      } catch (e) {
        alert("Conta inválida");
        return;
      }
    },

    clearDisplay() {
      this.display.value = "";
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    cliqueBotoes() {
      document.addEventListener("click", (event) => {
        const elementoClicado = event.target;

        if (elementoClicado.classList.contains("btn-num")) {
          this.btnParaDisplay(elementoClicado.innerText);
        }
        if (elementoClicado.classList.contains("btn-clear")) {
          this.clearDisplay();
        }
        if (elementoClicado.classList.contains("btn-del")) {
          this.apagaUm();
        }
        if (elementoClicado.classList.contains("btn-igual")) {
          this.realizaConta();
        }
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
