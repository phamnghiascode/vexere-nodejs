
const { Station } = require('../../models/index')

const checkExist = (Model) => {
    return async (req, res, next) => {
        const { id } = req.params

        const station = await Station.findOne({
            where: {
                id
            }
        })

        console.log("station: ", station)
        if (station) next()
        else res.status(404).send(`Không có bến xe có id là ${id}`)
    }
}


module.exports = {
    checkExist
}