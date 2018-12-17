const { NODE_ENV = 'prod', PORT = 6011, LOG_FILE_PATH = 'logs/logstash.log' } = process.env
const path = require('path')
const pkg = require('../package.json')

module.exports = {
  pkg,
  PORT,
  NODE_ENV,
  logConfig: {
    logFilePath: LOG_FILE_PATH, // logfile dir
  },
  db: 'mongodb://mongo/docker'
}