import productDetails from "./productDetails.mjs";
import cartContents from "./productDetails.mjs";
// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}

export function renderListWithTemplate(
  templateFn,
  parentElement,
  list,
  position = "afterbegin",
  clear = true
) {
  if (clear) {
    parentElement.innerHTML = "";
  }
  const htmlString = list.map(templateFn);
  parentElement.insertAdjacentHTML(position, htmlString.join(""));
}

export async function renderWithTemplate(
  template,
  parentElement,
  data,
  callback,
  position = "afterbegin",
  clear = true
) {
  if (clear) {
    parentElement.innerHTML = "";
  }
  const htmlString = await template(data);
  
  parentElement.insertAdjacentHTML(position, htmlString);
  if (callback) {
    callback(data);
  }
}

function loadTemplate(path) {
  // wait what?  we are returning a new function? 
  // this is called currying and can be very helpful.
  return async function () {
      const res = await fetch(path);
      if (res.ok) {
      const html = await res.text();
      return html;
      }
  };
} 

export async function loadHeaderFooter() {
  const headerTemplate = await loadTemplate("/partials/header.html");
  const footerTemplate = await loadTemplate("/partials/footer.html");
  const headerEl = document.querySelector("#main-header");
  const footerEl = document.querySelector("#main-footer");
  await renderWithTemplate(headerTemplate, headerEl);
  await renderWithTemplate(footerTemplate, footerEl);
}


function totalProduct() {
//   //Get array from localstorage
  let cart = getLocalStorage("so-cart");
  let getItem = JSON.parse(localStorage.getItem("Id"));

    //[ {id:"dsa`l;fkjsadf", count:1}, ]
   if(!cart) {
     cart = [];
     cart.push(getItem);
      console.log(cart);    
   }
    // update count
 // let count = 0;
  // for each
  //   for(let i=0; i < cart.length; i++){ 
  //     count = count + 1
  //     console.log(count);
  //  }
   
}

  totalProduct();
    
   // //get the element to update

  //  let allProducts = JSON.stringify(count);
  //  // //update element text
  //   const countProducts= document.querySelector("#countproducts")
  //   countProducts.innerText = allProducts;
  
 
 

 
 
  



