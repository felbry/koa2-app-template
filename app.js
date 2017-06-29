const logger = require('koa-logger');
const staticFile = require('koa-static');
const koaBody = require('koa-body');
const jwt = require('koa-jwt');
const cors = require('kcors');
const koa = require('koa');
const path = require('path');

const config = require('./config.js');
const handleError = require('./tools/handleError');
const router = require('./routes');
const dbTables = require('./db/index');

const app = new koa();

// Log
app.use(logger());
app.use(handleError());
app.use(koaBody({
    multipart: true,
    onError: function (err, ctx) {
        ctx.throw(400, 'Bad Request', err);
    },
}));
app.use(cors());
// Serve static files
app.use(staticFile(path.join(__dirname, 'public')));
app.use(router.publicApi.routes());

// jwt
// user validate
app.use(jwt({
    secret: config.userKey,
}).unless({
    path: [/^\/api\/admin/]
}));
// admin validate
app.use(jwt({
    secret: config.adminKey,
}).unless({
    path: [/^\/api\/v/]
}));

app.use(router.privateApi.routes());

app.listen(config.port, function (err) {
    if (err)
        console.log(err);
    else
        console.log('Node app is running on port:', config.port);
});
