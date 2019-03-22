'use strict';
module.exports = (options, app) => {
  return async function jwtAuth(ctx, next) {
    const jwtAuthKey = ctx.get('Authorization').substring(7);
    try {
      const decoded = app.jwt.verify(jwtAuthKey, app.config.jwt.secret);
      ctx.request.body.user_id = decoded.user_id;
      await next();
    } catch (err) {
      if (err.name === 'JsonWebTokenError') { // access_token解析错误JsonWebTokenError
        ctx.body = {
          status: 'error',
          error_code: 403,
          msg: 'LoginRequireException: Auth Error.',
        };
      }
      if (err.name === 'TokenExpiredError') {
        ctx.body = {
          status: 'error',
          error_code: 1001,
          msg: '用户未登录！',
        };
      }
      throw err;
    }
  };
};
