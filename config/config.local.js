'use strict';

module.exports = () => {
  const config = exports = {};

  config.mongoose = {
    clients: {
      future_international:{
        url: 'mongodb://wuyunjiang:wyj12345@172.96.218.205:27017/future_international',
        options: {
          authSource:"admin"
        },
      }
    }
  }

  return config;
};