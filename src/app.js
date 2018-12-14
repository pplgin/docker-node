const path = require('path')
const { OwlApplication } = require('@cctalk/owl')
const mongoose = require('mongoose')
const { pkg, logFilePath, PORT, db } = require('./config')

const app = new OwlApplication({
	pkg,
	logFilePath,
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