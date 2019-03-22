'use strict'
const Service = require('egg').Service;
var MD5 = require('md5');

class userService extends Service {
  async login(account,pwd){
    const userInfo = await this.app.model.User.findOne({ account, pwd:MD5(pwd) });
    return userInfo ? userInfo._id : undefined
  }
  async baseInfo(user_id){
    const userInfo = await this.app.model.User.findOne({ _id:user_id });
    return userInfo ? userInfo : undefined
  }
  async createAdmin(account,pwd){
    const admin_id = await this.app.model.User.create({
      account:account,
      pwd: MD5(pwd),
      avatar_url: "",
      create_time: Date.now(),
      last_modify: Date.now()
    });
    return admin_id ? admin_id : undefined
  }
}
module.exports = userService;
