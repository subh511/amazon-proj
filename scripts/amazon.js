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

          <button class="add-to-cart-button button-primary add-to-cart-btn" data-product-name="${
            product.name
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


document.querySelectorAll('.add-to-cart-btn')
.forEach((button)=>{
  button.addEventListener('click',()=>{
    //console.log('Added!')
    //1st part;
    let productName = button.dataset.productName;

    let machingItem;
    
    cart.forEach((item)=>{
      if(productName === item.productName){

      }
    })

    //2nd part;
    cart.push({
      productName: productName,
      quantity:1
    });
    console.log(cart)
  })
})

//---------code---------;

// let displayedContent = document.getElementById("js-product-container");
// displayedContent.innerHTML = productHTML;

// let displayCartItem = document.querySelectorAll(".add-to-cart-btn")
// displayCartItem.forEach((button) => {
//   button.addEventListener("click", () => {
//     const productId = button.dataset.productId;

//     let machingItem;

//     cart.forEach((item) => {
//       if (productId === item.productId) {
//         machingItem = item;
//       }
//     });

//     if (machingItem) {
//       machingItem.quantity += 1;
//     } else {
//       cart.push({
//         productId: productId,
//         quantity: 1,
//       });
//     }

//     let cartQuantity = 0;

//     cart.forEach((item)=>{
//       cartQuantity += item.quantity;
//     })

//     document.getElementById('js-cart-quantity')
//     .innerHTML = cartQuantity;
//   });
// });
