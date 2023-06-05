import { getLocalStorage, renderListWithTemplate } from "./utils.mjs";

export default function ShoppingCart() {
  const cartItems = getLocalStorage("so-cart");
  const outputEl = document.querySelector(".product-list");
  renderListWithTemplate(cartItemTemplate, outputEl, cartItems);
  itemsInCart();
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Images.PrimaryMedium}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

function itemsInCart() {
  const numInCart = getCalcNumCartItems();

  showNumberOfCartItems(numInCart);

}

// calcuates number of items in cart
function getCalcNumCartItems() {
  const cartItems = getLocalStorage("so-cart");
  console.log("cart items: ", cartItems);

  let numberInCart = cartItems.length;

  return numberInCart;
}

function showNumberOfCartItems(items) {
  console.log("Total Items: ", items);

  if (items >= 1) {
  let el = document.getElementById("numberOfItems");
  el.classList.add("cart_numOfItems"); 
  document.getElementById("total_items_in_cart").innerHTML = items;
  }
}


