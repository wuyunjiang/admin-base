'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {

  /**
   * 获取新闻列表
   */
  async newsList() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  /**
   * 获取单条新闻
   */
  async newsItem() {
    const { ctx } = this;
    const news_id = ctx.params.news_id
    ctx.body = 'hi, egg';
  }

  /**
   * 添加一条新闻
   */
  async addNews(){
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  /**
   * 修改新闻
   */
  async updateNews(){
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  /**
   * 删除新闻
   */
  async delNews(){
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  
}

module.exports = NewsController;
