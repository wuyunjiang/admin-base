'use strict';

module.exports = app => {
  
  // 启动项目是查看是否初始化数据库，如第一次执行则新建数据库，初始化admin账户
  app.ready(async () => {
    const ctx = app.createAnonymousContext()
    const { account, pwd } = app.config.initAdminUser
    const hasAdmin = await ctx.service.app.checkAdmin();
    if(!hasAdmin){
      await ctx.service.user.createAdmin(account, pwd);
    }
  });
};
