const { registerErr } = require("../config/err.config")
const userServices = require("../services/userServices")
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
    login: async(req, res) => {
        const result = await userServices.login(req.body)
    }
}
module.exports = userController