const cart = JSON.parse(localStorage.getItem("cart"));

function renderCart() {
  let cartContainer = document.getElementById("render-cart");
  let total = 0;
  let totalQuantity = 0;
  for (let item of cart) {
    let product = item.product;
    let quantity = item.quantity;
    total += product.newPrice * quantity;
    totalQuantity += quantity;
    let cartItem = document.createElement("div");
    cartItem.classList.add("item");
    cartItem.innerHTML = `
    <img  width="auto" height="auto" src="${product.img}">
    <div class="info">
        <div class="name">${product.name}</div>
        <div class="price">$${product.newPrice}/product</div>
    </div>
    <div class="quantity">${quantity}</div>
    <div class="returnPrice">$${product.newPrice * quantity}</div>`;
    cartContainer.appendChild(cartItem);
  }
  document.getElementById("totalPrice").innerText = `$${total}`;
    document.getElementById("totalQuantity").innerText = totalQuantity;
}
renderCart();

document.getElementById("buttonCheckout").addEventListener("click", function () {
  localStorage.removeItem("cart");
  document.getElementById("totalPrice").innerText = `$0`;
  document.getElementById("totalQuantity").innerText = 0;
  alert("Thank you for your purchase!");
  window.location.reload();
});



