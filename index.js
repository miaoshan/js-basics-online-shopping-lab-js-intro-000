var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function generateCartItem(itemName,itemPrice) {
  return {
    itemName:itemName,
    itemPrice:getRandomInt(1, 100)
  }
}

function addToCart(item) {
  var item = generateCartItem(item)
   getCart().push(item)
   return `${item.itemName} has been added to your cart.`
}

function viewCart() {
  for (var i=0; l=cart.length; i<l; i++){

  }
}

/*function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}*/
