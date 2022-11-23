const express = require("express")
const app = express()
const router = express.Router()
const users = require("./users") 
const property = require("./property") 

router.use("/users",users)
router.use("/property",property)

module.exports = router