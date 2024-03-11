const { users, sequelize } = require('../models/index')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const gravatar = require('gravatar')
const registerUser = async (req, res) => {
    const { name, email, password, phoneNumber } = req.body

    try {

        // tạo avatar mặc định
        const avatarUrl = gravatar.url("nghiaphamjb@gmail.com", { protocol: 'http' })
        // tạo ra một chuỗi ngâu nhiên
        const salt = bcryptjs.genSaltSync(10)
        //mã hóa chuỗi ngẫu nhiên với mật khẩu
        const hashPassword = bcryptjs.hashSync(password, salt)
        const newUser = await users.create({ name, email, password: hashPassword, phoneNumber, avatar: avatarUrl })
        res.status(201).send(newUser)
    } catch (error) {
        res.status(500).send(error)
    }
}

const login = async (req, res) => {
    const { email, password } = req.body
    const user = await users.findOne({
        where: {
            email: email
        }
    })
    if (user) {
        const hashPassword = user.password
        const match = await bcryptjs.compare(password, hashPassword)
        if (match) {
            const token = jwt.sign({ email: user.email, type: user.type }, "nghiadeptrai", { expiresIn: 60 * 60 })
            res.status(200).send(
                {
                    message: "Đăng nhập thành công",
                    token: token
                })
        }
        else res.status(500).send("Kiểm tra thông tin mật khẩu")
    } else {
        res.status(404).send("Không tìm thấy user, kiểm tra email")
    }


}
const uploadAvatar = async (req, res) => {
    const file = req.file
    const urlImage = `http://localhost:3000/${file.path}`
    const { user } = req
    const userFound = await users.findOne({
        where: {
            email: user.email
        }
    })
    userFound.avatar = urlImage
    await userFound.save()
    res.status(200).send(userFound)
}

const getAllTrips = async (req, res) => {
    try {
        const [results] = await sequelize.query(
            `select users.name as userName, fromSta.name as fromStation, toSta.name as toStation, trips.price as price from users
            inner join tickets
            on users.id = tickets.user_id
            inner join trips
            on trips.id = tickets.trip_id
            inner join stations as fromSta
            on fromSta.id = trips.fromStation 
            inner join stations as toSta
            on toSta.id = trips.toStation
            `
        )
        res.status(200).send(results)
    } catch (error) {
        res.status(500).send(error)
    }

}
module.exports = {
    registerUser,
    login,
    uploadAvatar,
    getAllTrips
}