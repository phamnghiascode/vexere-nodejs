const { Trips, Station } = require('../models/index')

const createTrip = async (req, res) => {
    const { fromStation, toStation, startTime, price } = req.body
    const newTrip = await Trips.create({ fromStation, toStation, startTime, price })
    res.status(201).send(newTrip)
}
const getAllTrips = async (req, res) => {
    const tripList = await Trips.findAll({
        include: [
            {
                model: Station,
                as: "from"
            },
            {
                model: Station,
                as: "to"
            }
        ]
    })
    res.status(200).send(tripList)
}
const getDetailTrip = async (req, res) => {
    const { id } = req.params
    const trip = await Trips.findOne({
        where: {
            id: id
        },
        include: [
            {
                model: Station,
                as: "from"
            },
            {
                model: Station,
                as: "to"
            }
        ]
    })

    res.status(200).send(trip)
}

const deleteTrip = async (req, res) => {
    const { id } = req.params
    const rowdeleted = await Trips.destroy({
        where: {
            id: id
        }
    })
    console.log("deleted: ", rowdeleted)
    if (rowdeleted) {
        res.status(200).send("deleted")
    } else res.status(500).send("error")
}

const updateTrip = async (req, res) => {
    const { id } = req.params
    const { fromStation, toStation, startTime, price } = req.body
    try {
        const trip = await Trips.findOne({ where: { id: id } })
        trip.fromStation = fromStation
        trip.toStation = toStation
        trip.startTime = startTime
        trip.price = price
        await trip.save()
        res.status(200).send(trip)
    } catch (error) {
        res.status(500).send(error)
    }

}
module.exports = {
    createTrip,
    getAllTrips,
    getDetailTrip,
    deleteTrip,
    updateTrip
}