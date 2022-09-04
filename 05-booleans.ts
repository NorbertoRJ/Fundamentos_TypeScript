(() => {
  let isEnable = true;
  // isEnable = 'string';
  // isEnable = 123;
  // isEnable = undefined;
  isEnable = false;

  let isNew: boolean = false;
  console.log('isNew', isNew);
  isNew = true;
  console.log('isNew', isNew);

  const random = Math.random();
  console.log('random', random);

  isNew = random >= 0.5 ? true : false; // ? '4343' : '4334; error
  console.log('isNew', isNew);

  const myBoolean: boolean = true;
})();
