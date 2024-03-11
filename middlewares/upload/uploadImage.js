const { mkdirp } = require('mkdirp')
const multer = require('multer')

const uploadImage = (type) => {
    const made = mkdirp.sync(`./public/images/${type}`)
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, `./public/images/${type}`) // setup nơi lưu file
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + "_" + file.originalname) // đặt lại tên cho file
        }
    })
    const upload = multer({
        storage: storage,
        fileFilter: function (req, file, cb) {
            const extentionImageList = [".png", ".jpg"]
            const extention = file.originalname.slice(-4)

            const check = extentionImageList.includes(extention)
            if (check) { cb(null, true) }
            else cb(new Error("file không hợp lệ"))
        }
    })
    return upload.single(type)
}

module.exports = {
    uploadImage
}