const express = require("express");

const router = express.Router();

const controllers = require("../controllers/utenti_controllers");

router.get("/", controllers.getUtenti);

router.post("/addutente/", controllers.addUtente);

router.get("/:email/", controllers.getUtente);

router.put("/updateutente/:email", controllers.updateUtente);

router.delete("/deleteutente/:email", controllers.deleteUtente);

module.exports = router;