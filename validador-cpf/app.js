// '705.484.450.52'

function ValidaCPF(cpfRecebido) {
  Object.defineProperty(this, "cpfLimpo", {
    enumerable: true,
    get: function () {
      return cpfRecebido.replace(/\D+/g, "");
    },
  });
}
ValidaCPF.prototype.valida = function () {
  if (typeof this.cpfLimpo === undefined && this.cpfLimpo.length !== 11)
    return false;
  const cpfParcial = this.cpfLimpo.slice(0, -2);
  const primeiroDigito = this.criaDigito(cpfParcial);
  return true;
};
ValidaCPF.prototype.criaDigito = function (cpfParcial) {
  const cpfArray = Array.from(cpfParcial);
  const regressivo = cpfArray.length + 1;
};

const cpf = new ValidaCPF("705.484.450.52");
//cpf.valida();
console.log(cpf.valida());
