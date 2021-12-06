const Router = require("express")
const router = new Router()
const userController = require("../controllers/controller")

router.post("/data", userController.createRow)

router.get("/data", userController.getRows)


module.exports = router