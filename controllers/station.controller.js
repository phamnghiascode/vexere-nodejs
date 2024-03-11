const { Station } = require('../models/index')
const { Op } = require('sequelize')
const createStation = async (req, res) => {
    const { name, address, province } = req.body
    try {

        const newStation = await Station.create({ name, address, province })
        res.status(201).send(newStation)
    } catch (error) {
        res.status(500).send(error)
    }

}

const getAllStation = async (req, res) => {
    const { name } = req.query
    console.log(name)
    try {
        if (name) {
            const station = await Station.findAll({
                where: {
                    name: {
                        [Op.like]: `%${name}%`
                    }
                }
            })
            res.status(200).send(station)
        }
        else {
            const stationList = await Station.findAll()
            res.status(200).send(stationList)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}
const getDetailStaion = async (req, res) => {
    const { id } = req.params
    try {
        const station = await Station.findOne({
            where: {
                id: id
            }
        })
        res.status(200).send(station)
    } catch (error) {
        res.status(500).send(error)
    }

}


const updateStation = async (req, res) => {
    const { id } = req.params
    const { name, address, province } = req.body
    try {
        const station = await Station.findOne({
            where: {
                id: id
            }
        })
        station.name = name
        station.address = address
        station.province = province
        await station.save()
        res.status(200).send(station)
    } catch (error) {
        res.status(500).send(error)
    }

}
const deleteStation = async (req, res) => {
    const { id } = req.params
    try {
        await Station.destroy({
            where: {
                id
            }
        })
        res.status(200).send("deleted")
    } catch (error) {
        res.status(500).send(error)
    }
}
module.exports = {
    createStation,
    getAllStation,
    getDetailStaion,
    deleteStation,
    updateStation

}