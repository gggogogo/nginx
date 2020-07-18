const Koa = require('koa')
const fs = require('fs')
const Route = require('koa-route')
const app = new Koa()

app.use(async ctx=>{
  ctx.response.type = 'html'
  ctx.response.body = fs.createReadStream('./demo1.html')
}).listen(3000)