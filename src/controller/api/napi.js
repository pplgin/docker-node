const { Controller } = require('@cctalk/owl')

module.exports = class Api extends Controller {
  async test() {
  	const { ctx } = this
    // this.ctx.coreLogger.info('111')
    await this.ctx.render('index', {
      content: '这个是napi页面！'
    })
  }

  /**
   * 登录
   */
  async register() {
  	const { ctx } = this
    const { name, pwd } = ctx.request.body
    try {
      const res = await ctx.service.user.register({ name, pwd })
      ctx.status = 200
      ctx.body = res
    } catch (error) {
      ctx.log.error(JSON.stringify(error))
      ctx.status = 500
      ctx.body = `error :${JSON.stringify(error)}`
    }
  }
}