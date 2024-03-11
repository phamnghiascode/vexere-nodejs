const express = require('express')
const { authenticate } = require('../middlewares/auth/authenticate')
const { authorize } = require('../middlewares/auth/authorize')
const { createTrip, getAllTrips, getDetailTrip, deleteTrip, updateTrip } = require('../controllers/trip.controllers')

const tripRouters = express.Router()

tripRouters.post('/', createTrip)

tripRouters.get('/', getAllTrips)

tripRouters.get('/:id', getDetailTrip)

tripRouters.delete('/:id', deleteTrip)

tripRouters.put('/:id', updateTrip)

module.exports = {
    tripRouters
}