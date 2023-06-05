import { loadHeaderFooter } from './utils.mjs';
import ShoppingCart from './shoppingCart.mjs';

loadHeaderFooter()
.then(res => ShoppingCart());
