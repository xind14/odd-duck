'use strict';

// Global Variables
const productNames = [
  "bag",
  "banana",
  "bathroom",
  "boots",
  "breakfast",
  "bubblegum",
  "chair",
  "cthulhu",
  "dog-duck",
  "dragon",
  "pen",
  "pet-sweep",
  "scissors",
  "shark",
  "sweep",
  "tauntaun",
  "unicorn",
  "water-can",
  "wine-glass",
];

// Global State of application
let state = {
  clicks: 0,
  maxClicks: 25,
  allProducts: [],
  duckContainer: document.getElementById("products"),
  resultsContainer: document.getElementById("results"),
  image1: document.getElementById("#img1"),
  image2: document.getElementById("#img2"),
  image3: document.getElementById("#img3"),
  button: document.getElementById("showResults"),
  reset: document.getElementById("reset"),
};

// const duckContainer = document.getElementById('products');
// const resultsContainer = document.getElementById('results');
// const image1=document.querySelector('#img1');
// const image2=document.querySelector('#img2');
// const image3=document.querySelector('#img3');
// const button = document.getElementById('showResults');
// const reset =document.getElementsById('reset');

// Constructor function for creating duck objects
function Product(name, path) {
  this.name = name;
  this.path = path;
  this.votes = 0;
  this.views = 0;
  // state.allProducts.push(this);
}

// Function to create new objects using constructor
function productInfo() {
  for (let i = 0; i < productNames.length; i++) {
    let product = new Product(
      productNames[i],
      "img/" + productNames[i] + ".jpg"
    );
    state.allProducts.push(product);
  }
}

// Helper Functions
function renderProducts() {
  function randomProduct() {
    return Math.floor(Math.random() * state.allProducts.length);
  }

  let left = randomProduct();
  let middle = randomProduct();
  let right = randomProduct();

  while (left === middle || left === right || middle === right) {
    left = randomProduct();
  }

  // Display on Screen
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

function renderResultsButton() {
  button.style.display = "block";
}

function renderResults() {
  console.log("Showing the results");
}

function handleClick(event) {
  let goatName = event.target.alt;

  // Loop the array and find that goat, update the vote and stop
  for (let i = 0; i < state.allGoats.length; i++) {
    if (goatName === state.allGoats[i].name) {
      state.allGoats[i].votes++;
      break;
    }
  }

  state.numClicksSoFar++;

  if (state.numClicksSoFar >= state.numClicksAllowed) {
    removeListener();
    renderResultsButton();
  } else {
    renderProducts();
  }
}

function setupListeners() {
  goatsContainer.addEventListener("click", handleClick);
  button.addEventListener("click", renderResults);
}

function removeListener() {
  goatsContainer.removeEventListener("click", handleClick);
}

renderProducts();
setupListeners();
