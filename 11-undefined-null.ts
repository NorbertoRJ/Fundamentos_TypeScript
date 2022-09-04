(() => {
  // let myNumber: number = undefined; error
  // let myString: string = null; error

  //si se usa la inferencia de datos lo asigna como any
  let myNull = null; //any
  let myUndefined = undefined; //any

  let myNull2: null = null;
  let myUndefined2: undefined = undefined;

  let myNumber: number | null = null; //
  myNumber = 12;

  let myString: string | undefined = undefined;
  myString = 'korn';

  function hi(name: string | null) {
    let hello = 'Hola';
    if (name) { //validar que no sea nullo
      hello += 'name';
    } else {
      hello += 'nobody';
    }
    console.log(hello);
  }

  hi('Norberto');
  hi(null);

  //Menos lineas
  function hi2(name: string | null) {
    let hello = 'Hola';
    hello += name?.toLocaleLowerCase() || 'nobody'; //valida con ? que no sea nullo   optional chaining JS   || logical OR operator
    hello += name?.toLocaleLowerCase() ?? 'nobody'; //valida con ? que no sea nullo   optional chaining JS   ?? Nullish coalescing operator
    console.log(hello);
  }

  hi2('Norberto');
  hi2(null);
})();
