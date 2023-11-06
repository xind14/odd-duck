// Global Variables
const productNames = [
  'bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun','unicorn', 'water-can','wine-glass',
];

// Global State of application 
let state = {
  clicks: 0,
  maxClicks: 25,
  allProducts: [],
  duckContainer: document.getElementById('products'),
resultsContainer: document.getElementById('results'),
image1: document.querySelector('#img1'),
image2: document.querySelector('#img2'),
image3: document.querySelector('#img3'),
button: document.getElementById('showResults'),
reset: document.getElementsById('reset'),
};


// const duckContainer = document.getElementById('products');
// const resultsContainer = document.getElementById('results');
// const image1=document.querySelector('#img1');
// const image2=document.querySelector('#img2');
// const image3=document.querySelector('#img3');
// const button = document.getElementById('showResults');
// const reset =document.getElementsById('reset');

// Constructor function for creating duck objects
function Product( name, path ) {
  this.name = name;
  this.path = path;
  this.votes = 0;
  this.views = 0;
  state.allProducts.push(this);
}

// Function to create new objects using constructor
function productInfo() {
  for (let i = 0; i < productNames.length; i++) {
    let product = new Product(productNames[i], 'img/' + productNames[i] + '.jpg');
    state.allProducts.push(product);}
  }


// Helper Functions

function renderProducts() {

function randomProduct() {
  return Math.floor( Math.random() * state.allProducts.length );
}

let left = randomProduct(); 
  let middle = randomProduct(); 
  let right = randomProduct(); 

  while( left === middle || left === right || middle===right) {
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







// y Create a constructor function that creates an object associated with each product, and has the following properties:
//y  Name of the product
// y File path of image
// y Times the image has been shown
// Create an algorithm that will randomly generate three unique product images from the images directory and display them side-by-side-by-side in the browser window.

// For each of the three images, increment its property of times it has been shown by one.

// Attach an event listener to the section of the HTML page where the images are going to be displayed.

// Once the users ‘clicks’ a product, generate three new products for the user to pick from.
// As a user, I would like to track the selections made by viewers so that I can determine which products to begin production on.
// In the constructor function define a property to hold the number of times a product has been clicked.

// After every selection by the viewer, update the newly added property to reflect if it was clicked.

// As a user, I would like to control the number of rounds a user is presented with so that I can control the voting session duration.
// By default, the user should be presented with 25 rounds of voting before ending the session.
// Keep the number of rounds in a variable to allow the number to be easily changed for debugging and testing purposes.
// As a user, I would like to view a report of results after all rounds of voting have concluded so that I can evaluate which products were the most popular.
// Create a property attached to the constructor function itself that keeps track of all the products that are currently being considered.

// After voting rounds have been completed, remove the event listeners on the product.

// Add a button with the text View Results, which when clicked displays the list of all the products followed by the votes received, and number of times seen for each. Example: banana had 3 votes, and was seen 5 times.

// NOTE: Displayed product names should match the file name for the product. Example: the product represented with dog-duck.jpg should be displayed to the user as exactly “dog-duck” when the results are shown.

// Using Lighthouse in the Chrome DevTools, analyze the accessibility of your application.

// In this module, try for a score higher than 80. Make necessary adjustments based on the report to achieve that score.
// Add a screenshot of your score to your README.md file.