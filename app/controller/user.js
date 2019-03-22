'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

  /**
   * 登录
   */
  async login() {
    const { app, ctx } = this;
    const { account, pwd } = ctx.request.body;
    const userId = await ctx.service.user.login(account, pwd);
    if(userId){
      ctx.response.success({
        access_token: app.jwt.sign({ user_id: userId }, app.config.jwt.secret, { expiresIn: '7 days' }),
        refresh_token: app.jwt.sign({ user_id: userId }, app.config.jwt.secret, { expiresIn: '30 days' }),
      })
    }else{
      ctx.response.failure({
        code:10000,
      })
    }
  }

  /**
   * 登出
   */
  async logout() {
    const { ctx } = this;
    ctx.body = '你已退出';
  }

  /**
   * 获取用户baseInfo
   */
  async baseInfo() {
    const { ctx } = this;
    const { user_id } = ctx.request.body;
    const userInfo = await ctx.service.user.baseInfo(user_id);
    if(userInfo){
      ctx.response.success(userInfo)
    }else{
      ctx.response.failure({
        code:10002,
      })
    }
  }
}

module.exports = UserController;
