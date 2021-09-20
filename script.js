require('@warpjs/engine');

const MicroService = require('./client/my-module-client.js');
const { hello } = new MicroService({ env: 'demo' });

hello('World').then((message) => {
  console.log(message);
});
