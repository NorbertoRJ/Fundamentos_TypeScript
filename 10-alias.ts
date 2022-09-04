(() => {
  // let userId: string | number | boolean;

  // function greeting(userId: string | number | boolean) {
  //   if  (typeof userId === 'string') {
  //     console.log(`string ${userId.toUpperCase()}`);
  //   }
  // }

  type UserId = string | number | boolean; //palabra reservada de TS, alias type
  let userId: UserId;

  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
   //Literal types
  // let shirtSize: 'S' | 'M' | 'L' | 'XL';
  // shirtSize = 's';
  shirtSize = 'S';
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  // shirtSize = 'rfjerifjperojfe'; error

  function greeting(userId: UserId, size: Sizes) {
    if  (typeof userId === 'string') {
      console.log(`string ${userId.toUpperCase()}`);
    }
  }

  greeting(1111, 'XL');
  greeting('1111', 'XL');
  // greeting('1111', 'dede');error
})();
