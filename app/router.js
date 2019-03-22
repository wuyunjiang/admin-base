'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  //登录/登出/baseInfo
  router.post('/admin/user/login', controller.user.login);
  router.post('/admin/user/logout', controller.user.logout);
  router.get('/admin/user/base/info', controller.user.baseInfo);

  //新闻
  router.get('/admin/news', controller.news.newsList);//新闻列表
  router.get('/admin/news', controller.news.newsItem);//单条新闻详情
  router.post('/admin/news/:news_id', controller.news.addNews);//新增一条新闻
  router.put('/admin/news/:news_id', controller.news.updateNews);//修改单条新闻
  router.del('/admin/news/:news_id', controller.news.delNews);//删除一条新闻

};
