"use strict";

// Target Elements and counters
let duckContainer = document.getElementById("products");
let resultsContainer = document.getElementById("results");
let button = document.getElementById("showResults");
let image1 = document.getElementById("img1");
let image2 = document.getElementById("img2");
let image3 = document.getElementById("img3");
let productChart = document.getElementById("chart");
let clicks = 0;
let maxClicks = 25;

// Global state of app
let state = {
  allProducts: [],
  lastProduct: [],
};

// Product Constructor
function Product(name, path) {
  this.name = name;
  this.path = path;
  this.votes = 0;
  this.views = 0;
  state.allProducts.push(this);
}

//--------------------------------- Image Randomize/Render ---------------------------------//

// RenderProducts function with inner randomize function
function renderProducts() {
  function randomProduct() {
    return Math.floor(Math.random() * state.allProducts.length);
  }
  // Assign three random indices with the random function
  let left = randomProduct();
  let middle = randomProduct();
  let right = randomProduct();

  // While loop that generates indices for left/middle/right to ensure same image does not appear in multiple positions in a round and also not displayed in previous iteration which is kept in the lastProduct array
  while (
    left === middle ||
    left === right ||
    middle === right ||
    state.lastProduct.includes(state.allProducts[left].name) ||
    state.lastProduct.includes(state.allProducts[middle].name) ||
    state.lastProduct.includes(state.allProducts[right].name)
  ) {
    left = randomProduct();
    middle = randomProduct();
    right = randomProduct();
  }
  state.lastProduct = [
    state.allProducts[left].name,
    state.allProducts[middle].name,
    state.allProducts[right].name,
  ];
  // Update name and paths of new selected iteration and increment views for all three img position
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
// Reset array to empty for next iteration
state.lastProduct = [];

// button functions
function removeButton() {
  button.style.display = "none";
}
function renderResultsButton() {
  button.style.display = "block";
}

//--------------------------------- Results ---------------------------------//
// Rendering results and chart by declaring empty arrays to store names, views, and votes. Loop that gets all three properties of the current products used and add it to the arrays
function renderResults() {
  let productVotes = [];
  let productNames = [];
  let productViews = [];
  for (let i = 0; i < state.allProducts.length; i++) {
    productVotes.push(state.allProducts[i].votes);
    productNames.push(state.allProducts[i].name);
    productViews.push(state.allProducts[i].views);
  }

  // Create a chart object with two data sets that contain info in the arrays, and adding a configuration object specifying chart types
  const myChartData = {
    labels: productNames,
    datasets: [
      {
        label: "Votes",
        data: productVotes,
        borderWidth: 2,
        backgroundColor: ["darkblue"],
      },
      {
        label: "Views",
        data: productViews,
        borderWidth: 2,
        backgroundColor: ["red"],
      },
    ],
  };

  const config = {
    type: "bar",
    data: myChartData,
    options: {
      plugins: {
        title: {
          display: true,
          text: "Odd Duck's Product Votes",
          align: "center",
          font: {
            size: 40,
          },
        },
        legend: {
          display: true,
          labels: {
            font: {
              size: 30,
            },
          },
        },
      },
      scales: {
        x: {
          ticks: {
            font: {
              size: 20,
            },
          },
        },
        y: {
          beginAtZero: true,
          ticks: {
            font: {
              size: 20,
            },
          },
        },
      },
    },
  };
 
      // Create new Chart instance
  const myChart = new Chart(productChart, config);
}

//--------------------------------- Event Handling ---------------------------------//
// Declares a function that takes event object as parameter, loop of allProducts array, if image name matches current product in loop,  increment votes, stop the loop prematurely after if statement is true
function handleClick(event) {
  let imageName = event.target.alt;
  for (let i = 0; i < state.allProducts.length; i++) {
    if (imageName === state.allProducts[i].name) {
      state.allProducts[i].votes++;
      break;
    }
  }
  // Increment clicks, if clicks reach max clicks remove users ability to click more and render results, else render another round of products again
  clicks++;
  if (clicks >= maxClicks) {
    duckContainer.removeEventListener("click", handleClick);
    renderResults();
  } else {
    renderProducts();
  }

  // Set products in storage after voting
  localStorage.setItem("allProducts", JSON.stringify(state.allProducts));
}

// Functions to set up and remove listeners
function setupListeners() {
  duckContainer.addEventListener("click", handleClick);
}
function removeListener() {
  duckContainer.removeEventListener("click", handleClick);
}

// Checks storage for products, if data is found update app state with JSON.parse to allow reuse of objects
function init() {
  let stateString = localStorage.getItem("allProducts");
  if (stateString) {
    state.allProducts = JSON.parse(stateString);
  }
}

// Create instances of product constructor
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

// Invoking functions
init();
renderProducts();
setupListeners();
removeButton();
