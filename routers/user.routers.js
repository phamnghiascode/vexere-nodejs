const express = require('express')
const { registerUser, login, uploadAvatar, getAllTrips } = require('../controllers/user.controller')
const { uploadImage } = require('../middlewares/upload/uploadImage')
const { authenicate } = require('../middlewares/auth/authenticate')
const userRouter = express.Router()

userRouter.post("/register", registerUser)

userRouter.post("/login", login)

userRouter.post('/upload-avatar', authenicate, uploadImage("avatar"), uploadAvatar)

userRouter.get('/all-trips', getAllTrips)
module.exports = {
    userRouter
}