const lolClient = require('../utils/lolClient')

const summoners = async (ctx, next) => {
    const name = ctx.params.name
    const arr = [name]
    try {
    	const data = await lolClient.getSummonersByName('kr', arr)
	    ctx.response.body = data
	    next
    }catch(err) {
    	ctx.response.body = err
    }
}

module.exports = {
	'GET /summoners/:name': summoners
}