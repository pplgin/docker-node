const path = require('path')
const { OwlApplication } = require('pplgin-owl')
const mongoose = require('mongoose')
const { pkg, logConfig, PORT, db } = require('./config')

const app = new OwlApplication({
  pkg,
  logConfig,
	PORT,
	rootPath: __dirname,
  viewRoot: path.join(__dirname, 'views'),
})

// app.bootstrap()
mongoose.connect(db, (err) => {
  if (err) throw err
  // Start App
  app.bootstrap()
})