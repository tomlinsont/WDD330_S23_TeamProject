import { getData } from "./productData.mjs";
import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
    return `<li class="product-card">
    <a href="product_pages/index.html?product=">
      <img
        src=""
        alt="Image of "
      />
      <h3 class="card__brand"></h3>
      <h2 class="card__name"></h2>
      <p class="product-card__price">$</p></a
    >
  </li>`;
}

export default async function productList(selector, category) {

    // get the element we will insert the list into from the selector
    const elem = document.querySelector(selector);

    // get the list of products
    const products = await getData(category); 

    // render out the product list to the element
    renderListWithTemplate(productCardTemplate, el, products);
}