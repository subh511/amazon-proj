//const cart = [];

import { cart,addToCart } from "../data/cart.js";
import { products } from "../data/products.js";


let productHTML = "";

products.map((product) => {
  //accumulator pattern;
  productHTML += `
          <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary add-to-cart-btn" data-product-id="${
            product.id
          }">
            Add to Cart
          </button>
        </div>
  `;
  //console.log(html);
});
//console.log(productHTML);

let displayedContent = document.getElementById("js-product-container");
displayedContent.innerHTML = productHTML;

function updateCartQuantity(){
  let cartQuantity = 0;

  cart.forEach((cartItem)=>{
    cartQuantity += cartItem.quantity;
  })

  document.getElementById('js-cart-quantity')
  .innerHTML = cartQuantity;
}

let displayCartItem = document.querySelectorAll(".add-to-cart-btn")
displayCartItem.forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;

    addToCart(productId);
    updateCartQuantity();
});
});