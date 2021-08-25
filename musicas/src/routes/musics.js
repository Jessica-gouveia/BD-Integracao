const express = require("express")
const router = express.Router()
const controller = require("../controllers/musicsController")


router.post("/", controller.createMusic)

router.delete("/:id", controller.deleteMusic)

router.put("/:id", controller.updateMusic)
router.patch("/:id/favorited", controller.updateFavorited)

router.get("/musics", controller.getAllMusics)



module.exports = router;
