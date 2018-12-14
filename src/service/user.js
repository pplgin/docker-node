const { Service } = require('@cctalk/owl')

module.exports = class UserService extends Service {
  register({ name, pwd }) {
    const { ctx } = this
    const user = new ctx.model.login.userModel({
      name,
      pwd
    })
    return new Promise((resolve, reject) => {
      user.save((err, res) => {
        if (err) {
          reject(err)
          return
        }
        resolve(res)
      })
    })
  }
}