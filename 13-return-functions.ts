(() => {
  const calcTotal = (prices: number[]) => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total;
  }

  const rta = calcTotal([1,2,3,4,5]);
  console.log(rta);

  const calcTotalV2 = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total.toString();
  }

  const rta2 = calcTotalV2([1,4,5,4]);
  console.log(rta2);

  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);
  }

  printTotal([32,434,43,43]);
})();
