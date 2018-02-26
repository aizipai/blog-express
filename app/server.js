
import path from 'path'
import Express from 'express'
import favicon from 'serve-favicon'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import router from './router/index.js'
import routerAdmin from './router/admin.js'

const config = require('./config.js')

const app = new Express()
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser('blog_cookie'));
app.use(session({
    secret:'blog_cookie',
    resave: true,
    saveUninitialized:true,
    cookie: {maxAge: 60 * 1000 * 30}//过期时间
}));
// app.use(favicon(path.join(__dirname, 'favicon.ico')))

//设置跨域
const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', `${config['host']}:${config['corsPort']}`);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
    next();
};
app.use(allowCrossDomain);

//设置路由
app.use('/api',router)

//链接数据库
mongoose.connect(`mongodb://${config.dbHost}:${config.dbPort}/blog`, function (err) {
    if (err) {
        console.log(err, "数据库连接失败");
        return;
    }
    console.log('数据库连接成功');
});

app.listen(config['port'],err=>{
	if(err){
		console.log(err)
	}else{
		console.log(`===>server is running at ${config['port']}`)
	}
})
