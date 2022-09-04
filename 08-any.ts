(() => {
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = '100';
  //Recomendado no usar any

  myDynamicVar = 'Hola';
  // myDynamicVar. no pasa nada, no tiene contexto

  //se hace un cast forma 1
  const rta = (myDynamicVar as string).toLocaleLowerCase();
  // rta.toLowerCase();
  console.log(rta);

  myDynamicVar = 1212
  // se hace un cast forma 2
  const rta2 = (<number>myDynamicVar).toFixed(); //con los genericos <>
  console.log(rta2);
})();
