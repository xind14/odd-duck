"use strict";

let duckContainer = document.getElementById("products");
let resultsContainer = document.getElementById("results");
let button = document.getElementById("showResults");

let image1 = document.getElementById("img1");
let image2 = document.getElementById("img2");
let image3 = document.getElementById("img3");

let state = {
  clicks: 0,
  maxClicks: 25,
  allProducts: [],
};
function Product(name, path) {
  this.name = name;
  this.path = path;
  this.votes = 0;
  this.views = 0;
  state.allProducts.push(this);
}

function renderProducts() {
  function randomProduct() {
    return Math.floor(Math.random() * state.allProducts.length);
  }

  let left = randomProduct();
  let middle = randomProduct();
  let right = randomProduct();

  while (left === middle || left === right || middle === right) {
    middle = randomProduct();
    right = randomProduct();
  }

  image1.src = state.allProducts[left].path;
  image1.alt = state.allProducts[left].name;

  image2.src = state.allProducts[middle].path;
  image2.alt = state.allProducts[middle].name;

  image3.src = state.allProducts[right].path;
  image3.alt = state.allProducts[right].name;

  state.allProducts[left].views++;
  state.allProducts[middle].views++;
  state.allProducts[right].views++;
}

function removeButton() {
  button.style.display = "none";
}

function renderResultsBtn() {
  button.style.display = "block";
}

function renderResults() {
  for (let i = 0; i < state.allProducts.length; i++) {
    let productResult = document.createElement("p");
    productResult.textContent = `${state.allProducts[i].name} votes: ${Number(
      state.allProducts[i].votes
    )} views: ${state.allProducts[i].views}`;
    resultsContainer.appendChild(productResult);
  }
}

function handleClick(event) {
  let imageName = event.target.alt;

  for (let i = 0; i < state.allProducts.length; i++) {
    if (imageName === state.allProducts[i].name) {
      state.allProducts[i].votes++;
      break;
    }
  }

  if (state.clicks >= state.maxClicks) {
    duckContainer.removeEventListener("click", handleClick);
    renderResultsBtn();
  }

  state.clicks++;
  renderProducts();
}

function setupListeners() {
  duckContainer.addEventListener("click", handleClick);
  button.addEventListener("click", renderResults);
}

new Product("Bag", "img/bag.jpg");
new Product("Banana", "img/banana.jpg");
new Product("Bathroom", "img/bathroom.jpg");
new Product("Boots", "img/boots.jpg");
new Product("Breakfast", "img/breakfast.jpg");
new Product("Bubblegum", "img/bubblegum.jpg");
new Product("Chair", "img/chair.jpg");
new Product("Cthulhu", "img/cthulhu.jpg");
new Product("Dog-Duck", "img/dog-duck.jpg");
new Product("Dragon", "img/dragon.jpg");
new Product("Pen", "img/pen.jpg");
new Product("Pet-Sweep", "img/pet-sweep.jpg");
new Product("Scissors", "img/scissors.jpg");
new Product("Shark", "img/shark.jpg");
new Product("Sweep", "img/sweep.jpg");
new Product("Tauntaun", "img/tauntaun.jpg");
new Product("Unicorn", "img/unicorn.jpg");
new Product("Water-Can", "img/water-can.jpg");
new Product("Wine-Glass", "img/wine-glass.jpg");

renderProducts();
setupListeners();
removeButton();
