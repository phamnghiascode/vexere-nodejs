const express = require('express')
const { createStation, getAllStation, getDetailStaion, deleteStation, updateStation } = require('../controllers/station.controller')
const { authenicate } = require('../middlewares/auth/authenticate')
const { authorize } = require('../middlewares/auth/authorize')
const { checkExist } = require('../middlewares/validation/checkExist')

const { Station } = require("../models/index")
const stationRouter = express.Router()

stationRouter.post("/", authenicate, authorize(["admin", "super_admin"]), createStation)

stationRouter.get("/", getAllStation)

stationRouter.get("/:id", checkExist(Station), getDetailStaion)

stationRouter.put("/:id", authenicate, authorize(["admin", "super_admin"]), checkExist(Station), updateStation)

stationRouter.delete("/:id", authenicate, authorize(["admin", "super_admin"]), checkExist(Station), deleteStation)

module.exports = {
    stationRouter
}