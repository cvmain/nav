const err = {
    registerErr: {
        code: 10001,
        msg: "用户名存在",
        result: ""
    },
    loginErr: {
        code: 10002,
        msg: "用户名或密码错误",
        result: ""
    },
    tokenErr: {
        code: 10000,
        msg: "登录过期，请重新登陆",
        result: ""
    }
}
module.exports = err