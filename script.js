"use strict";

let PRODUCTS_ARR = [
  {
    id: "p1",
    name: "Huawei Mate S",
    image: "/img/phone-1.png",
    price: 280,
  },
  {
    id: "p2",
    name: "Sony Xperia Z5",
    image: "/img/phone-2.png",
    price: 550,
  },
  {
    id: "p3",
    name: "Xiaomi Mi 4i",
    image: "/img/phone-3.png",
    price: 350,
  },
  {
    id: "p4",
    name: "Huawei P20",
    image: "/img/phone-4.webp",
    price: 550,
  },
  {
    id: "p5",
    name: "Iphone 13",
    image: "/img/phone-5.png",
    price: 900,
  },
  {
    id: "p6",
    name: "Samsung Galaxy S22",
    image: "/img/phone-6.webp",
    price: 800,
  },
  {
    id: "p7",
    name: "Xiaomi Mi 5i",
    image: "/img/phone-3.png",
    price: 380,
  },
  {
    id: "p8",
    name: "Huawei P30",
    image: "/img/phone-4.webp",
    price: 600,
  },
  {
    id: "p9",
    name: "Sony Xperia Z10",
    image: "/img/phone-2.png",
    price: 650,
  },
  {
    id: "p10",
    name: "Huawei Mate 20",
    image: "/img/phone-1.png",
    price: 200,
  },
  {
    id: "p11",
    name: "Huawei P40",
    image: "/img/phone-4.webp",
    price: 550,
  },
  {
    id: "p12",
    name: "Xiaomi Redmi Note 8",
    image: "/img/phone-3.png",
    price: 300,
  },
  {
    id: "p13",
    name: "Samsung Galaxy S21",
    image: "/img/phone-6.webp",
    price: 700,
  },
  {
    id: "p14",
    name: "Iphone 12",
    image: "/img/phone-5.png",
    price: 800,
  },
  {
    id: "p15",
    name: "Xiaomi Mi 6i",
    image: "/img/phone-3.png",
    price: 400,
  },
  {
    id: "p16",
    name: "Huawei Mate 40 Pro",
    image: "/img/phone-4.webp",
    price: 700,
  },
  {
    id: "p17",
    name: "Iphone 11",
    image: "/img/phone-5.png",
    price: 700,
  },
  {
    id: "p18",
    name: "Huawei P20",
    image: "/img/phone-4.webp",
    price: 550,
  },
  {
    id: "p19",
    name: "Iphone X",
    image: "/img/phone-5.png",
    price: 600,
  },
  {
    id: "p20",
    name: "Samsung Galaxy S20",
    image: "/img/phone-6.webp",
    price: 700,
  },
  {
    id: "p21",
    name: "Xiaomi Mi 5i",
    image: "/img/phone-3.png",
    price: 380,
  },
  {
    id: "p22",
    name: "Huawei P30",
    image: "/img/phone-4.webp",
    price: 600,
  },
  {
    id: "p23",
    name: "Iphone XS",
    image: "/img/phone-5.png",
    price: 550,
  },
  {
    id: "p24",
    name: "Huawei Mate S",
    image: "/img/phone-1.png",
    price: 280,
  },
  {
    id: "p25",
    name: "Sony Xperia Z5",
    image: "/img/phone-2.png",
    price: 550,
  },
  {
    id: "p26",
    name: "Iphone 9",
    image: "/img/phone-5.png",
    price: 500,
  },
  {
    id: "p27",
    name: "Xiaomi Mi 4i",
    image: "/img/phone-3.png",
    price: 350,
  },
  {
    id: "p28",
    name: "Huawei P20",
    image: "/img/phone-4.webp",
    price: 550,
  },
  {
    id: "p29",
    name: "Samsung Galaxy S19",
    image: "/img/phone-6.webp",
    price: 600,
  },
  {
    id: "p30",
    name: "Xiaomi Mi 5i",
    image: "/img/phone-3.png",
    price: 380,
  },
  {
    id: "p31",
    name: "Huawei P30",
    image: "/img/phone-4.webp",
    price: 600,
  },
  {
    id: "p32",
    name: "Samsung Galaxy S18",
    image: "/img/phone-6.webp",
    price: 500,
  },
];

const searchInput = document.getElementById("search");
const productsContainer = document.querySelector(".products");
const paginationContainer = document.querySelector(".pagination");
const cartPriceEl = document.querySelector(".cart-price");
const cartBtn = document.querySelector(".cart");

const hoverHandler = (event, action) => {
  const cardEl = event.target.closest(".card");
  const removeBtnEl = cardEl.querySelector(".remove-btn");
  const cardBodyEl = cardEl.querySelector(".card-body");
  if (action === "add") {
    cardEl.classList.add("hover");
    removeBtnEl.classList.remove("hidden");
    cardBodyEl.classList.remove("card-overline");
  }
  if (action === "remove") {
    cardEl.classList.remove("hover");
    removeBtnEl.classList.add("hidden");
    cardBodyEl.classList.add("card-overline");
  }
};

const searchButtonHadnler = (event) => {
  event.preventDefault();
  searchInput.style.animationName = "none";

  requestAnimationFrame(() => {
    setTimeout(() => {
      searchInput.style.animationName = "";
    }, 0);
  });
  searchInput.classList.add("search-input-jump");
  searchInput.focus();
};

const getNumPages = (arr) => {
  const numPages = Math.ceil(arr.length / 8);
  return numPages;
};

const paginationHandler = (arr) => {
  paginationContainer.innerHTML = "";
  for (let i = 0; i < getNumPages(arr); i++) {
    paginationContainer.insertAdjacentHTML(
      "beforeend",
      `
            <li class="page-item">
              <a
                onclick="changeActivePageHandler(event)"
                class="page-link"
                href=""
                >${i + 1}</a
              >
            </li>
  `
    );
  }
  paginationContainer.querySelector(".page-item").classList.add("active");
};
paginationHandler(PRODUCTS_ARR);

const getPageProductsArr = (page, arr) => {
  const start = (page - 1) * 8;
  const end = page * 8;

  return arr.slice(start, end);
};

const activePage = document.querySelector(".page-item.active");
const getProducts = (active, arr) => {
  const row1 = document.getElementById("row-1");
  const row2 = document.getElementById("row-2");
  row1.innerHTML = "";
  row2.innerHTML = "";
  getPageProductsArr(
    active.querySelector(".page-link").textContent,
    arr
  ).forEach((product, i) => {
    const rowId = `row-${Math.ceil((i + 1) / 4)}`;
    const row = document.getElementById(rowId);
    row.insertAdjacentHTML(
      "beforeend",
      `
    <div class="col">
      <div
        id="${product.id}"
        class="card"
        onmouseover="hoverHandler(event, 'add')"
        onmouseleave="hoverHandler(event, 'remove')">
        <div class="card-img">
          <button onclick="removeItemHandler(event)" class="remove-btn hidden">Remove From List</button>
          <img
            class="card-img-top"
            src="${product.image}"
            alt="${product.name}"
          />
        </div>
        <div class="card-body card-overline">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">$${product.price.toFixed(2)}</p>
          <div class="card-btns">
            <button onclick="removeItemHandler(event)" class="card-btn">
              <i class="bi bi-trash3-fill"></i>
            </button>
            <button onclick="addToCartHandler(event)" class="card-btn">
              <i class="bi bi-cart-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </div>`
    );
  });
};
getProducts(activePage, PRODUCTS_ARR);

let filteredProducts = [];

const changeActivePageHandler = (event) => {
  event.preventDefault();

  event.target.closest(".container").scrollIntoView();

  document.querySelectorAll(".page-item").forEach((item) => {
    item.classList.remove("active");
  });
  event.target.closest(".page-item").classList.add("active");

  if (searchInput.value.trim() === "") {
    getProducts(event.target.closest(".page-item"), PRODUCTS_ARR);
  } else {
    getProducts(event.target.closest(".page-item"), filteredProducts);
  }
};

const searchHandler = (event) => {
  const searchFor = event.target.value.trim();

  if (searchFor !== "") {
    document.querySelector(".clear-btn").disabled = false;
  } else {
    document.querySelector(".clear-btn").disabled = true;
  }

  filteredProducts = PRODUCTS_ARR.filter((product) => {
    return product.name.toLowerCase().includes(searchFor.toLowerCase());
  });

  getProducts(activePage, filteredProducts);
  paginationHandler(filteredProducts);
};

const clearListHandler = (event) => {
  searchInput.value = "";
  event.target.disabled = true;
  getProducts(activePage, PRODUCTS_ARR);
  paginationHandler(PRODUCTS_ARR);
};

const removeItemHandler = (event) => {
  const cardEl = event.target.closest(".card");
  const productId = cardEl.id;

  PRODUCTS_ARR = PRODUCTS_ARR.filter((product) => {
    return product.id !== productId;
  });

  if (searchInput.value.trim() === "") {
    getProducts(activePage, PRODUCTS_ARR);
    paginationHandler(PRODUCTS_ARR);
  } else {
    filteredProducts = filteredProducts.filter((product) => {
      return product.id !== productId;
    });
    getProducts(activePage, filteredProducts);
    paginationHandler(filteredProducts);
  }
};

let cartPrice = 0;
let count = 0;
cartBtn.setAttribute("data-count", count);
cartPriceEl.textContent = cartPrice.toFixed(2);

const addToCartHandler = (event) => {
  const cardEl = event.target.closest(".card");
  const price = cardEl.querySelector(".card-text").textContent.slice(1);
  cartPrice += +price;
  count++;
  cartBtn.setAttribute("data-count", count);
  cartPriceEl.textContent = cartPrice.toFixed(2);

  window.scroll(0, 0);

  cartBtn.style.animationName = "none";

  requestAnimationFrame(() => {
    setTimeout(() => {
      cartBtn.style.animationName = "";
    }, 0);
  });
  cartBtn.classList.add("cart-btn-jump");
};

const changeActiveSocialBtn = (event) => {
  event.preventDefault();

  document.querySelectorAll(".social-item").forEach((item) => {
    item.classList.remove("active");
  });
  event.target.closest(".social-item").classList.add("active");
};

const emailSubmitHandler = (event) => {
  event.preventDefault();

  if (event.key === "Enter") {
    if (!event.target.value.includes("@")) {
      event.target.classList.add("invalid");
      document.querySelector(".invalid-feedback").style.display = "block";
    }
  }

  if (event.key === "@") {
    event.target.classList.remove("invalid");
    document.querySelector(".invalid-feedback").style.display = "none";
  }

  if (event.key === "Enter" && event.target.value.includes("@")) {
    event.target.classList.add("hidden");

    document.querySelector(".success").classList.remove("hidden");
  }
};
