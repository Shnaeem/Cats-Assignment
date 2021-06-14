const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => res.send("This is the root."));

router.get("/cats", controllers.getAllCats);
router.get("/cats/:id", controllers.getCatByID);
router.post("/cats", controllers.createCat);
router.delete("/cats/:id", controllers.deleteCat);
router.put("/cats/:id", controllers.updateCat);

module.exports = router;