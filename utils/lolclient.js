const lol = require('lol-js')
const apiKey = 'RGAPI-99bc7695-5daa-49aa-a21f-961875351772'
const lolClient = lol.client({
    apiKey: apiKey,
    cache: lol.redisCache({host: process.env.REDIS_PORT_6379_TCP_ADDR, port: process.env.REDIS_PORT_6379_TCP_PORT})
})

module.exports = lolClient