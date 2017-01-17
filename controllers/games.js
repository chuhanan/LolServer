const lolClient = require('../utils/lolClient')

const games = async (ctx, next) => {
    const arr = [ctx.params.id]
    try {
    	// 参数为地区与玩家 id
    	const data = await lolClient.getRecentGamesForSummoner('kr', arr)
	    ctx.response.body = data
	    next
    }catch(err) {
    	ctx.response.body = err
    }
}

module.exports = {
	'GET /games/:id': games
}