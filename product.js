var data = [
    {
      type:"Nike",
      id: 1,
      name: "Jordan 1 Retro High Off-White Chicago",
      newPrice: 4000,
      oldPrice: 4000,
      img:"/img/jordan 1 high 1.jpg",
      content:`Thương hiệu: Nike

      Nhà thiết kế: Peter Moore

      Công nghệ: Air

      Màu sắc: WHITE/BLACK-VARSITY RED

      Kiểu dáng: giày bóng rổ

      Fit size: true to size hoặc up 0.5 size

      Mã sản phẩm: AA3834-101`,
    },
    {
      type:"Nike",
        id: 2,
        name: "Air Jordan 1 High Zoom Comfort ‘Easter’",
        newPrice:140,
        oldPrice: 131,
        img:"/img/jordan 1 high 2.jpg",
        content:`Ngày ra mắt: 19/08/2021

        Mã giày: CT0979-101
        
        Phối màu: WHITE/GREY HEATHER-OLIVE AURA-KHAKI
        
        Giá Retail: $140
        
        Nhà thiết kế: Peter Moore
        
        Thương hiệu: Air Jordan 1`,
      },
      {
        type:"Nike",
        id: 3,
        name: "Jordan 1 Retro High Dior",
        newPrice: 16000,
        oldPrice: 3000,
        img:"/img/jordan 1 high 3.jpg",
        content:`Mã giày: CN8607-002

        Phối màu: WOLF GREY/SAIL-PHOTON DUST-WHITE
        
        Giá retail: $2,000
        
        Nhà thiết kế: Peter Moore
        
        Ngày phát hành: 04/06/2020
        
        Thương hiệu: Nike
        
        Danh mục: Air Jordan 1`,
      },
      {
        type:"Nike",
        id: 4,
        name: "Nike Air Jordan 1 High Switch ‘Purple Pulse’",
        newPrice: 206,
        oldPrice: 239,
        img:"/img/jordan 1 high 4.jpg",
        content:`Mã giày: CW6576-500

        Phối màu: Purple Pulse/Glacier Blue/Sail/Black

        Giá Retail: 175$

        Phát Hành: Ngày 9 tháng 1 năm 2021

        Nhà thiết kế: Peter Moore

        Danh mục: Jordan 1 High`,
      },
      {
        type:"Nike",
        id: 5,
        name: "Jordan 1 High MM Coconut Milk",
        newPrice: 130,
        oldPrice: 114,
        img:"/img/jordan 1 high 2.jpg",
        content:``,
      },
  ]
  function renderProduct(){
    for (let item of data) {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `<img class="card-img-top" src="${item.img}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <h5 class="card-new-price">$${item.newPrice}</h5>
            <div class="card-flex">
                <p class="card-old-price">Last Sale: $${item.oldPrice}</p>
                <a href="#">
                    <button class="btn btn-primary">GO BUY</button>
                </a>
            </div>
        </div>`;
        document.getElementById("renderProduct").appendChild(card);
      }
 }

 renderProduct()