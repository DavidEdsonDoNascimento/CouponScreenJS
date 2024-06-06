import { products } from '../data/products.js';

export const getProducts = async () => {
  const divProdutos = document.querySelector(".produtos-lista");

  const ulProdutos = document.createElement("ul");

  for (const p of products) {
    const li = document.createElement("li");
    li.setAttribute("class", "produto-cartao");
    li.setAttribute("data-id", p.id);
    li.setAttribute("data-qtt", p.currentQtt);
    li.innerHTML = `
    <div class='box-img'>
      <img src='${p.img}' class='produto-img'>
    </div>
    <div class='produto-labels'>
      <label class='produto-nome'>${p.name}</label>
      <label class='produto-preco'>R$ ${p.price
        .toFixed(2)
        .replace(".", ",")}</label>
        ${p.currentQtt ? `<button class='btn-rem-produto'>-</button>` : ''} 
      ${p.currentQtt ? `<span>${p.currentQtt}</span>` : ''} 
      <button class='btn-add-produto'>+</button>
    </div>
    `;
    ulProdutos.appendChild(li);
  }

  divProdutos.appendChild(ulProdutos);
}