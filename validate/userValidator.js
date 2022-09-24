const Joi = require('joi')
const userDateRules = Joi.object({
    username: Joi.string().min(6).max(16).error(new Error('用户名不符合验证规则')),
    email: Joi.string().regex(/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/).error(new Error('邮箱不符合验证规则')),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).error(new Error('密码不符合验证规则')),
    status: Joi.number().valid(0, 1),
    role: Joi.string().valid('normal', 'admin')
})
module.exports = {
    userDateRules
}