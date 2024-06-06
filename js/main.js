import { addEventListener } from './events.js';
import { getProducts } from './product.js'

window.onload = async (event) => {
  await addEventListener();
  await getProducts();
};






