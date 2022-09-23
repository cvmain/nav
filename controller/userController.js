const userServices = require("../services/userServices")

const userController = {
    register: async(req, res) => {
        const result = await userServices.register(req.body)
        res.send(result)
    }
}
module.exports = userController