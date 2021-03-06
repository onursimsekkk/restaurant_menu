const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

const buttons = document.querySelector('.btn-box');
const foodCards = document.querySelector('.main');

// *** Add Event Listeners ***
// Add buttons to UI
document.addEventListener('DOMContentLoaded', () => {
  let allBtn = document.createElement('button');
  allBtn.appendChild(document.createTextNode("All"));
  allBtn.className = "btn btn-outline-dark food-btn all"
  buttons.appendChild(allBtn);

  let koreaBtn = document.createElement('button');
  koreaBtn.appendChild(document.createTextNode("Korea"));
  koreaBtn.className = "btn btn-outline-dark food-btn korea"
  buttons.appendChild(koreaBtn);

  let jpnBtn = document.createElement('button');
  jpnBtn.appendChild(document.createTextNode("Japan"));
  jpnBtn.className = "btn btn-outline-dark food-btn japan"
  buttons.appendChild(jpnBtn);

  let chinaBtn = document.createElement('button');
  chinaBtn.appendChild(document.createTextNode("China"));
  chinaBtn.className = "btn btn-outline-dark food-btn china"
  buttons.appendChild(chinaBtn);

  // Sayfa a????ld??????nda "All" (??r??nlerin hepsini) y??kleme
  menu.map((item) => foodCards.innerHTML += `
    <div class="card shadow p-3 mb-5 bg-white rounded" style="width: 18rem;">
    <img src="${item.img}">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text">${item.desc}</p>
      <a href="#" class="btn btn-secondary btn-sm">${item.price}</a>
    </div>
    </div>`
    );
});

// All-Button's Event (Show Menu Event- Butona t??kland??????nda men??y?? getirme eventi)
buttons.addEventListener('click', showMenu);

// Buton ile men?? ??a????rma Fonksiyonu - showMenu()
function showMenu(e) {
  if(e.target.className.includes("all")) {
    foodCards.innerHTML = ""; // DOM un i??indeki itemlar?? bo??altma
    menu.map((item) => foodCards.innerHTML += `
    <div class="card shadow p-3 mb-5 bg-white rounded" style="width: 18rem;">
    <img src="${item.img}">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text">${item.desc}</p>
      <a href="#" class="btn btn-secondary btn-sm">${item.price}</a>
    </div>
    </div>`
    );
  }
  else if (e.target.className.includes("korea")) {
    foodCards.innerHTML = ""; // DOM un i??indeki itemlar?? bo??altma
    const koreaMenu = menu.filter(item => item.category === "Korea");
    koreaMenu.map(item => foodCards.innerHTML += `
    <div class="card shadow p-3 mb-5 bg-white rounded" style="width: 18rem;">
    <img src="${item.img}">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text">${item.desc}</p>
      <a href="#" class="btn btn-secondary btn-sm">${item.price}</a>
    </div>
    </div>`
    );
  }
  else if (e.target.className.includes("japan")) {
    foodCards.innerHTML = ""; // DOM un i??indeki itemlar?? bo??altma
    const koreaMenu = menu.filter(item => item.category === "Japan");
    koreaMenu.map(item => foodCards.innerHTML += `
    <div class="card shadow p-3 mb-5 bg-white rounded" style="width: 18rem;">
    <img src="${item.img}">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text">${item.desc}</p>
      <a href="#" class="btn btn-secondary btn-sm">${item.price}</a>
    </div>
    </div>`
    );
  }
  else if (e.target.className.includes("china")) {
    foodCards.innerHTML = ""; // DOM un i??indeki itemlar?? bo??altma
    const koreaMenu = menu.filter(item => item.category === "China");
    koreaMenu.map(item => foodCards.innerHTML += `
    <div class="card shadow p-3 mb-5 bg-white rounded" style="width: 18rem;">
    <img src="${item.img}">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text">${item.desc}</p>
      <a href="#" class="btn btn-secondary btn-sm">${item.price}</a>
    </div>
    </div>`
    );
  }
}

