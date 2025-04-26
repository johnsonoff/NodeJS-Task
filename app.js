const express = require("express")
const app=express()
const mongoose = require("mongoose")
const Emp = require("./model/Employee")
const router=require("./routes/EmpRoutes")
const dotenv = require("dotenv")
dotenv.config()
app.use(express.json());
app.use("/emp",router)


const db = process.env.mongo_uri


main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(db);
    console.log("MongoDB Connected ✅");
  }
  
app.listen("3000", (req, res) => {
    console.log("serve is running on 3000")
})


// app.get("/emp", async(req, res) => {
    
//     const users = await Emp.find({})
//     res.status(200).send(users)
// })

// app.post("/emp", async(req, res) => {
//     try {
//         const emp = await Emp.create(req.body)
//         res.status(200).send(emp)
//     }
//     catch (error) {
//         res.status(500).send(error.message)
//     }
// })

// app.put("/emp", async (req, res) => {
//     try {
//         const _id=req.params.id
//         const emp = await Emp.findByIdAndUpdate(_id, req.body)
//         res.status(200).send("updated")
//     }
//     catch (error) {
//         res.status(500).send(error.message)
//     }
// })

// app.delete("/emp", async (req, res) => {
//     try {
//         const _id=req.params.id
//         const emp = await Emp.findByIdAndDelete(_id)
//         res.status(200).send("Deleted")
//     }
//     catch(error) {
//         res.status(500).send(error.message)
//     }
// })





