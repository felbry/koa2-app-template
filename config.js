module.exports = {
    db: {
        db: 'campus',
        user: 'root',
        pw: '0000',
        option: {
            host: '127.0.0.1',
            port: '3306',
            dialect: 'mysql',
            typeValidation: true,    // 类型检查
            // freezeTableName: true,  // 禁用"表名自动转换复数"功能
            define: {
                version: true,   // 启用锁，避免写冲突
            }
        },
    },
    userKey: 'user',
    adminKey: 'admin',
    port: 3000,
}