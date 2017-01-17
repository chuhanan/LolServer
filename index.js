// 导入 koa 依赖
const Koa = require('koa')
// 路由中间件koa-router 暴露出来的是一个函数
const router = require('koa-router')()

// 创建一个Koa对象
const app = new Koa()

// 控制器中间件
const controller = require('./middlewares/controller')
// 注册配置好的路由
app.use(controller())

// 开启服务
const PORT = process.env.PORT || 8080
app.listen(PORT)
console.log(`=====================
	app started at port ${PORT}...
	=============================`)