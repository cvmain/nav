const { registerErr } = require("../config/err.config")
const userServices = require("../services/userServices")

const userController = {
    register: async(req, res) => {
        try {
            const result = await userServices.register(req.body)
            res.send(result)
        } catch (err) {
            registerErr.result = err
            res.send(registerErr)
        }
    },
    login: async(req, res) => {

    }
}
module.exports = userController