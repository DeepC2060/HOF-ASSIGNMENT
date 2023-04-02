const storeInventory = {
    item1: 10.99,
    item2: 24.99,
    item3: 6.50,
    item4: 14.75,
  };
  
  const exchangeRate = 80;
  
  const inventoryInRupees = Object.fromEntries(
    Object.entries(storeInventory).map(([item, price]) => [item, price * exchangeRate])
  );
  
  console.log(inventoryInRupees);
  