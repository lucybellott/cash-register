// Design and build a cash register that can:

// Add and remove items
// Counts the amount of coins and bills in the drawer
// Sum the total amount of money in the drawer
// Determine whether it is possible to create a specific cash amount from the current items in the drawer
// Computes the change required from a transaction and removes it from the drawer if possible.

//Each function accepts a drawer array of objects. 
//Currency types and amounts that may be in the drawer array are represented in integers rather than decimals.

const drawer = [
    { name: 'penny', value: 1, quantity: 72 },
    { name: 'nickel', value: 5, quantity: 41 },
    { name: 'dime', value: 10, quantity: 31 },
    { name: 'quarter', value: 25, quantity: 17 },
    { name: 'one', value: 100, quantity: 90 },
    { name: 'five', value: 500, quantity: 11 }, 
    { name: 'ten', value: 1_000, quantity: 2 },
    { name: 'twenty', value: 2_000, quantity: 3 },
    { name: 'hundred', value: 10_000, quantity: 1 }
  ]




//Removes a single item from the drawer
function removeItem(name, drawer){

  for (let i = 0; i < drawer.length; i++) {
    if (drawer[i].name === name && drawer[i].quantity > 0) {
      drawer[i].quantity--
      return true
    }
  }
  return false

}

//Adds a single item to the drawer
function addItem(name, drawer){

  for (let i = 0; i < drawer.length; i++) {
    if (drawer[i].name === name) {
      drawer[i].quantity++
      return true
    }
  }
  return false

}
//Counts how many coins are in the drawer
function countCoins(drawer){

  let totalCoins = 0;
  for (let i = 0; i < drawer.length; i++) {
    if (drawer[i].value < 100) {
      totalCoins += drawer[i].quantity
    }
  }
  return totalCoins

}

//Counts how many notes/bills are in the drawer
function countNotes(drawer){

  let total = 0
  for (let i = 0; i < drawer.length; i++) {
    if (drawer[i].value >= 100) {
      total += drawer[i].quantity
    }
  }
  return total

} 

//Calculates the total amount of money in the drawer as a string formatted in dollars (see example below)
function sumDrawer(drawer){

} 

// Determines whether it is possible to create a specific cash amount from the items in the drawer.
function canMakeAmount(target, drawer){

}

//Calculates the change required from a transaction and removes it from the drawer if possible
function transaction(cost, paid, drawer){

}