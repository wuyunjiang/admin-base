'use strict';
module.exports = {
  success(data) {
    const { ctx } = this;
    ctx.body = {
      error_code: 0,
      status: 'success',
      data,
    };
    ctx.status = 200;
  },
  failure({ code, msg }) {
    const { ctx } = this;
    ctx.body = {
      error_code: String(code),
      msg: msg || ctx.helper.errorCode[String(code)],
      status: 'error',
    };
    ctx.status = 200;
  },
};
