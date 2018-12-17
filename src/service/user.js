const { Service } = require('pplgin-owl')

module.exports = class UserService extends Service {
  async register({ name, pwd }) {
    const { user } = this.ctx.model
    try {
      const res = await user.insert({ name, pwd })
      return {
        data: res
      }
    } catch (error) {
      throw error
    }
  }

  async find({ id, ...args}) {
    const { user } = this.ctx.model
    try {
      const res = await user.select({ id, ...args})
      return {
        data: res
      }
    } catch (error) {
      throw error
    }   
  }
}