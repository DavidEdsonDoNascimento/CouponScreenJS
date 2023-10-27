window.onload = (event) => {
  carregaDivProdutos();
};

const cuponsValidos = new Map();

cuponsValidos.set("BLACKFRIDAY25", "25% De Desconto");
cuponsValidos.set("OUTUBRO10", "10% De Desconto");
cuponsValidos.set("OLA5", "5% De Desconto");
cuponsValidos.set("BRASIL50", "50% De Desconto");
cuponsValidos.set("SUPER1", "1% De Desconto");

const categorias = [
  {
    id: 1,
    name: "Lanches",
  },
  {
    id: 2,
    name: "Bebidas",
  },
];

const produtos = [
  {
    id: 1,
    name: "Misto Quente",
    price: 5.99,
    categoryId: 1,
    img: "./imgs/misto.png",
  },
  { id: 2, name: "Cafe", price: 2.75, categoryId: 2, img: "./imgs/misto.png" },
  {
    id: 3,
    name: "Cafe c/ leite",
    price: 2.99,
    categoryId: 2,
    img: "./imgs/misto.png",
  },
  {
    id: 4,
    name: "Coca-Cola lata",
    price: 4.99,
    categoryId: 2,
    img: "./imgs/misto.png",
  },
  {
    id: 5,
    name: "Pao de queijo",
    price: 1.2,
    categoryId: 1,
    img: "./imgs/misto.png",
  },
];

const divMensagem = document.querySelector(".mensagem");
const divProdutos = document.querySelector(".produtos");

function carregaDivProdutos() {
  const ulProdutos = document.createElement("ul");

  for (const p of produtos) {
    const li = document.createElement("li");
    li.setAttribute("class", "produto-cartao");
    li.innerHTML = `
    <img src='${p.img}'>
    <div class='produto-labels'>
      <label class='produto-nome'>${p.name}</label>
      <label class='produto-preco'>R$ ${p.price
        .toFixed(2)
        .replace(".", ",")}</label>
      <button class='btn-add-produto'>+</button>
    </div>
    `;
    ulProdutos.appendChild(li);
  }

  divProdutos.appendChild(ulProdutos);
}

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

function mostraCupons() {
  const keys = cuponsValidos.keys();
  let msg = "CUPONS DISPONIVEIS: \n";
  for (const k of keys) {
    msg += `${k}\n`;
  }
  alert(msg);
}
