const { registerErr, loginErr } = require("../config/err.config")
const userServices = require("../services/userServices")
const jwt = require("jsonwebtoken")
const jwtSecret = "b6e64758-d6d7-5a0a-2f3d-056c776967fb"
const userController = {
    register: async(req, res, next) => {
        try {
            const result = await userServices.register(req.body)
            res.send({
                code: 200,
                msg: "注册成功",
                result
            })
        } catch (err) {
            registerErr.result = err
            res.send(registerErr)
        }
    },
    login: async(req, res, next) => {
        const { username, password } = req.body
        const result = await userServices.login(username, password)
        if (!result) {
            res.send(loginErr)
        } else {
            const token = jwt.sign({
                username: result.username,
                _id: result._id

            }, jwtSecret, { expiresIn: '1h' })
            res.header("authorization", token)
            res.send({
                code: 200,
                msg: "登陆成功",
                result
            })
        }
    },
    update: async(req, res, next) => {
        // const result = await update()
    }
}
module.exports = userController