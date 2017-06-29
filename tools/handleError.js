module.exports = function handleError () {
    return (ctx, next) => next().catch((err) => {
        if (err.status) {
            ctx.status = err.status;
            ctx.body = err.message;
        } else {
            throw err;
        }
    });
}