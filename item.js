const search = window.location.search;
console.log(search);
const params = new URLSearchParams(search);
console.log(params);
let id = params.get("id");
console.log(id);

const data = JSON.parse(localStorage.getItem("data"));

function renderDetail() {
  for (let item of data) {
    if (item.id == id) {
      console.log(item);
      img_top = "";
      img_child = "";
      for (let key in item.img_child) {
        img = item.img_child[key];
        img_top += `
                <img src="${img}">
                `;
        img_child += `
        <div class = "img-item">
        <a href = "#" data-id = "${parseInt(key) + 1}">
          <img src="${img}" alt = "shoe image">
        </a>
      </div>`;
      }
      let card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
              <!-- card left -->
              <div class = "product-imgs">
                <div class = "img-display">
                  <div class = "img-showcase">
                    ${img_top}
                  </div>
                </div>
                <div class = "img-select">
                    ${img_child}
                </div>
              </div>
              <!-- card right -->
              <div class = "product-content">
                <h2 class = "product-title">${item.name}</h2>
                <a href = "#" class = "product-link">visit nike store</a>
                <div class = "product-rating">
                  <i class = "fas fa-star"></i>
                  <i class = "fas fa-star"></i>
                  <i class = "fas fa-star"></i>
                  <i class = "fas fa-star"></i>
                  <i class = "fas fa-star-half-alt"></i>
                  <span>4.7(21)</span>
                </div>
      
                <div class = "product-price">
                  <p class = "last-price">Old Price: <span>$${item.oldPrice}</span></p>
                  <p class = "new-price">New Price: <span>$${item.newPrice}</span></p>
                </div>
      
                <div class = "product-detail">
                  <h2>about this item: </h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
                  <ul>
                    <li>Color: <span>multiple</span></li>
                    <li>Available: <span>in stock</span></li>
                    <li>Category: <span>Shoes</span></li>
                    <li>Shipping Area: <span>All over the world</span></li>
                    <li>Shipping Fee: <span>Free</span></li>
                  </ul>
                </div>
      
                <div class = "purchase-info">
                  <input type = "number" min = "0" value = "1" id="productCount">
                  <button type = "button" class = "btn" onClick="addToCart(${item.id})">
                    Add to Cart <i class = "fas fa-shopping-cart"></i>
                  </button>
                  <button type = "button" class = "btn">Compare</button>
                </div>
      
                <div class = "social-links">
                  <p>Share At: </p>
                  <a href = "#">
                    <i class = "fab fa-facebook-f"></i>
                  </a>
                  <a href = "#">
                    <i class = "fab fa-twitter"></i>
                  </a>
                  <a href = "#">
                    <i class = "fab fa-instagram"></i>
                  </a>
                  <a href = "#">
                    <i class = "fab fa-whatsapp"></i>
                  </a>
                  <a href = "#">
                    <i class = "fab fa-pinterest"></i>
                  </a>
                </div>
              </div>
          `;
      document.getElementById("renderDetail").appendChild(card);
    }
  }
}

renderDetail();

const imgs = document.querySelectorAll(".img-select a");
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
  imgItem.addEventListener("click", (event) => {
    event.preventDefault();
    imgId = imgItem.dataset.id;
    slideImage();
  });
});

function slideImage() {
  const displayWidth = document.querySelector(
    ".img-showcase img:first-child"
  ).clientWidth;
  document.querySelector(".img-showcase").style.transform = `translateX(${
    -(imgId - 1) * displayWidth
  }px)`;
}
window.addEventListener("resize", slideImage);

const addToCart = (id) => {
    let item = data.find(x => x.id === id);
    let cart = localStorage.getItem("cart");
    amount = parseInt(document.getElementById("productCount").value);
    cart = JSON.parse(cart);
    if (cart == null) {
      cart = [
        {
          product: item,
          quantity: amount,
        },
      ];
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      for (product_item of cart) {
        if (product_item.product.id == item.id) {
          product_item.quantity += amount;
          localStorage.setItem("cart", JSON.stringify(cart));
          return;
        }
      }
      cart.push({
        product: item,
        quantity: amount,
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };
  
