/*3. Build a feature for Store's Inventory.
Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should use the map higher-order function to create a new object with the converted prices in Rupees.*/

const storeInventory = {
    Apple:20,
    Iron:30,
    Steal:50
}
const convertToRupees = (inventory) => {
    const exchangeRate = 80;
  
    const convertedInventory = Object.keys(inventory).map((item) => {
      return { [item]: inventory[item] * exchangeRate };
    });
  
    return Object.assign({}, ...convertedInventory);
  };
  const convertedPrices = convertToRupees(storeInventory);
  console.log(convertedPrices);


