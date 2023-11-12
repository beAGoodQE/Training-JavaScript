function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }
  
  makeShoppingList('beer');
  
  //Remember to buy beer (if we didn't pass in 'beer' it would be 'milk')
  //Remember to buy bread
  //Remember to buy eggs