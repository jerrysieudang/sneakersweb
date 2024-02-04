var dataNav = [{
    name: "Adidas",
    icon_1: "adidas/adidas.svg",
    icon_2: "adidas/adidas-fill.svg",
    children:[
        {
            
        }
    ]
},{
    id: 1,
    name: "Nike",
    icon_1: "nike/nike.svg",
    icon_2: "nike/nike-fill.svg",
    children:[
        {
            
        }
    ]
},{
    id: 2,
    name: "Converse",
    icon_1: "converse/converse.svg",
    icon_2: "converse/converse-fill.svg",
    children:[
        {
            
        }
    ]
},{
    id: 3,
    name: "Louis Vuitton",
    icon_1: "LouisVuitton/LV.svg",
    icon_2: "LouisVuitton/LV-fill.svg",
    children:[
        {
            
        }
    ]
},{
    id: 4,
    name: "Gucci",
    icon_1: "/gucci/gucci.svg",
    icon_2: "gucci/gucci-fill.svg",
    children:[
        {
            
        }
    ]
}]

 function renderNav(){
    for (let item of dataNav) {
        let card = document.createElement("li");
        card.classList.add("nav-item");
        card.classList.add("iconChange");
        card.classList.add("me-4");
        card.classList.add("pt-2");
        card.innerHTML = ` <a href="index.html?type=${item.name}" class="nav-link text-center  p-0">
        <div class=" d-flex align-items-center overflow-hidden changeWidth mx-auto">
            <img class="one iconHeight mx-2" src="../icon/${item.icon_1}" alt="Nike">
            <img class="two iconHeight mx-2" src="../icon/${item.icon_2}"
                alt="Nike">
        </div>
        <div class="smallFont textColor">${item.name}</div>
    </a>`;
        document.getElementById("renderNav").appendChild(card);
      }
 }

 renderNav()