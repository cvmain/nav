const { registerErr, loginErr } = require("../config/err.config")
const userServices = require("../services/userServices")
const jwt = require("jsonwebtoken")
const jwtSecret = "b6e64758-d6d7-5a0a-2f3d-056c776967fb"
const userController = {
    register: async(req, res, next) => {
        try {
            const result = await userServices.register(req.body)
            const auth_result = await userServices.authCreate(req.body)
            if (result && auth_result) {
                res.send({
                    code: 200,
                    msg: "注册成功",
                    result
                })
            }



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
            const token =
                res.header("authorization", token)
            res.send({
                code: 200,
                msg: "登陆成功",
                result
            })
        }
    },
    update: async(req, res, next) => {
        const result = await userServices.update(req.body, req.params.id)
        console.log(req.params.id);
        if (result.modifiedCount == 1) {
            res.send({
                code: 200,
                msg: "修改成功",
                result
            })
        } else {
            res.send(result)
        }
    },
    getUser: async(req, res, next) => {
        const { id } = req.query
        const result = await userServices.getUser(id)
        const body = await userServices.getLove(id)
        res.send({
            code: 200,
            msg: "获取成功",
            result
        })
    },
    setLove: async(req, res, next) => {
        await userServices.setLove(req.body)
    }
}
module.exports = userController