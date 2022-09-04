// var _ = require('lodash');
import _ from 'lodash';

const data = [
  {
    username: 'Norberto',
    role: 'admin'
  },
  {
    username: 'Arath',
    role: 'seller'
  },
  {
    username: 'Alexis',
    role: 'seller'
  },
  {
    username: 'Julio',
    role: 'customer'
  }
];

  const rta = _.groupBy(data, (item) => item.role);
  console.log(rta);
