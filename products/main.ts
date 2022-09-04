import { createProduct, calcStock, products } from './product.service';

createProduct({
  name: 'Product 1',
  createdAt: new Date(1993, 1, 1),
  stock: 12
});

createProduct({
  name: 'Product 2',
  createdAt: new Date(1993, 1, 1),
  stock: 12,
  size: 'L',
});

console.log(products);
const total = calcStock();
console.log(total);
