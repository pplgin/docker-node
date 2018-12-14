const mongoose = require('mongoose')
const { Model } = require('@cctalk/owl')

const userModel = mongoose.model('user', {
  name: String,
  pwd: String
})

module.exports = class LoginModel extends Model {
  get userModel() {
    return userModel
  }
}
