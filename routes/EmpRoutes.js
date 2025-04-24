const express = require("express")
const route = express.Router()
const { fetch, create, update, del } = require("../controllers/EmpController")


route.get("/",fetch)
route.post("/",create)
route.put("/:id",update)
route.delete("/:id", del)

module.exports=route