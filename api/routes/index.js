const express = require("express")
const app = express()
const router = express.Router()
const users = require("./users") 
const property = require("./property") 
const date = require("./dates")

router.use("/users",users)
router.use("/property",property)
router.use("/date",date)


module.exports = router