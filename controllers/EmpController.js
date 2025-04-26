const mongoose = require("mongoose")
const Emp=require("../model/Employee")

const fetch=async(req, res) => {
    try {
        const users = await Emp.find({})
        res.status(200).send(users)
    }
    catch (error) {
        res.status(500).send(error.message)
    }
}

const create=async(req, res) => {
    try {
        const emp = await Emp.create(req.body)
        res.status(200).send(emp)
    }
    catch (error) {
        res.status(500).send(error.message)
    }
}

const update= async (req, res) => {
    try {
        const _id=req.params.id
        const emp = await Emp.findByIdAndUpdate(_id, req.body)
        res.status(200).send(emp+"updated")
    }
    catch (error) {
        res.status(500).send(error.message)
    }
}

const del =async (req, res) => {
    try {
        const _id=req.params.id
        const emp = await Emp.findByIdAndDelete(_id)
        res.status(200).send(emp+"Deleted")
    }
    catch(error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    fetch,create,update,del
}