'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // let result = await this.app.mysql.get("blog_content", {})

    // this.ctx.body = result;
    this.ctx.body = ' API 接口 ';
  }

  // 首页 获取文章的列表 接口
  async getArticleList(){
    let sql = 'SELECT article.id as id,' +
              'article.title as title,' +
              'article.introduce as introduce,' +
              "FROM_UNIXTIME(article.addTime, '%Y-%m-%d %H:%i:%s') as addTime," +
              'article.view_count as view_count,' +
              'type.typeName as typeName ' +
              'FROM article LEFT JOIN type ON article.type_id = type.Id'

    const results = await this.app.mysql.query(sql)

    this.ctx.body={
        data:results
    }
  }

  // 详情页 获取文章的详情 接口
  async getArticleById(){
    
    //先配置路由的动态传值，然后再接收值
    let id = this.ctx.params.id

    let sql = 'SELECT article.id as id,'+
    'article.title as title,'+
    'article.introduce as introduce,'+
    'article.article_content as article_content,'+
    "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s' ) as addTime,"+
    'article.view_count as view_count ,'+
    'type.typeName as typeName ,'+
    'type.id as typeId '+
    'FROM article LEFT JOIN type ON article.type_id = type.Id '+
    'WHERE article.id='+id

    const result = await this.app.mysql.query(sql)
  
    this.ctx.body={data:result}
  }
  
  // 获取类别 名称 和 编号
  async getTypeInfo(){

    const result = await this.app.mysql.select('type')
    this.ctx.body = { data: result }
  }

  // 根据类别id 获取文章列表
  async getArticleListById (){
    
    //先配置路由的动态传值，然后再接收值
    let id = this.ctx.params.id
    console.log(id)
    let sql = 'SELECT article.id as id,' +
              'article.title as title,' +
              'article.introduce as introduce,' +
              "FROM_UNIXTIME(article.addTime, '%Y-%m-%d %H:%i:%s') as addTime," +
              'article.view_count as view_count,' +
              'type.typeName as typeName ' +
              'FROM article LEFT JOIN type ON article.type_id = type.Id '+
              'WHERE type_id=' + id

    const result = await this.app.mysql.query(sql)
    
    this.ctx.body = {data: result}
  }
}

module.exports = HomeController;
