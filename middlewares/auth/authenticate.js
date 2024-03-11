const jwt = require('jsonwebtoken')
const authenicate = (req, res, next) => {
    try {
        const token = req.header("token")
        const decode = jwt.verify(token, "nghiadeptrai")

        if (decode) {
            req.user = decode
            return next()
        }
    } catch (error) {
        res.status(500).send(error)
    }
}
module.exports = {
    authenicate
}