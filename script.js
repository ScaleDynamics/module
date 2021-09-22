require('@warpjs/engine');

const MicroService = require('./client/client.js');
const { hello } = new MicroService({ env: 'demo' });

hello('World').then((message) => {
  console.log(message);
});
