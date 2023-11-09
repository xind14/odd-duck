"use strict";

let duckContainer = document.getElementById("products");
let resultsContainer = document.getElementById("results");
let button = document.getElementById("showResults");

let image1 = document.getElementById("img1");
let image2 = document.getElementById("img2");
let image3 = document.getElementById("img3");

let clicks = 0;
let maxClicks = 25;


let state = {
  // clicks: 0,
  // maxClicks: 25,
  allProducts: [],
  lastProduct:[], 
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

  while (left === middle || left === right || middle === right 
    ||
         state.lastProduct.includes(state.allProducts[left].name) ||
         state.lastProduct.includes(state.allProducts[middle].name) ||
         state.lastProduct.includes(state.allProducts[right].name)) {
    left = randomProduct();
    middle = randomProduct();
    right = randomProduct();
  }
  state.lastProduct =[
    state.allProducts[left].name,
    state.allProducts[middle].name,
    state.allProducts[right].name,
  ];

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

state.lastProduct = [];

function removeButton() {
  button.style.display = "none";
}

function renderResultsButton() {
  button.style.display = "block";

}
let productChart = document.getElementById('chart');

function renderResults() {
  // for (let i = 0; i < state.allProducts.length; i++) {
  //   let productResult = document.createElement("p");
  //   productResult.textContent = `${state.allProducts[i].name} votes: ${Number(
  //     state.allProducts[i].votes
  //   )} views: ${state.allProducts[i].views}`;
  //   resultsContainer.appendChild(productResult);
    
  //   }

// function renderChart() {


let  productVotes = [];
let productNames = [];
let  productViews = [];

  for (let i = 0; i < state.allProducts.length; i++) {
    productVotes.push(state.allProducts[i].votes);
    productNames.push(state.allProducts[i].name);
    productViews.push(state.allProducts[i].views);
  }

  const myChartData = {
    labels: productNames,
    datasets: [
      {
        label: "Votes",
        data: productVotes,
        borderWidth: 2,
        backgroundColor: [
          'darkblue'
        ]
      },
      {
        label: "Views",
        data: productViews,
        borderWidth: 2,
        backgroundColor: ['red']
      }
    ]
  }

  const config = {
    type: 'bar',
    data: myChartData,
    options: {
      scales: {
        y: {
          beginAtZero: true,
          
        }
      }
    }
  }

  const myChart = new Chart(productChart, config);

}


function handleClick(event) {
  let imageName = event.target.alt;

  for (let i = 0; i < state.allProducts.length; i++) {
    if (imageName === state.allProducts[i].name) {
      state.allProducts[i].votes++;
      break;
    }
  }
  // state.
  clicks++;

  if (clicks >= maxClicks) {
    duckContainer.removeEventListener("click", handleClick);
    renderResults();
  } 
  else {

  renderProducts();

}

localStorage.setItem('allProducts', JSON.stringify(state.allProducts));
}
function setupListeners() {
  duckContainer.addEventListener("click", handleClick);
}
function removeListener() {
  duckContainer.removeEventListener("click", handleClick);
 }
function init (){
   let stateString = localStorage.getItem('allProducts');
   if(stateString){
      state.allProducts = JSON.parse(stateString);
   }
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


init();
renderProducts();
setupListeners();
removeButton();