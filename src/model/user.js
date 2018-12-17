const mongoose = require('mongoose')
const { Model } = require('pplgin-owl')

const { ObjectId } = require('mongoose').Types;

module.exports = class LoginModel extends Model {
  constructor(ctx) {
    super(ctx)
    this.model = Model.caches('user', () => mongoose.model('user', {
      name: String,
      pwd: String
    }))
  }

  insert({ name, pwd }) {
    let user = new this.model({ name, pwd })
    return user.save()
  }

  /**
   * 赛选
   * @param {*} param0 
   */
  select({ id, ...args }) {
    if (!id) {
      return Promise.reject('id required!')
    }
    return this.model.find({ _id: new ObjectId(id), ...args }, { __v: 0, _id: 0 })
  }
}
