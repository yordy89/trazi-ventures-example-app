import express from "express";
import * as CityPopulationController from "../controllers/CityPopulation.js";
import { validatePopulation } from "../middleware/validatePopulation.js";

const router = express.Router();

router.get(
  "/state/:state/city/:city",
  CityPopulationController.findPopulationByCityAndState
);

router.put(
  "/state/:state/city/:city",
  validatePopulation,
  CityPopulationController.updatePopulationByCityAndState
);

export default router;
