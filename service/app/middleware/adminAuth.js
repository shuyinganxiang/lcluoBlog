
module.exports = options =>{
    return async function adminAuth(ctx,next){
        console.log(ctx.session.openId)
        await next()
        return 
        // 登录 守卫 不放呢出现问题
        if(ctx.session.openId){
            await next()
        }else{
            ctx.body={data:'没有登录'}
        }
    }
}