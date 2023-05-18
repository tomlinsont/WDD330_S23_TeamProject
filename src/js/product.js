import { getParam, loadHeaderFooter } from './utils.mjs';
import productDetails from './productDetails.mjs';
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const productId = getParam('product');

productDetails(productId);
loadHeaderFooter();
