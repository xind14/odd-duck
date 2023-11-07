"use strict";

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
  allProducts: [],
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
  state.allProducts.push(this);
}

// Function to create new objects using constructor
function productInfo() {
  // function productInfo() {
  for (let i = 0; i < productNames.length; i++) {
    let product = new Product(
      productNames[i],
      "img/" + productNames[i] + ".jpg"
    );
    state.allProducts.push(product);
  }
}

let productTally = {
  clicks: 0,
  maxClicks: 25,
  duckContainer: document.getElementById("products"),
  resultsContainer: document.getElementById("results"),
  image1: document.getElementById("img1"),
  image2: document.getElementById("img2"),
  image3: document.getElementById("img3"),
  button: document.getElementById("showResults"),
  reset: document.getElementById("reset"),
  // left:null,
  // middle: null,
  // right: null,
};
// Helper Functions

function renderProducts() {
  function randomProduct() {
    return Math.floor(Math.random() * productNames.length);
  }
  let left = randomProduct();
  let middle = randomProduct();
  let right = randomProduct();

  while (left === middle || left === right || middle === right) {
    middle = randomProduct();
    right = randomProduct();
  }
  productTally.image1.src = state.allProducts[left].path;
  productTally.image1.alt = state.allProducts[left].name;

  image2.src = state.allProducts[middle].path;
  image2.alt = state.allProducts[middle].name;

  image3.src = state.allProducts[right].path;
  image3.alt = state.allProducts[right].name;

  state.allProducts[left].views++;
  state.allProducts[middle].views++;
  state.allProducts[right].views++;

  function removeButton() {
    button.style.display = "none";
  }

  function renderResultsBtn() {
    button.style.display = "block";
  }

  function showResults() {
    for (let i = 0; i < state.allPics.length; i++) {
      let productResult = document.createElement("p");
      productResult.textContent = `${state.allPics[i].name} votes: ${Number(
        state.allPics[i].votes
      )} views: ${state.allPics[i].views}`;
      resultsContainer.appendChild(productResult);
    }
  }

  function clickEvent(event) {
    let imageName = event.target.alt;

    for (let i = 0; i < state.allPics.length; i++) {
      if (imageName === state.allPics[i].name) {
        state.allPics[i].votes++;
        break;
      }
    }

    if (state.clicks >= state.maxClicks) {
      duckContainer.removeEventListener("click", clickEvent);
      renderResultsBtn();
      state.clicks++;
      // console.log(state.currentClicks);
      // console.log(Product.votes);
      renderProducts();
    }

    function listeners() {
      duckContainer.addEventListener("click", clickEvent);
      button.addEventListener("click", showResults);
    }
  }
}
renderProducts();
setupListeners();
removeButton();

// productTally.left.views++;

// state.image2.src = state.allProducts[middle].path;
// state.image2.alt = state.allProducts[middle].name;
// productTally.image2.src =  productTally.middle.path;
// productTally.image2.alt =  productTally.middle.name;

// productTally.middle.views++;

// state.allProducts[middle].views++;

// state.image3.src = state.allProducts[right].path;
// state.image3.alt = state.allProducts[right].name;
// productTally.image3.src =  productTally.right.path;
// productTally.image3.alt =  productTally.right.name;

// productTally.right.views++;

// renderProducts: function () {
//   productTally.left = state.allProducts[productTally.randomProduct()];
//   productTally.middle = state.allProducts[productTally.randomProduct()];
//    productTally.right = state.allProducts[productTally.randomProduct()];

//  if (productTally.left === productTally.middle || productTally.left === productTally.right || productTally.middle === productTally.right) {

//     productTally.renderProducts();
//   }
//   left = randomProduct();
//   middle = randomProduct();
//  right = randomProduct();
// }

// Display on Screen
// productTally.image1.src =  productTally.left.path;
// productTally.image1.alt =  productTally.left.name;

//   productTally.left.views++;

// state.image2.src = state.allProducts[middle].path;
// state.image2.alt = state.allProducts[middle].name;
// productTally.image2.src =  productTally.middle.path;
// productTally.image2.alt =  productTally.middle.name;

// productTally.middle.views++;

// state.allProducts[middle].views++;

// state.image3.src = state.allProducts[right].path;
// state.image3.alt = state.allProducts[right].name;
// productTally.image3.src =  productTally.right.path;
// productTally.image3.alt =  productTally.right.name;

// productTally.right.views++;

// state.allProducts[right].views++;
// },

// renderResultsButton: function () {
//   button.style.display = "block";
// },
//   handleClick: function(event) {

//   let clickedProduct = event.target.alt;
//   for ( let i = 0; i < state.allProducts.length; i++ ) {
//     if( clickedProduct === state.allProducts[i].name ) {
//       state.allProducts[i].votes++;
//       break;}}
//       productTally.clicks++;

//       if (productTally.clicks >=productTally.maxClicks){
//         removeEventListener();
//         renderResultsButton();
//       } else {
//           renderProducts();
//         }
//       },

//  renderResults: function() {
//   let ul = document.createElement('ul');
//   resultsContainer.appendChild(ul)
//   for (let i in state.allProducts) {
//     let li = document.createElement('li');
//     li.textContent = `${state.allProducts[i].name} had ${state.allProducts[i].views} views, and ${state.allProducts[i].votes} votes.`;
//     resultsContainer.appendChild(li);
//  }

//  let totalLi = document.createElement('li');
//  totalLi.textContent = `Total Clicks: ${productTally.clicks}`;
//  resultsContainer.appendChild(totalLi);
// },

//  setupListeners: function() {
//   productTally.duckContainer.addEventListener("click", productTally.handleClick);
//  productTally.button.addEventListener("click", productTally.renderResults);
// },

//  removeEventListener: function() {
// productTally.duckContainer.removeEventListener("click", productTally.handleClick);
// }
// }
// productTally.removeEventListener();
// productTally.renderProducts();
// productTally.setupListeners();
