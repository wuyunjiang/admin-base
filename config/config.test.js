'use strict';

module.exports = () => {
  const config = exports = {};

  config.mongoose = {
    clients: {
      fi_user:{
        url: 'mongodb://wuyunjiang:wyj12345@172.96.218.205:27019/fi_user',
        options: {
          authSource:"admin"
        },
      },
      fi_news:{
        url: 'mongodb://wuyunjiang:wyj12345@172.96.218.205:27019/fi_news',
        options: {
          authSource:"admin"
        },
      }
    }
  }
  return config;
};