(() => {
  //En los union types no puedo usar la inferencia
  let userId: string | number;
  userId = 1212;
  userId = 'string';

  function greeting(myTest: string | number) {
    if  (typeof myTest === 'string') {
      console.log(`string ${myTest.toUpperCase()}`);
    } else {
      console.log(`string ${myTest.toFixed(1)}`);
    }
  }
  greeting('Norberto');
  greeting(1212.39323);
  // greeting(null);
  // greeting({});
})();
