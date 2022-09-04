(() => {
  let productPrice;
  productPrice = 12;
  console.log('productPrice', productPrice);

  let customerAge: number = 28;
  // customerAge = customerAge + '1'; // 281
  customerAge = customerAge + 1;
  console.log('customerAge', customerAge);

  let productInStock: number = 10;
  console.log('productInStock', productInStock);

  if (productInStock > 10) {
    console.log('is greater');
  }

  let discount = parseInt('asasas');
  console.log('discount', discount);
  if (discount <= 200) {
    console.log('apply');
  } else {
    console.log('not apply');
  }

  let hex = 0xfff;// 0xfffz error
  console.log('hex', hex);
  let bin = 0b1010;//0b10101212 error
  console.log('bin', bin);

  const myNumber: Number = 10; //Objeto Number no es tipo number, usar en minúscula
})();
