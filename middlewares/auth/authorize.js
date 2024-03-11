const authorize = (arrType) => (req, res, next) => {
    const { user } = req
    if (arrType.findIndex((ele) => ele === user.type) > -1) {
        return next()
    }
    else res.status(403).send("Bạn không có quyền làm việc này")
}
module.exports = {
    authorize
}