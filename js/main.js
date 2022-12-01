const elHeroList = document.querySelector(".hero__list");
const elBookList = document.querySelector(".book__list");
const elForm = document.querySelector(".hero__form");
const elInput = document.querySelector(".hero__input");
const elSelect = document.querySelector(".book__select");
const elHeroBtn = document.querySelector(".hero__btn");
const headerBtn = document.querySelector(".header__btn");

elSelect.classList.add("button");
document.querySelector(".button").disabled = true;

let data = [];
let storeList = [];

elForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (elInput.value && elInput.value.length < 15) {
    data.push({ name: elInput.value, id: Math.round(Math.random() * 1000) });
    document.querySelector(".button").disabled = false;
    elHeroBtn.classList.add("btn__disabled");
    document.querySelector(".btn__disabled").disabled = true;
    elInput.value = "";
    render();
  } else {
    alert("You username must be less than 20 Plese try again!!!");
  }
});

function render() {
  elHeroList.innerHTML = "";
  data.forEach((el) => {
    let createLi = document.createElement("li");
    createLi.className = "hero__item";
    createLi.id = el.id;
    createLi.innerHTML = `
        <h2 class="hero__title">NAME:${el.name}</h2>
        <h3 class="hero__subtitle">ID:${el.id}</h3>
        `;
    elHeroList.appendChild(createLi);
  });
}

const allMenu = [
  {
    id: 1,
    img: "./img/burger.webp",
    foodName: "Burger",
    count: 0,
    price: 0,
  },
  {
    id: 2,
    img: "./img/lavash.webp",
    foodName: "Lavash",
    count: 0,
    price: 0,
  },
  {
    id: 3,
    img: "./img/pitsa.webp",
    foodName: "Pizza",
    count: 0,
    price: 0,
  },
  {
    id: 5,
    img: "./img/danar.webp",
    foodName: "Donar",
    count: 0,
    price: 0,
  },
  {
    id: 4,
    img: "./img/sendvich.webp",
    foodName: "Sendwich",
    count: 0,
    price: 0,
  },
];

function menuFood(foods) {
  let newArr = [];
  for (let i of foods) {
    if (!newArr.includes(i)) {
      newArr.push(i);
    }
  }

  return newArr;
}

function renderSelect(allfoods) {
  let fastfood = "";
  for (let i of allfoods) {
    fastfood += `
    <option value="${i.foodName}">${i.foodName}</option>
    `;
  }
  elSelect.innerHTML += fastfood;
}

renderSelect(menuFood(allMenu));

elSelect.addEventListener("click", (evt) => {
  function renderFood(meals) {
    let mealsResult = "";

    for (let x of meals) {
      mealsResult += `
  
      <li class="book__item">
        <img class="book__img" src="${x.img}" alt="burger" />
        <h2 class="book__title">${x.foodName}</h2>
        <h3 class="book__price">${x.price}$ </h3>
        <button class="book__minus">-</button>
        <span class="book__count">${x.count}</span>
        <button class="book__add">+</button>
        <button class="book__remove">Delete</button>
      </li>
      
      `;
    }

    elBookList.innerHTML = mealsResult;
  }

  renderFood(allMenu);
  let optValue = evt.target.value;

  let getFoods = allMenu.filter((food) => {
    return food.foodName.includes(optValue);
  });

  renderFood(getFoods);
});

elBookList.addEventListener("click", (m) => {
  if (m.target.className === "book__add") {
    function renderCount(o) {
      for (let i of o) {
        elBookList.innerHTML = `
          <li class="book__item">
          <img class="book__img" src="${i.img}" alt="burger" />
          <h2 class="book__title">${i.foodName}</h2>
          <h3 class="book__price">${(i.price += 3)}$ </h3>
          <button class="book__minus">-</button>
          <span class="book__count">${(i.count += 1)}</span>
          <button class="book__add">+</button>
          <button class="book__remove">Delete</button>
        </li>
          `;
      }
    }

    renderCount(allMenu);
  }
  if (m.target.className === "book__minus") {
    for (let i of allMenu) {
      if (i.count > 0 && i.price > 0) {
        elBookList.innerHTML = ` 
          <li class="book__item">
          <img class="book__img" src="${i.img}" alt="burger" />
          <h2 class="book__title">${i.foodName}</h2>
          <h3 class="book__price">${(i.price -= 3)}$ </h3>
          <button class="book__minus">-</button>
          <span class="book__count">${(i.count -= 1)}</span>
          <button class="book__add">+</button>
          <button class="book__remove">Delete</button>
        </li>
          `;
      }
    }
  }
  if (m.target.className === "book__remove") {
    for (let i of allMenu) {
      elBookList.innerHTML = ` 
          <li class="book__item">
          <img class="book__img" src="${i.img}" alt="burger" />
          <h2 class="book__title">${i.foodName}</h2>
          <h3 class="book__price">${(i.price = 0)}$ </h3>
          <button class="book__minus">-</button>
          <span class="book__count">${(i.count = 0)}</span>
          <button class="book__add">+</button>
          <button class="book__remove">Delete</button>
        </li>
          `;
      const getItem = document.querySelector(".book__item");
      getItem.remove();
    }
  }
});

headerBtn.addEventListener("click", (e) => {});
