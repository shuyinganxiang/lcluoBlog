// 前台配置文件
module.exports = app => {
    // 结构对象
    const {router, controller} = app
    router.get('/default/index', controller.default.home.index)
    router.get('/default/getArticleList', controller.default.home.getArticleList)
    router.get('/default/getArticleById/:id', controller.default.home.getArticleById)
    router.get('/default/getTypeInfo', controller.default.home.getTypeInfo)
    router.get('/default/getArticleListById/:id', controller.default.home.getArticleListById)
}