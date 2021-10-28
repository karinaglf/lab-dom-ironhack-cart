//DOM Elements

// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  let subTotal = product.querySelector('.subtotal span');

  subTotal.innerText = Number(price.innerText) * Number(quantity.value);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 2
  //... your code goes here
  const allProducts = document.querySelectorAll('.product');

  allProducts.forEach((product) => {
    updateSubtotal(product);
  });

  // ITERATION 3
  //... your code goes here
  let totalPrice = 0;
  let allSubtotals = document.querySelectorAll('.subtotal span');
  let totalValue = document.querySelector('#total-value span');

  allSubtotals.forEach( subTotal => {
    totalPrice += Number(subTotal.innerText);
  })

  console.log(totalPrice);
  totalValue.innerText = totalPrice;
  
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.parentNode.remove();
  calculateAll()

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}




window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

window.addEventListener('load', () => {
  const removeButtons = document.querySelectorAll('.btn-remove'); 
  //now we target all button, we need a foreach for add the event listeners to individual buttons
  removeButtons.forEach((button) => {
    button.addEventListener('click', removeProduct);
    console.log("clicking");
  })
});