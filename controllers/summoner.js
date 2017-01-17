const lolClient = require('../utils/lolClient')

const summoner = async (ctx, next) => {
    const id = ctx.params.id
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
	'GET /summoner/:id': summoner
}