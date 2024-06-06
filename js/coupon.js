import { cuponsValidos } from '../data/coupon.js';

export const showCoupons = async () => {
  const keys = cuponsValidos.keys();
  let msg = "CUPONS DISPONIVEIS: \n";
  for (const k of keys) {
    msg += `${k}\n`;
  }
  alert(msg);
}
export const applyCoupon = async () => {
  const divMensagem = document.querySelector(".mensagem");

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