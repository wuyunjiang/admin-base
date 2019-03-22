'use strict'
const Service = require('egg').Service;

class appService extends Service {
  async checkAdmin(){
    const adminList = await this.app.model.User.find({});
    return adminList.length > 0 ? true : false
  }
}
module.exports = appService;
