const {Router} = require("express")

const router = Router()

router.get("/get", getTasks);

module.exports = router