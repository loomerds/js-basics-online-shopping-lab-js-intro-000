var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({itemName: item, itemPrice: Math.floor(Math.random()*100) + 1});
  return `${item} has been added to your cart.`
}

function viewCart() {
  let message = "Your shopping cart is empty.";
  let list = "In your cart, you have";
  for(let i=0; i<cart.length; i++) {
    let conjunction = " ";
    if(i>cart.length-1) {conjunction = " and "};
    if(i===0) {conjunction = " "};
    list = list + `${conjunction}${cart[i].itemName} at $${cart[i].itemPrice}${i<cart.length-1 ? "," : "."}`;
    message = list;
  }
  return message;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
