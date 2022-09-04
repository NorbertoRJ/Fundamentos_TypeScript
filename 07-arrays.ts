(() => {
  let prices = [1,2,3,4,5,6, 'hola', true];
  // price.push('string');
  // price.push(true);
  // price.push({});
  prices.push(123131);
  prices = [1,4,3];
  prices.push('korn');

  let products = ['hola', true];
  // products.push(3);
  products.push(false);

  let mixed: (number | string | boolean | Object)[] = ['hola', true];
  mixed.push(false);
  mixed.push({});
  mixed.push([]);//también acepta arrays si se aceptan Objects

  // let numbers = ['as'];
  // numbers.map(item => item * 2);error
  let numbers = [1,2,3,4,5,6];
  numbers.map(item => item * 2);
})();
