'use strict';

module.exports = appInfo => {
  const config = exports = {};

  config.initAdminUser = {
    account:"admin",
    pwd:"admin123",
  }

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1524480011898_9769';
  config.security = {
    csrf: false
  }
  config.jwt = {
    secret: "FutureInternational_secret",
    issuer: 'futuregroup.ltd'
  };
  config.middleware = ['jwtAuth'];
  config.jwtAuth = {
    ignore: [
      "/admin/user/login",
    ]
  }
  
  config.onerror = {
    all(err, ctx) {
      ctx.body = {
        error_code:"335208",
        msg:"Node服务器出错，请联系网站管理员",
      }
      ctx.status = 200;
    }
  }

  return config;
};