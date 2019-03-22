'use strict';

const mongoConf = require('./prodConf/mongoConf.js');
const { mongo_url, replicaSetName, options: mongoOptions } = mongoConf;

module.exports = () => {
  const config = exports = {};

  config.mongoose = {
    clients: {
      webar_wx: {
        url: `${mongo_url || process.env.NODE_MONGO_URL}/fi_user?replicaSet=${replicaSetName}`,
        options: mongoOptions,
      },
      webar_user: {
        url: `${mongo_url || process.env.NODE_MONGO_URL}/fi_news?replicaSet=${replicaSetName}`,
        options: mongoOptions,
      },
    },
  };
  return config;
};
