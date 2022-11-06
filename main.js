const cuponsValidos = new Map();
cuponsValidos.set("RAILOIRA", "25% De Desconto");
cuponsValidos.set("DAVIDGATAO", "10% De Desconto");
cuponsValidos.set("AFONSOBUZIOS", "5% De Desconto");
cuponsValidos.set("CUDEPEIXE", "50% De Desconto");
cuponsValidos.set("AFONSIO", "1% De Desconto");
console.log(cuponsValidos);

const divMensagem = document.querySelector('.mensagem');

function aplicarCupom() {
  const cupomtxt = document.querySelector("#cupomtxt").value;

  console.log(cupomtxt);

  const cupomTxtMaiusculo = cupomtxt.toUpperCase();

  console.log(cupomTxtMaiusculo);

  const informacoesCupom = cuponsValidos.get(cupomTxtMaiusculo);

  if (!informacoesCupom) {
    divMensagem.innerHTML = `<p style="color:red">NÃO É UM CUPOM VALIDO</p>`;
    return;
  }

  divMensagem.innerHTML = `<p style="color:green">CUPOM DE ${informacoesCupom.toUpperCase()} APLICADO EM SUA COMPRA!</p>`;
}
