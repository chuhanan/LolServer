const lol = require('lol-js')
const apiKey = require('../config').apiKey
const lolClient = lol.client({
    apiKey: apiKey,
    cache: lol.redisCache({host: process.env.REDIS_PORT_6379_TCP_ADDR, port: process.env.REDIS_PORT_6379_TCP_PORT})
})

module.exports = lolClient